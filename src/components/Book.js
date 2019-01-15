import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    metaData: PropTypes.object.isRequired,
  }
  
  handleMoveBookToShelf = (event, shelf, metaData) => {
    this.props.onUpdateShelf(metaData, shelf);    
    console.log("metadata",metaData);
    console.log("shelf",shelf);
    console.log("event",event);
  }

    render() {

      const {metaData} = this.props;

    return (    
           <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              width: `100%`,
              height: `100%`,
              backgroundSize: 'cover',
              backgroundImage: `url(${metaData.imageLinks.thumbnail})`}}>
            </div>

          </div>
          <div className="book-title">{metaData.title}</div>
          <div className="book-authors">{metaData.subtitle}</div>
          <div className="book-shelf">Shelf: {metaData.shelf}</div>
          <div className="extra">          
            <button className="button" onClick={event => this.handleMoveBookToShelf(event, 'currentlyReading', metaData)}>
            <i aria-hidden="true" title="Currently Reading" className="book icon"></i><p>Currently Reading</p>
            </button>
            <button className="button" onClick={event => this.handleMoveBookToShelf(event, 'wantToRead', metaData)}>
            <i aria-hidden="true" title="Want to Read" className="heart icon"></i><p>Want to Read</p>
            </button>
            <button className="button" onClick={event => this.handleMoveBookToShelf(event, 'read', metaData)}>
            <i aria-hidden="true" title="Read" className="checkmark icon"></i><p>Read</p>
            </button>
            <button className="button" onClick={event => this.handleMoveBookToShelf(event, 'none', metaData)}>
            <i aria-hidden="true" title="Clear" className="refresh icon"></i><p>Clear</p>
            </button>
          </div>
        </div>        

        );
    }


}

export default Book;