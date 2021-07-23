// import './TeamPage.css';
import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch("http://localhost:8080/team/Mumbai%20Indians");
            const data = await response.json();
            console.log(data);
            setTeam(data)
        }
        fetchMatches();
    }, []);

    let matches = team.matches.map((match, idx) => {
        if (idx === 0) {
            return <MatchDetailCard key={idx} team1={match.team1} team2={match.team2} />
        } else {
            return <MatchSmallCard key={idx} team1={match.team1} team2={match.team2} />
        }
    })


    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            {matches}
        </div>
    );
}
