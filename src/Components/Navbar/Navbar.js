import React ,{useState}from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [navShow,setNavShow]=useState(false);

    return (
        <div className='navbar'>
            <p className='headNav'>Pizza</p>
            <p className='menu'>Menu<FaPizzaSlice className='iconNav' onClick={()=>{setNavShow(true)}}/></p>
            <div className='sideBar'>
                <ul id='list' className={navShow===false?'disApper':''}>
                    <p className='closeNav'><AiOutlineClose onClick={()=>{setNavShow(false)}}/></p>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#pizzas'>Pizzas</a></li>
                    <li><a href='#offer'>Offer</a></li>
                    <li><a href='#sweet'>Desserts</a></li>
                    <div className='btn'>Order Now</div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;