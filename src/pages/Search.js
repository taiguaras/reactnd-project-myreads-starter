import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

class Search extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    searchTerm = (event) => {
        this.props.onSearhTerm(event.target.value);
    }


    render() {

        const { books, query, loading, onUpdateShelf } = this.props;


        return (
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link to={`/`}><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={query} onChange={event => this.searchTerm(event)}/>

                    </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                            <div id="search-result-container">
                                <h3>Search result</h3>
                                
                                
                                <Bookshelf books={books} onUpdateShelf={onUpdateShelf} />
                                {(loading === true) &&
                                    <div className="loading">
                                        <span>Loading...</span><br /><br />
                                    </div>
                                }
                                {(books.length === 0 && loading === false) &&
                                    <div className="no-results">No results.</div>
                                }
                            </div>
                </div>
        );
    }


}

export default Search;


