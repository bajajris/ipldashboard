import './TeamCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const TeamCard = ({ teamName}) => {
    if (!teamName) return null;
   
    return (
        <div className="TeamCard">
            <h2><Link to={`/teams/${teamName}`}>{teamName}</Link></h2>
        </div>
    );
}
