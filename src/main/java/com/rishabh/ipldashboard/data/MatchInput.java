package com.rishabh.ipldashboard.data;

import lombok.Getter;
import lombok.Setter;

public class MatchInput {
    private @Getter @Setter String id;
    private @Getter @Setter String date;
    private @Getter @Setter String city;
    private @Getter @Setter String player_of_match;
    private @Getter @Setter String venue;
    private @Getter @Setter String neutral_venue;
    private @Getter @Setter String team1;
    private @Getter @Setter String team2;
    private @Getter @Setter String toss_winner;
    private @Getter @Setter String toss_decision;
    private @Getter @Setter String winner;
    private @Getter @Setter String result;
    private @Getter @Setter String result_margin;
    private @Getter @Setter String eliminator;
    private @Getter @Setter String method;
    private @Getter @Setter String umpire1;
    private @Getter @Setter String umpire2;

    @Override
    public String toString() {
        return "MatchInput [city=" + city + ", date=" + date + ", eliminator=" + eliminator + ", id=" + id + ", method="
                + method + ", neutral_venue=" + neutral_venue + ", player_of_match=" + player_of_match + ", result="
                + result + ", result_margin=" + result_margin + ", team1=" + team1 + ", team2=" + team2
                + ", toss_decision=" + toss_decision + ", toss_winner=" + toss_winner + ", umpire1=" + umpire1
                + ", umpire2=" + umpire2 + ", venue=" + venue + ", winner=" + winner + "]";
    }

}
