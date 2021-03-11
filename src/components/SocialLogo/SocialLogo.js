import React from 'react';
import { faFacebook, faInstagram, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLogo.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SocialLogo = (props) => {
    const { strFacebook, strYoutube, strTwitter, strInstagram } = props.logo;
    return (
        <div className='logoDiv'>
            <p><Link to="/"> <Button variant="outline-light">Return Home</Button></Link></p>
            <br />
            <a href={'https://' + strFacebook}>
                <FontAwesomeIcon className='fbLogo' size="3x" icon={faFacebook} />
            </a>
            <a href={'https://' + strYoutube}>
                <FontAwesomeIcon className='ytLogo' size="3x" icon={faYoutubeSquare} />
            </a>
            <a href={'https://' + strTwitter}>
                <FontAwesomeIcon className='ttLogo' size="3x" icon={faTwitter} />
            </a>
            <a href={'https://' + strInstagram}>
                <FontAwesomeIcon className='instaLogo' size="3x" icon={faInstagram} />
            </a>
        </div>
    );
};

export default SocialLogo;