from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Book, BookUser, User

fake = Faker()


def create_books():
    books = []
    for _ in range(10):
        b = Book(
            title=fake.sentence(),
            author=fake.name(),
            genre=fake.word(),
        )
        books.append(b)

    return books


def create_users():
    users = []
    for _ in range(10):
        u = User(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
        )
        users.append(u)

    return users


def create_bookusers(books, users):
    bookusers = []
    for _ in range(20):
        s = BookUser(
            user_id=rc([user.id for user in users]),
            book_id=rc([book.id for book in books])
        )
        bookusers.append(s)

    return bookusers


if __name__ == '__main__':

    with app.app_context():
        print("Clearing db...")
        Book.query.delete()
        BookUser.query.delete()
        User.query.delete()

        print("Seeding books...")
        books = create_books()
        db.session.add_all(books)
        db.session.commit()

        print("Seeding users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding bookusers...")
        bookusers = create_bookusers(books, users)
        db.session.add_all(bookusers)
        db.session.commit()

        print("Done seeding!")
