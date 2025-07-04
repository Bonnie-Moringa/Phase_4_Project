from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, Agent, Property, Client

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///real_estate.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

# ----------- Agents -----------
@app.route('/agents', methods=['GET'])
def get_agents():
    agents = Agent.query.all()
    return jsonify([{
        'id': agent.id,
        'name': agent.name,
        'number': agent.number,
        'email': agent.email,
        'phone_number': agent.phone_number
    } for agent in agents]), 200

@app.route('/agents', methods=['POST'])
def add_agent():
    data = request.get_json()
    new_agent = Agent(**data)
    db.session.add(new_agent)
    db.session.commit()
    return jsonify({'message': 'Agent added', 'id': new_agent.id}), 201

@app.route('/agents/<int:agent_id>', methods=['DELETE'])
def delete_agent(agent_id):
    agent = Agent.query.get(agent_id)
    if not agent:
        return jsonify({'error': 'Agent not found'}), 404
    db.session.delete(agent)
    db.session.commit()
    return jsonify({'message': 'Agent deleted'}), 200

# ----------- Properties -----------
@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'status': p.status,
        'agent_id': p.agent_id
    } for p in properties]), 200

@app.route('/properties', methods=['POST'])
def add_property():
    data = request.get_json()
    new_property = Property(**data)
    db.session.add(new_property)
    db.session.commit()
    return jsonify({'message': 'Property added', 'id': new_property.id}), 201

# ----------- Clients -----------
@app.route('/clients', methods=['GET'])
def get_clients():
    clients = Client.query.all()
    return jsonify([{
        'id': c.id,
        'name': c.name,
        'email': c.email,
        'phone_number': c.phone_number,
        'agent_id': c.agent_id,
        'property_id': c.property_id
    } for c in clients]), 200

@app.route('/clients', methods=['POST'])
def add_client():
    data = request.get_json()
    new_client = Client(**data)
    db.session.add(new_client)
    db.session.commit()
    return jsonify({'message': 'Client added', 'id': new_client.id}), 201

if __name__ == '__main__':
    app.run(debug=True)
