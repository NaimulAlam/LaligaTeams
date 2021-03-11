import React from 'react';

const TeamDescription = (props) => {
    const {strDescriptionEN, strDescriptionES} = props.team;
    return (
        <div className='description'>
            <p  ><strong>Team Description English:  </strong> {strDescriptionEN} </p>
            <p  ><strong>Team Description Spanish:  </strong> {strDescriptionES} </p>
        </div>
    );
};

export default TeamDescription;