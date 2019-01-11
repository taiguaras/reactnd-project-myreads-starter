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

                <Manager books={books} shelfName={"currentlyReading"} shelfDisplay={"Currently Reading"}/>
                <Manager books={books} shelfName={"wantToRead"} shelfDisplay={"Want to Read"}/>
                <Manager books={books} shelfName={"read"} shelfDisplay={"Read"}/>

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
