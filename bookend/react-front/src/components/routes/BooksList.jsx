import Search from "../features/Search";

function BooksList() {
    return (
        // Map goes here for all books
        <header>
        <Search />
        <hr></hr>  
        <div>
            <div className="book">
                <div className="bookfront">
                    <h3>Title Here</h3>
                    <h3>Author Here</h3>
                    <h3>Genre Here</h3>
                </div>
                <div className="bookback">
                    <h3>Description Here</h3>
                </div>
            </div>
        </div>
        </header>  
    );
}

export default BooksList;