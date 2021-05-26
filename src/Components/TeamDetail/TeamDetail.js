import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import img from '../../Images/male.jpg';
import img2 from '../../Images/football2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [singleTeam, setSingleTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTeam(data.teams[0]))


    }, [idTeam])
    // console.log(idTeam),
    return (
        <div className="background-view">
            <div className="header">
                <img src={img2} alt="" />
                {/* <img className="page" src={singleTeam.strTeamBadge} alt="" /> */}
            </div>
            <div className="background">
                <div className="container">
                    <div className="cart">
                        <p style={{ fontSize: "30px", color: "#d0de4c" }}><strong>{singleTeam.strTeam}</strong></p>
                        <p><FontAwesomeIcon icon={faCalendar} /> Founded : {singleTeam.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {singleTeam.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Type: {singleTeam.strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {singleTeam.strGender}</p>
                    </div>
                    <div className="cart">
                        <img src={img} alt="" />
                    </div>

                </div>
            </div>
            <div className="text">

                <p><b><i>{singleTeam.strDescriptionEN}</i></b></p>

                <div className="font-size">
                    {/* <a href={`https://${singleTeam.strFacebook}`} rel=opener target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <br />
                    <a href={`https://${singleTeam.strInstagram}`} target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a> */}
                    <a href={singleTeam.strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <br />
                    <a href={singleTeam.strInstagram}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </div>

        </div>
    );
};

export default TeamDetail;