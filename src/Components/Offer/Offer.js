import React from 'react';
import pizzaimg from '../../Images/pexels-roman-odintsov-4553111.jpg'
import './Offer.css';

const Offer = () => {
    return (
        <div className='offer' id='offer' data-aos='fade-left'>
                <img className='spicPizza' src={pizzaimg}/>
                <div className='contOffer'>
                    <h1 className='fs-large'>Pizza of the Day</h1>
                    <h2>Truffle alfrido sauce topped with 24 carat Gold dust</h2>
                    <div className='btn btn-offer'>Order Now</div>
                </div>
        </div>
    )
}

export default Offer;