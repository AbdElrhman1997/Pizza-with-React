import React from 'react';
import pizzaImg1 from '../../Images/pexels-natasha-filippovskaya-4394612.jpg';
import pizzaImg2 from '../../Images/pexels-shameel-mukkath-5640024.jpg';
import pizzaImg3 from '../../Images/pexels-sharan-pagadala-12529119.jpg';
// import 'https://unpkg.com/aos@next/dist/aos.css';
// import 'https://unpkg.com/aos@next/dist/aos.js';
import './Pizza.css';

const Pizza = () => {
    return (
        <div className='pizza' id='pizzas'>
            <div className='container'>
                <p className='headPizza' data-aos='fade-left'>Choose your favorite</p>
                <div className='pizzaContainer'>
                    <div className='pizzaCard' data-aos='fade-left'>
                        <div className='back'></div>
                        <img src={pizzaImg1} className='pizzaImg'/>
                        <p className='descPizza'>
                            <strong>Mixed pizza</strong> 
                        </p>
                        <p>19.99$</p>
                        <div className='btn btn-pizza'>Buy</div>
                    </div>
                    <div className='pizzaCard' data-aos='fade-bottom'> 
                        <div className='back'></div>
                        <img src={pizzaImg2} className='pizzaImg'/>
                        <p className='descPizza'>
                            <strong>Italian Pizza</strong><br/>  
                        </p>
                        <p>16.99$</p>
                        <div className='btn btn-pizza'>Buy</div>
                    </div>
                    <div className='pizzaCard' data-aos='fade-right'>
                        <div className='back'></div>
                        <img src={pizzaImg3} className='pizzaImg'/>
                        <p className='descPizza'>
                            <strong>oriental pizza</strong> 
                        </p>
                        <p>14.99$</p>
                        <div className='btn btn-pizza'>Buy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizza;