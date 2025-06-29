# server/models.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Agent(db.Model):
    __tablename__ = 'agents'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    number = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)

    properties = db.relationship("Property", backref="agent", cascade="all, delete-orphan")
    clients = db.relationship("Client", backref="agent", cascade="all, delete-orphan")

class Property(db.Model):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)

    agent_id = db.Column(db.Integer, db.ForeignKey('agents.id'), nullable=False)
    clients = db.relationship("Client", backref="property", cascade="all, delete-orphan")

class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)

    agent_id = db.Column(db.Integer, db.ForeignKey('agents.id'), nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
