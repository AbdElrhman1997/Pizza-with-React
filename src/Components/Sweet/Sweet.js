import React from 'react';
import sweetImg1 from '../../Images/pexels-nishant-aneja-2955820.jpg';
import sweetImg2 from '../../Images/pexels-pixabay-45202.jpg';
import sweetImg3 from '../../Images/pexels-oksana-d-3081657.jpg';

import './Sweet.css';

const Sweet = () => {
    return (
        <div className='sweet' id='sweet'>
            <div className='container'>
                <p className='headSweet' data-aos='fade-left'>Sweet Treats for You</p>
                <div className='sweetContainer'>
                    <div className='sweetCard' data-aos='fade-left'>
                        <div className='back'></div>
                        <img src={sweetImg1} className='sweetImg'/>
                        <p className='descsweet'>
                            <strong>Dounts</strong> 
                        </p>
                        <p>2.99$</p>
                        <div className='btn-sweet'>Buy</div>
                    </div>
                    <div className='sweetCard' data-aos='fade-top'>
                        <div className='back'></div>
                        <img src={sweetImg2} className='sweetImg'/>
                        <p className='descSweet'>
                            <strong>Chocolate cake</strong><br/>  
                        </p>
                        <p>4.99$</p>
                        <div className='btn-sweet'>Buy</div>
                    </div>
                    <div className='sweetCard' data-aos='fade-right'>
                        <div className='back'></div>
                        <img src={sweetImg3} className='sweetImg'/>
                        <p className='descsweet'>
                            <strong>Cupcake</strong> 
                        </p>
                        <p>1.99$</p>
                        <div className='btn-sweet'>Buy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sweet;