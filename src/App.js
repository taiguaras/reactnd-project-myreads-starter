import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component { 

  state = {
    books: [],
    query: '',
    searchResults: [],
    SearchIsLoading: false
  }

  async componentDidMount() {
    // API Get ALL
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateShelf = (SelectedBook, shelf) => {
    let isNew = false;
    const { books, searchResults } = this.state;

    BooksAPI.update(SelectedBook, shelf).then(() => {
      searchResults.forEach((book) => {
        if (book.id === SelectedBook.id) {
          book.shelf = shelf;
        }
      })

      books.map((book) => {
        if (book.id === SelectedBook.id) {
          book.shelf = shelf;
          isNew = true;
        }
        return book;
      });

      if (isNew === false) {
        SelectedBook.shelf = shelf;
        books.push(SelectedBook);
      }

      this.setState({
        books,
        searchResults
      });
    })
  }

  SearchBook = (SearchBook) => {
    this.setState({
      searchResults: [],
      query: SearchBook,
      SearchIsLoading: false
    });

    clearTimeout(this.debouncing);

    if (SearchBook !== '') {
      this.setState({
        SearchIsLoading: true
      });

      this.debouncing = setTimeout(() => {
        BooksAPI.search(this.state.query).then((Results) => {
          this.setState({
            SearchIsLoading: false
          });

          if (Results.length > 0) {
            const bookResultMap = Results.map((bookItem) => {
              bookItem.shelf = 'none';

              this.state.books.forEach((book) => {
                if (bookItem.id === book.id) {
                  bookItem.shelf = book.shelf;
                }
              })

              return bookItem;
            });

            this.setState({
              searchResults: bookResultMap
            });
          } else {
            this.setState({
              searchResults: []
            });
          }
        });
      }, 1500);
    }
  }




  render() {

    const { books, query, searchResults, SearchIsLoading } = this.state;

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
              <Search books={searchResults} query={query} loading={SearchIsLoading} onUpdateShelf={this.updateShelf} onSearchBook={this.SearchBook} />
            </div>
          )} />
          </Switch>
      </BrowserRouter>

    )
  }
}

export default BooksApp
