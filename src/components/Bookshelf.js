import React, { Component } from 'react';
import Book from './Book';

// import { Container } from './styles';


class Bookshelf extends Component {
    
    render() {

      const { books, shelfDisplay } = this.props;      
        
        return (   
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfDisplay}</h2>
                <div className="bookshelf-books">
                    <div className="books-grid">

                    {books.map((book) => (

                        <Book metaData={book} key={book.id} onUpdateShelf={this.props.onUpdateShelf} book={books}/>                        
                          
                     ))}                     

                    </div>
                </div>
                </div>
                )
            }
        }
            
export default Bookshelf;
