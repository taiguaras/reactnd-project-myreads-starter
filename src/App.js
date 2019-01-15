import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import Search from './pages/Search';


import * as BooksAPI from './BooksAPI'
import './App.css'
// 

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
    console.log("log do app BK",{books}); 

    return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Switch>
          <Route path="/" exact={true} render={() => (
            <Main books={books} onUpdateShelf={this.updateShelf} />
          )} />

          <Route path="/search" render={() => (
            <Search books={searchResults} query={query} loading={isLoadingSearch} onUpdateShelf={this.updateShelf} onSearhTerm={this.searchTerm} />
          )} />
          </Switch>
      </BrowserRouter>

    )
  }
}

export default BooksApp
