import React from 'react';
import {MdFacebook} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
function Navbar(props) {
    return (
        <div className='navbar'>
            <div>
                <h1>Logo</h1>
                </div>
            <div className='mid'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>
            <div className='symbol'>
                <a href="#"><MdFacebook/></a>
                <a href="#"><BsTwitter/></a>
                <a href="#"><AiFillInstagram/></a>
            </div>
            
        </div>
    );
}

export default Navbar;