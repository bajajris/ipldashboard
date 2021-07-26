import './TeamPage.scss';
import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { Link, useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();
    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
            const data = await response.json();
            setTeam(data)
        }
        fetchMatches();
    }, [teamName]);

    let matches = "Team Not Found!"
    let wins = 0
    let losses = 0 

    if (team && team.teamName) {
        matches = team.matches.map((match, idx) => {
            if (idx === 0) {
                return <MatchDetailCard key={idx} teamName={team.teamName} match={match} />
            } else {
                return <MatchSmallCard key={idx} teamName={team.teamName} match={match} />
            }
        })

        wins = Number(team.totalWins)
        losses = Number(team.totalMatches-team.totalWins)
    }

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <p>Win/Losses</p>
                <PieChart
                    data={[
                        { title: 'Wins', value: wins, color: '#4da376' },
                        { title: 'Losses', value: losses, color: '#a44d5d' },
                    ]}
                />
            </div>
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                {matches[0]}
            </div>
            {matches.slice(1)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More &gt;</Link>
            </div>
        </div>
    );
}
