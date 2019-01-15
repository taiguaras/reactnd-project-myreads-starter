import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Manager from './components/Manager';

class BooksApp extends React.Component { 

  state = {
    books: [],
    query: '',
    searchResults: [],
    isLoadingSearch: false
  }

  async componentDidMount() {
    // Populate application on init
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateShelf = (bookTochange, shelf) => {
    // Init
    let isNewBookOnShelf = false;
    const { books, searchResults } = this.state;

    // Update book on API
    BooksAPI.update(bookTochange, shelf).then((data) => {
      // Check book on shelf and prepare book data
      searchResults.forEach((book) => {
        if (book.id === bookTochange.id) {
          book.shelf = shelf;
        }
      })

      books.map((book) => {
        if (book.id === bookTochange.id) {
          book.shelf = shelf;
          isNewBookOnShelf = true;
        }
        return book;
      });

      // If is new on shelf (Comming from search)
      if (isNewBookOnShelf === false) {
        bookTochange.shelf = shelf;
        books.push(bookTochange);
      }

      // Update book data
      this.setState({
        books,
        searchResults
      });
    })
  }


  render() {

    const { books } = this.state;
    console.log("log do app BK",{books}); 

    return (
      
      <div className="app">

        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
          
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>      

                <Manager books={books} shelfName={"currentlyReading"} shelfDisplay={"Currently Reading"} onUpdateShelf={this.updateShelf} />
                <Manager books={books} shelfName={"wantToRead"} shelfDisplay={"Want to Read"} onUpdateShelf={this.updateShelf}/>
                <Manager books={books} shelfName={"read"} shelfDisplay={"Read"} onUpdateShelf={this.updateShelf}/>

              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
        }
      </div>
    )
  }
}

export default BooksApp
