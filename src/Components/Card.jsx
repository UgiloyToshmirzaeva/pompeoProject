import React from "react";
import '../assets/CSS/Card.css';
import photo1 from '../images/cardPhoto1.png'
import photo2 from '../images/cardPhoto2.png'
import photo3 from '../images/cardPhoto3.png'
import photo4 from '../images/cardPhoto4.png'
import photo5 from '../images/cardPhoto5.png'
import photo6 from '../images/cardPhoto6.png'

let contentsOfCards = [
    {
        photo: photo1,
        title: 'Decor Plate',
        price: 65.00
    },
    {
        photo: photo2,
        title: 'Decor Plate',
        price: 145.00
    },
    {
        photo: photo3,
        title: 'Decor Plate',
        price: 85.00
    },
    {
        photo: photo4,
        title: 'Decor Plate',
        price: 55.00
    },
    {
        photo: photo5,
        title: 'Decor Plate',
        price: 165.00
    },
    {
        photo: photo6,
        title: 'Decor Plate',
        price: 95.00
    },
]
const Card = () => {
    return(
        <div className="card">
            {contentsOfCards.map((contents) => {
                return (
                    <div>
                        <img src={contents.photo} alt="" />
                        <h2 className="title">{contents.title}</h2>
                        <p className="price">${contents.price}USD</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Card;
