package com.rishabh.ipldashboard.controller;

import java.util.List;

import com.rishabh.ipldashboard.model.Match;
import com.rishabh.ipldashboard.model.Team;
import com.rishabh.ipldashboard.repository.MatchRepository;
import com.rishabh.ipldashboard.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
   
    @Autowired
    private MatchRepository matchRepository;
    
    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        List<Match> matches = this.matchRepository.findLatestMatchesByTeam(teamName, 4);
        team.setMatches(matches);
        return team;
    }


    // public TeamController(TeamRepository teamRepository) {
    // this.teamRepository = teamRepository;
    // }

}
