import React, { useEffect } from 'react';
import { useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeam] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
        <div className="background_color">
            <div className="banner">
                <div>
                    <img src="./Images/football2.jpg" alt="" />
                    <h3 className="heading-text">FootbaLL WaRRior</h3>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;