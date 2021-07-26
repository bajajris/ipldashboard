import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data)
        }
        fetchMatches();
    }, [teamName, year])

    return (
        <div className="TeamPage">
            <h1>Match Page</h1>
            <h3>Latest Matches</h3>
            <p>
                {matches.map((match, idx) => {
                    return <MatchSmallCard key={idx} teamName={teamName} match={match} />
                })}
            </p>
        </div>
    );
}
