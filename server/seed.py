from app import app, db
from models import Agent, Property, Client

def seed():
    with app.app_context():
        # Reset database
        db.drop_all()
        db.create_all()

        # Add agents
        agent1 = Agent(name="Lucy Waceke", number="A100", email="lucy@gmail.com", phone_number="0736328273")
        agent2 = Agent(name="Emmanuel Wakanyi", number="A101", email="wakanyi@gmail.com", phone_number="0729283746")
        db.session.add_all([agent1, agent2])
        db.session.commit()

        # Add properties
        property1 = Property(name="Asili Grove Matuu", status="available", agent_id=agent1.id)
        property2 = Property(name="Plains 2", status="sold", agent_id=agent2.id)
        db.session.add_all([property1, property2])
        db.session.commit()

        # Add clients
        client1 = Client(name="Salome Mburu", email="salome@gmail.com", phone_number="0739004475", agent_id=agent1.id, property_id=property1.id)
        client2 = Client(name="Danish Otieno", email="danoti@gmail.com", phone_number="0112335567", agent_id=agent2.id, property_id=property2.id)
        db.session.add_all([client1, client2])
        db.session.commit()

        print("✅ Database seeded successfully.")

if __name__ == "__main__":
    seed()
