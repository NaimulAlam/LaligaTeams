import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css';

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport } = props.team;

    const history = useHistory();

    const handleClick = () => {
        const url = `/team/${strTeam}`;
        history.push(url)
    }

    return (
        <Col lg={4} md={6} xs={12} className='teamColStyle'>
            <Card className='cardStyle'>
                <img className='logoStyle' variant="top" alt="team-badge" src={strTeamBadge} />
                <Card.Body>
                    <h5>{strTeam}</h5>
                    <h6>Sports Type: {strSport}</h6>
                    <Button variant="primary"
                        onClick={() => handleClick(strTeam)}
                    >
                        Explore <FontAwesomeIcon className='team-icon' icon={faChevronCircleRight} size="xs" />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Team;