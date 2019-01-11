import React, { Component } from 'react';

class Book extends Component {

    state = {
        shelf: this.props.metaData.shelf
      }


    componentWillMount(){
    
        console.log("PROPS each BOOKS", this.props )
    }

    render() {

        const me = this.props.metaData;

        return (    

    <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${me.imageLinks.thumbnail})`
            }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead" onSelect={() => this.setState({ shelf: "value" })} >Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
              <div className="extra content">
                    <div className="ui four buttons">
                        <button className="ui green basic button" onClick={() => this.setState({ shelf: "currentlyReading" })}>
                        <i aria-hidden="true" title="Currently Reading" className="book icon">Reading</i>
                        </button>
                        <button className="ui red basic button" onClick={() => this.setState({ shelf: "wantToRead" })}>
                        <i aria-hidden="true" title="Want to Read" className="heart icon">Want to read</i>
                        </button>
                        <button className="ui red basic button" onClick={() => this.setState({ shelf: "read" })}>
                        <i aria-hidden="true" title="Read" className="checkmark icon">Read</i>
                        </button>
                        <button className="ui red basic button" onClick={() => this.setState({ shelf: "none" })}>
                        <i aria-hidden="true" title="Clear" className="refresh icon">Clear</i>
                        </button>
                    </div>
                </div>
            </div>
          </div>
          <div className="book-title">{me.title}</div>
          <div className="book-authors">{me.subtitle}</div>
          <div className="book-shelf">Shelf: {this.state.shelf}</div>
        </div>
      </li>

        );
    }


}

export default Book;