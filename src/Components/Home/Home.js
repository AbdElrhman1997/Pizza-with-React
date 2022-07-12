import React from 'react';
import backGimg from '../../Images/pexels-pixabay-edit-315755.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='home' id='home' data-aos='fade-top'>
            <img src={backGimg}/>
            <div className='container'>
                <div className='line'>
                    <h1 className='head'>GREATEST<br/>PIZZA EVER</h1>
                </div>
                    <h2 className='secHead'>READY IN 60 SECONDS.</h2>
                <div>
                    <p className='btn'>Place Order</p>
                </div>
            </div>
        </div>
    )
}

export default Home;