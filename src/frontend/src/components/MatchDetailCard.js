import './MatchDetailCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
export const MatchDetailCard = ({ teamName, match }) => {

    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherTeamRoute = `/teams/${otherTeam}`

    let classes = ["MatchDetailCard"]

    if(match.matchWinner===teamName){
        classes.push("win");
    }else{
        classes.push("loss");
    }

    return (
        <div className={classes.join(" ")}>
            <div className="detail-section-1">
                <span className="vs">vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h2 className="match-date">{match.date}</h2>
                <h3 className="match-venue">at {match.venue}</h3>
                <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>

            <div className="detail-section-2">
                <h3>First Innings</h3>
                <p>{match.team1}</p>
                <h3>Second Innings</h3>
                <p>{match.team2}</p>
                <h3>Player of the Match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>
        </div>
    );
}
