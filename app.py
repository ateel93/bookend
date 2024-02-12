#!/usr/bin/env python3

from models import db, Book, User, Club, Read, ToRead
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def home():
    return ''

@app.route('/books')
def all_books(): 
    books = Book.query.all()
    return [b.to_dict() for b in books], 200

@app.route('/users/<int:id>')
def user_by_id(id):
    user = User.query.filter(User.id == id).first()

    if user is None: 
        return {'error':'user not found :(' }, 404
    if request.method == 'GET':
        return user.to_dict(), 200
    

@app.route('/books', methods=['GET'])
def all_books(): 
    books = Book.query.all()
    return [b.to_dict for b in books], 200


# @app.route('/signups', methods = ['POST'])
# def all_signups():
#     json_data = request.get_json()

#     new_signup = Signup(
#         time = json_data.get('time'),
#         camper_id = json_data.get('camper_id'),
#         activity_id = json_data.get('activity_id')
#     )

#     db.session.add(new_signup)
#     db.session.commit()

#     return new_signup.to_dict(), 201

