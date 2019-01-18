import React, { Component } from 'react';
import Manager from '../components/Manager';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {

        const { books, onUpdateShelf } = this.props; 


        return (

         <div className="page">
            <div className="list-books">          
                <div className="list-books-content">
                    <Manager books={books} shelfName={"currentlyReading"} shelfDisplay={"Currently Reading"} onUpdateShelf={onUpdateShelf} />
                    <Manager books={books} shelfName={"wantToRead"} shelfDisplay={"Want to Read"} onUpdateShelf={onUpdateShelf}/>
                    <Manager books={books} shelfName={"read"} shelfDisplay={"Read"} onUpdateShelf={onUpdateShelf}/>
                </div>
                <div className="open-search">
                  <Link to={`/search`}> <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button></Link>
                </div>
            </div>
          </div>

        );
    }


}

export default Main;