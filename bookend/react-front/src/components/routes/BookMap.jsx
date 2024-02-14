import BooksList from "./BooksList"

function BookShow({books}) {

    
    return(
        <div>
        {books.map((book) => (<BooksList key={book.id} book={book} />))}
        </div>
    )
}


export default BookShow;