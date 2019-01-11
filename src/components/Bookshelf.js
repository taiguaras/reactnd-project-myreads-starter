import React, { Component } from 'react';
import Book from './Book';

// import { Container } from './styles';


class Bookshelf extends Component {
    
    render() {

      const { books, shelfName } = this.props;      
        
        return (   
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                    {books.map((book) => (
                        <div key={book.id}>

                        <Book metaData={book} key={book.id}/>                        
                          
                        </div>
                     ))}                     

                    </ol>
                </div>
                </div>
                )
            }
        }
            
export default Bookshelf;
