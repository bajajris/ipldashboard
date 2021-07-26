import './MatchSmallCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ teamName, match }) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherTeamRoute = `/teams/${otherTeam}`
   
    let classes = ["MatchSmallCard"]

    if(match.matchWinner===teamName){
        classes.push("win");
    }else{
        classes.push("loss");
    }
   
    return (
        <div className={classes.join(" ")}>
            <span className="vs">vs</span>
            <h3><Link to={otherTeamRoute}>{otherTeam}</Link></h3>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}
