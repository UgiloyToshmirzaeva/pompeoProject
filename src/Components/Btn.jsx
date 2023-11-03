import React from 'react';
import '../assets/CSS/Btn.css';

const Btn = ({ text, color }) => {
    return (
        <button style={{ backgroundColor: color }} className="btn">
            {text}
        </button>
    );
};

export default Btn;
