import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';
const Team = (props) => {
    const { idTeam, strTeam, strAlternate, intFormedYear, strTeamBadge } = props.team;

    const history = useHistory();
    const handleClick = (idTeam) => {
        const url = `/football/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="col-md-3">

            <div className="box-style">
                <div className="team-item">
                    <img src={strTeamBadge} alt="" />
                    <h3>{strTeam}</h3>
                    <h3>{strAlternate}</h3>
                    <p>Year:{intFormedYear}</p>
                    <br />
                    {/* <Link to={`/football/${idTeam}`}> Explore</Link> */}
                    <button className="button-explore" onClick={() => handleClick(idTeam)}>Explore</button>
                </div>
            </div>

        </div>
    );
};

export default Team;