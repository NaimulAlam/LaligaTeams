import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faLandmark, faMars, } from '@fortawesome/free-solid-svg-icons'
import './TeamDetail.css';
import malePhoto from '../../images/male.png';
import femalePhoto from '../../images/female.png';
import SocialLogo from '../SocialLogo/SocialLogo';
import TeamDescription from '../TeamDescription/TeamDescription';
import Footer from '../Footer/Footer';


const TeamDetail = () => {
    const { strTeam } = useParams();

    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    const headerStyle = {
        opacity: '0.7',
        backgroundImage: `url(${team.strStadiumThumb})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div>
            <div className='teamDetailHeader' style={headerStyle}>
                <img className='teamDetailHeaderImg' src={team.strTeamBadge} alt="" />
            </div>
            <div className='team-detail-div'>
                <Row className='team-detail-row'>
                    <Col className='team-detail' sm={7}>
                        <h2> {(team.strAlternate)} </h2>
                        <p> <FontAwesomeIcon icon={faLandmark} />   Founded: {(team.intFormedYear)} </p>
                        <p> <FontAwesomeIcon icon={faFlag} />   Country: {(team.strCountry)} </p>
                        <p> <FontAwesomeIcon icon={faFutbol} />   Sport Type: {(team.strSport)} </p>
                        <p> <FontAwesomeIcon icon={faMars} />  Gender: {(team.strGender)}</p>
                    </Col>
                    <Col className="team-image-col" sm={5}>
                        {
                            (team.strGender === "Male")
                                ? <img src={malePhoto} alt="Male-Team" />
                                : <img src={femalePhoto} alt="Female-Team" />
                        }
                    </Col>
                </Row>
                <TeamDescription team={team} />
                <SocialLogo logo={team} />
            </div>
            <Footer />
        </div>
    );
};

export default TeamDetail;