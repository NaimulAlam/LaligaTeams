import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container fluid className='header'>
            <h1 className='header-txt'>La Liga Teams</h1>
        </Container>
    );
};

export default Header;