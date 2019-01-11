
import React from 'react';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

const Manager = props => {
    const filteredBooks = props.books.filter((b) => (
        b.shelf === props.shelfName
    ))

    return <div style={{ margin: '10px' }}>
        <Bookshelf books={filteredBooks} onChangeShelfBook={props.onChangeShelfBook} shelfName={props.shelfName} shelfDisplay={props.shelfDisplay} />
    </div>;
};

Manager.propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfDisplay: PropTypes.string.isRequired,
}

export default Manager