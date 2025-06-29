# app.py

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
    required_fields = ['name', 'number', 'email', 'phone_number']

    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'error': f'Missing fields: {", ".join(missing_fields)}'}), 400

    new_agent = Agent(
        name=data['name'],
        number=data['number'],
        email=data['email'],
        phone_number=data['phone_number']
    )
    db.session.add(new_agent)
    db.session.commit()
    return jsonify({'message': 'Agent added successfully', 'id': new_agent.id}), 201


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
        'id': prop.id,
        'name': prop.name,
        'status': prop.status,
        'agent_id': prop.agent_id
    } for prop in properties]), 200


@app.route('/properties', methods=['POST'])
def add_property():
    data = request.get_json()
    required_fields = ['name', 'status', 'agent_id']

    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'error': f'Missing fields: {", ".join(missing_fields)}'}), 400

    new_property = Property(
        name=data['name'],
        status=data['status'],
        agent_id=data['agent_id']
    )
    db.session.add(new_property)
    db.session.commit()
    return jsonify({'message': 'Property added successfully', 'id': new_property.id}), 201


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
    required_fields = ['name', 'email', 'phone_number', 'agent_id', 'property_id']

    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'error': f'Missing fields: {", ".join(missing_fields)}'}), 400

    new_client = Client(
        name=data['name'],
        email=data['email'],
        phone_number=data['phone_number'],
        agent_id=data['agent_id'],
        property_id=data['property_id']
    )
    db.session.add(new_client)
    db.session.commit()
    return jsonify({'message': 'Client added successfully', 'id': new_client.id}), 201


if __name__ == '__main__':
    app.run(debug=True)
