from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Book, BookUser, User, Club, ClubUser

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

def create_clubs(books):
    clubs = []
    for _ in range(5):
        c = Club(
            book_id=rc([book.id for book in books]),
            start_date=fake.date_this_decade(),
            end_date=fake.future_date(end_date="+1y"),
        )
        clubs.append(c)

    return clubs

def create_userclubs(users, clubs):
    userclubs = []
    for user in users:
        for _ in range(randint(1, 3)):  # Each user is in 1-3 clubs
            uc = ClubUser(
                user_id=user.id,
                club_id=rc([club.id for club in clubs]),
            )
            userclubs.append(uc)

    return userclubs



if __name__ == '__main__':

    with app.app_context():
        print("Clearing db...")
        Book.query.delete()
        BookUser.query.delete()
        User.query.delete()
        Club.query.delete()
        ClubUser.query.delete()

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

        print("Seeding clubs...")    
        clubs = create_clubs(books)  
        db.session.add_all(clubs)
        db.session.commit()

        print("Seeding userclubs...")     
        userclubs = create_userclubs(users, clubs)  
        db.session.add_all(userclubs)
        db.session.commit()
        

        print("Done seeding!")
