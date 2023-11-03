import React from "react";
import '../assets/CSS/Collection.css'
import Title from './Title'
import Card from './Card'
import Btn from './Btn'

const Collection = () => {
    return(
        <div className="collection">
            <Title heading3='Our online store' heading1='Pottery Collection'></Title>

            <Card></Card>
            <Btn color='#AC1313' text='View all products'></Btn>

        </div>
    )
}

export default Collection;