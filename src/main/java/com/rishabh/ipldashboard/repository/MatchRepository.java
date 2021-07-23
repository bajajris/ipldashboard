package com.rishabh.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.rishabh.ipldashboard.model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends JpaRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    // List<Match> getByTeam1OrTeam2AndDateBetweenOrderByDateDesc(String teamName1,
    // String teamName2, LocalDate date1, LocalDate date2);

    @Query("SELECT m FROM Match m where (m.team1=:teamName OR m.team2=:teamName) AND (m.date BETWEEN :startDate AND :endDate) ORDER BY m.date DESC")
    List<Match> getMatchesByTeamBetweenDates(@Param("teamName") String teamName,
            @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

}
