import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container fluid className='header'>
            <h1 className='header-txt'>
                <FontAwesomeIcon className='team-icon' icon={faUsers} />La Liga Teams
            </h1>
        </Container>
    );
};

export default Header;