import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoImage from './../assets/img/no-photo.jpg';
class Book extends Component {

  static propTypes = {
    metaData: PropTypes.object.isRequired,
  }

  ShelfNameToTitle(shelfStatus) {
    switch (shelfStatus) {
      case 'currentlyReading': return ( <button class="ui icon left labeled button"><i aria-hidden="true" class="book icon"></i>Currently Reading</button>) ;
      case 'wantToRead': return ( <div><button class="ui icon left labeled button"><i aria-hidden="true" class="heart icon"></i>Want to read</button></div>);
      case 'read': return ( <div><button class="ui icon left labeled button"><i aria-hidden="true" class="checkmark icon"></i>Read</button></div>);
      default: return ( <div><button class="ui icon left labeled button"><i aria-hidden="true" class="times circle icon"></i>None</button></div>);
    }
  }
  
  handleMoveBookToShelf = (event, shelf, metaData) => {
    this.props.onUpdateShelf(metaData, shelf);    
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
              backgroundImage: `url(${ metaData.imageLinks ? metaData.imageLinks.thumbnail : NoImage })`}}>
            </div>

          </div>
          <div className="book-title">{metaData.title}</div>
          <div className="book-subtitle">{metaData.subtitle}</div>
          <div className="book-authors">{metaData.authors.map( author => <p className="author">{author}</p> )}</div>
          <div className="book-shelf"> {this.ShelfNameToTitle(metaData.shelf)} </div>
          
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