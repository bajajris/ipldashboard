// import './TeamPage.css';
import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();
    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data)
        }
        fetchMatches();
    }, [teamName]);

    let matches = "Team Not Found!"

    if (team && team.teamName) {
        matches = team.matches.map((match, idx) => {
            if (idx === 0) {
                return <MatchDetailCard key={idx} teamName={team.teamName} match={match} />
            } else {
                return <MatchSmallCard key={idx} teamName={team.teamName} match={match} />
            }
        })
    }

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            {matches}
        </div>
    );
}
