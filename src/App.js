import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import Search from './pages/Search';


import * as BooksAPI from './BooksAPI'
import './App.css'
import Navbar from './components/Navbar';
// 

class BooksApp extends React.Component { 

  state = {
    books: [],
    query: '',
    searchResults: [],
    isLoadingSearch: false
  }

  async componentDidMount() {
    // API Get ALL
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateShelf = (bookTochange, shelf) => {
    let isNewBookOnShelf = false;
    const { books, searchResults } = this.state;

    //Send Update API
    BooksAPI.update(bookTochange, shelf).then(() => {
      // Check book shelf and handle book data
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

      if (isNewBookOnShelf === false) {
        bookTochange.shelf = shelf;
        books.push(bookTochange);
      }

      this.setState({
        books,
        searchResults
      });
    })
  }

  searchTerm = (searchTerm) => {
    // Reset
    this.setState({
      searchResults: [],
      query: searchTerm,
      isLoadingSearch: false
    });

    // Clear debouncing
    clearTimeout(this.debouncing);

    // Check term
    if (searchTerm !== '') {
      // Show loading
      this.setState({
        isLoadingSearch: true
      });

      // Request search
      this.debouncing = setTimeout(() => {
        BooksAPI.search(this.state.query).then((booksFound) => {
          // Hide loading
          this.setState({
            isLoadingSearch: false
          });

          // If it has results
          if (booksFound.length > 0) {
            // Iterate result
            const booksFoundFiltered = booksFound.map((bookFound) => {
              // Set shelf as 'None'
              bookFound.shelf = 'none';

              // Match books
              this.state.books.forEach((book) => {
                if (bookFound.id === book.id) {
                  // Set correct shelf
                  bookFound.shelf = book.shelf;
                }
              })

              return bookFound;
            });

            // Update search result (it has results)
            this.setState({
              searchResults: booksFoundFiltered
            });
          } else {
            // Update search result (no results)
            this.setState({
              searchResults: []
            });
          }
        });
      }, 1500);
    }
  }




  render() {

    const { books, query, searchResults, isLoadingSearch } = this.state;

    return (

      <BrowserRouter>
        <Switch>
        
          <Route path="/" exact={true} render={() => ( 
            <div className="layout">
              <Navbar/>
              <Main books={books} onUpdateShelf={this.updateShelf} /> 
            </div>
          )} />

          <Route path="/search" render={() => (
            <div className="layout">
              <Search books={searchResults} query={query} loading={isLoadingSearch} onUpdateShelf={this.updateShelf} onSearhTerm={this.searchTerm} />
            </div>
          )} />
          </Switch>
      </BrowserRouter>

    )
  }
}

export default BooksApp
