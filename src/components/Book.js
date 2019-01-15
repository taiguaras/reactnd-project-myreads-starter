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
    <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${metaData.imageLinks.thumbnail})`}}>
            </div>

            
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading"onSelect={event => this.handleMoveBookToShelf(event, 'currentlyReading', metaData)}>Currently Reading</option>
                <option value="wantToRead" onSelect={event => this.handleMoveBookToShelf(event, 'wantToRead', metaData)}>Want to Read</option>
                <option value="read" onSelect={event => this.handleMoveBookToShelf(event, 'read', metaData)}>Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>
          <div className="book-title">{metaData.title}</div>
          <div className="book-authors">{metaData.subtitle}</div>
          <div className="book-shelf">Shelf: {metaData.shelf}</div>
          <div className="extra content">
          <div className="ui four buttons">
            <button className="ui green basic button" onClick={event => this.handleMoveBookToShelf(event, 'currentlyReading', metaData)}>
            <i aria-hidden="true" title="Currently Reading" className="book icon">Currently Reading</i>
            </button>
            <button className="ui red basic button" onClick={event => this.handleMoveBookToShelf(event, 'wantToRead', metaData)}>
            <i aria-hidden="true" title="Want to Read" className="heart icon">Want to Read</i>
            </button>
            <button className="ui red basic button" onClick={event => this.handleMoveBookToShelf(event, 'read', metaData)}>
            <i aria-hidden="true" title="Read" className="checkmark icon">Read</i>
            </button>
            <button className="ui red basic button">
            <i aria-hidden="true" title="Clear" className="refresh icon">Clear</i>
            </button>
          </div>
        </div>
        </div>
      </li>

        );
    }


}

export default Book;