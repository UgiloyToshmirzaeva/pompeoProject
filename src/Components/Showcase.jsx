import React from 'react';
import Button from './Btn';
import Title from './Title';
import showcaseImg from '../images/showcaseImg.png'
import '../assets/CSS/Showcase.css'

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase-left">
                <Title heading3='Pomped pottery' heading1='Unique Porcelain Stone Collection'></Title>
                <p>Unique & modern pottery made by our master in porcelain & stones</p>
            <Button text='Shop Collection'></Button>
            </div>
            <img className='showcaseImg' src={showcaseImg} alt="photo" />
            
        </div>
    );
};

export default Showcase;
