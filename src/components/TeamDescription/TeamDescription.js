import React from 'react';

const TeamDescription = (props) => {
    const {strDescriptionEN} = props.team;
    return (
        <div className='description'>
            <p  ><strong>Team Description: </strong> {strDescriptionEN} </p>
        </div>
    );
};

export default TeamDescription;