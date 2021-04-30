import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './Team.css';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))

    }, [])

    return (
        <div className='teamsCardsStyle'>
            <Container >
                <Row>
                    {
                        teams.map((team, key) => <Team key={(teams[key].idTeam)} team={team}></Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Teams;