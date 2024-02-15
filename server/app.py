#!/usr/bin/env python3

from models import db, Book, User, BookUser, ClubUser, Club
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
    return 'u are home!'

@app.route('/books')
def all_books(): 
    books =Book.query.all()
    book_dicts = [b.to_dict() for b in books]
    book_count = len(book_dicts)
    return {"book_count": book_count, "books": book_dicts}, 200

@app.route('/users')
def all_users(): 
    users = User.query.all()
    user_dicts = [u.to_dict() for u in users]
    user_count = len(user_dicts)
    return {"user_count": user_count, "users": user_dicts}, 200

@app.route('/clubs')
def all_clubs(): 
    clubs = Club.query.all()
    club_dicts = [c.to_dict() for c in clubs]
    club_count = len(club_dicts)
    return {"club_count": club_count, "clubs": club_dicts}, 200


@app.route('/users/<int:id>')
def user_by_id(id):
    user = User.query.filter(User.id == id).first()

    if user is None: 
        return {'error':'user not found :(' }, 404
    if request.method == 'GET':
        return user.to_dict(), 200

#get the books that each user has in their to-read/read.. query the BookUser given the user_id
@app.route('/books/<int:user_id>')
def books_by_user(user_id):
    if user_id is None: 
        return {'error':'user not found :(' }, 404
    
    books = BookUser.query.filter(BookUser.user_id == user_id)
    return [b.to_dict(rules=['-user']) for b in books], 200

    books = (db.session.query(Book))

# #should this be by book id, or user.id
#show a list of books, click on the associated "remove" in order to REMOVE IT
#same with a list of books, once finished ... "read" option
#how to get it so that once 5 users have this book in this list, then a club will be made??
# @app.route('/books/<int:id>', methods=['DELETE'])
# def book_by_id(id): 
#     book = Book.query.filter(Book.id == id).first()

#     if book is None: 
#         return {'error': 'book not found'}, 404
    
#     db.session.delete(book)
#     db.session.commit()

#     return {}, 204
    

@app.route('/clubs/<int:user_id>')
#would still query the clubuser, but interested in the clubs ... 
def clubs_by_user(user_id):
    if user_id is None: 
        return {'error':'user not found :(' }, 404
    
    clubs = ClubUser.query.filter(ClubUser.user_id == user_id)
    return [c.to_dict(rules=()) for c in clubs], 200
    

    #get the clubs the user is in on the clubuser ... 
    #clubuser/user-id: given a user ID, return all the clubs you user is in 

# @app.route('/bookusers', methods = ['POST'])
# def all_bookusers():
#     json_data = request.get_json()

#     new_bookuser = bookuser(
#         time = json_data.get('time'),
#         camper_id = json_data.get('camper_id'),
#         activity_id = json_data.get('activity_id')
#     )

#     db.session.add(new_bookuser)
#     db.session.commit()

#     return new_bookuser.to_dict(), 201