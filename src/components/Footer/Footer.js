import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p> &copy; Naimul Alam || All rights reserved <small> {(new Date().getFullYear())} </small></p>
        </div>
    );
};

export default Footer;