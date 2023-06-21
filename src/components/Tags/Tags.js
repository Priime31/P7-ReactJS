import React from 'react';
import './tags.scss';

const Tags = ({tags}) => {
    return (
        <ul className='tag_list'>
            {tags.map((tags) => (<li key={tags}>{tags}</li>))}
        </ul>
    );
};

export default Tags;