package com.rishabh.ipldashboard.repository;

import com.rishabh.ipldashboard.model.Team;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long>{
    
    Team findByTeamName(String teamName);
}
