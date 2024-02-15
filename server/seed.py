from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Book, BookUser, User, Club, ClubUser

fake = Faker()

books_list = [
    {"title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Classic"},
    {"title": "1984", "author": "George Orwell", "genre": "Dystopian"},
    {"title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance"},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Roaring Twenties"},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Coming-of-age"},
    {"title": "Harry Potter and the Philosopher's Stone", "author": "J.K. Rowling", "genre": "Fantasy"},
    {"title": "To the Lighthouse", "author": "Virginia Woolf", "genre": "Modernist"},
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Adventure"},
    {"title": "The Da Vinci Code", "author": "Dan Brown", "genre": "Mystery"},
    {"title": "The Road", "author": "Cormac McCarthy", "genre": "Post-Apocalyptic"},
    {"title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "genre": "Epic"},
    {"title": "The Hunger Games", "author": "Suzanne Collins", "genre": "Dystopian"},
    {"title": "Brave New World", "author": "Aldous Huxley", "genre": "Utopian"},
    {"title": "Frankenstein", "author": "Mary Shelley", "genre": "Gothic"},
    {"title": "Gone with the Wind", "author": "Margaret Mitchell", "genre": "Historical"},
    {"title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "genre": "Decadent"},
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "genre": "Comedy"},
    {"title": "Moby-Dick", "author": "Herman Melville", "genre": "Whaling"},
    {"title": "The Alchemist", "author": "Paulo Coelho", "genre": "Allegorical"},
    {"title": "Jane Eyre", "author": "Charlotte Brontë", "genre": "Gothic Romance"},
    {"title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "author": "C.S. Lewis", "genre": "Fantasy"},
    {"title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "genre": "Psychological"},
    {"title": "The Kite Runner", "author": "Khaled Hosseini", "genre": "Historical Fiction"},
    {"title": "One Hundred Years of Solitude", "author": "Gabriel García Márquez", "genre": "Magical Realism"},
    {"title": "The Bell Jar", "author": "Sylvia Plath", "genre": "Semi-Autobiographical"},
    {"title": "The Color Purple", "author": "Alice Walker", "genre": "Epistolary"},
    {"title": "Wuthering Heights", "author": "Emily Brontë", "genre": "Gothic Romance"},
    {"title": "The Road Less Traveled", "author": "M. Scott Peck", "genre": "Self-help"},
    {"title": "The Stand", "author": "Stephen King", "genre": "Horror"},
    {"title": "The Secret Garden", "author": "Frances Hodgson Burnett", "genre": "Children's Literature"}
]


def create_books():
    books = []
    for book_info in books_list:
        b = Book(
            title=book_info["title"],
            author=book_info["author"],
            genre=book_info["genre"]
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
