import React from 'react';
import '../assets/CSS/Title.css';

const Title = ({ heading3, heading1 }) => {
    return (
        <div className='title'>
            <h3>{heading3}</h3>
            <h1>{heading1}</h1>
        </div>
    );
};

export default Title;