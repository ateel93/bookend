from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    # Add db columns
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    author = db.Column(db.String)
    genre = db.Column(db.String)

    def __repr__(self):
        return f'<Book {self.id}: {self.title} {self.author} {self.genre}>'


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    # Add db columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    
    # Add relationship
    #how to get which clubs the user is a part of 
    # club_user = db.relationship('ClubUser', back_populates='users')
    #how to get which books are in the "reads" table 4 this user
    bookusers = db.relationship('BookUser', back_populates='user')
    
    # Add serialization rules
    serialize_rules = ['-bookusers.user']
    
    def __repr__(self):
        return f'<User {self.id}: {self.name}>'
    
class BookUser(db.Model, SerializerMixin):
    __tablename__ = 'bookusers'

    # Add db columns
    id = db.Column(db.Integer, primary_key=True)
    #what do we want to name the clubs here?
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    is_read = db.Column(db.Boolean, default=False, nullable=False)

    #add relationship
    user = db.relationship('User', back_populates = 'bookusers')
    
    # Add serialization rules
    # serialize_rules = ['-books.reads', '-users.reads']
    
    def __repr__(self):
        return f'<Read {self.id} User Id: {self.user_id} Book Id: {self.book_id}>'
    


# class Club(db.Model, SerializerMixin):
#     __tablename__ = 'clubs'

#     # Add db columns
#     id = db.Column(db.Integer, primary_key=True)
#     #what do we want to name the clubs here?
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     book_id = db.Column(db.Integer, db.ForeignKey('books.id'))

#     # Add relationships
#     club_user = db.relationship('ClubUser', back_populates = 'clubs')
#     #is this below needed?
#     book = db.relationship('Book', back_populates = 'books')
    
    # # Add serialization rules
    # serialize_rules = ['-users.bookuser', '-activity.bookusers']
    
    # def __repr__(self):
    #     return f'<Club {self.id}>'

#joing table b/w club and user (since that table is many <-> many)
# class ClubUser(db.Model, SerializerMixin):
#     __tablename__ = 'club_users'

#     # Add db columns
#     id = db.Column(db.Integer, primary_key=True)
#     #what do we want to name the clubs here?
#     user_id = db.Column(db.Integer, db.ForeignKey('club_users'))
#     club_id = db.Column(db.Integer, db.ForeignKey('club_users'))

#     # Add relationships
#     users = db.relationship('User', back_populates = 'to_reads')
#     clubs = db.relationship('Club', back_populates = 'to_reads')
    
    # def __repr__(self):
    #     return f'<ToRead {self.id} User Id: {self.user_id} Book Id: {self.book_id}>'

