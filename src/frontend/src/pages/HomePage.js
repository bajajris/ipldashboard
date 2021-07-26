import React, { useEffect, useState } from 'react';
import { TeamCard } from '../components/TeamCard';
import './HomePage.scss'
export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch(`http://localhost:8080/teams`);
            const data = await response.json();
            console.log(data);
            setTeams(data)
        }
        fetchTeams();
    }, [])

    let allTeams = teams.map((team, idx) => {
        return <TeamCard key={idx} teamName={team.teamName} />
    })

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1>JAVA IPL DASHBOARD</h1>
            </div>
            <div className="team-tiles-section">
                {allTeams}
            </div>
        </div>
    );
}
