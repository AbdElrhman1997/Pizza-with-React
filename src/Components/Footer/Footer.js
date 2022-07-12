import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='contFooter'>
                <p className='headFooter'>Pizza</p>
                <p>&copy; Made By AbdElrhman Mohamed</p>
                <div className='footerIcons'><a href='https://web.facebook.com/abdomo7amed11' target='_blank'><BsFacebook/></a><a href='https://www.instagram.com/abdelrahmanmohamed7867/' target='_blank'><FaInstagram/></a><a href='https://github.com/AbdElrhman1997' target='_blank'><AiFillGithub/></a></div>
            </div>
        </footer>
    )
}

export default Footer;