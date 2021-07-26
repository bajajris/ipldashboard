(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),r=c.n(s),i=(c(24),c(25),c(8)),j=c.n(i),l=c(10),h=c(11),m=(c(27),c(28),c(4)),o=c(0),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=["MatchDetailCard"];return c.matchWinner===t?s.push("win"):s.push("loss"),Object(o.jsxs)("div",{className:s.join(" "),children:[Object(o.jsxs)("div",{className:"detail-section-1",children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h1",{children:Object(o.jsx)(m.b,{to:n,children:a})}),Object(o.jsx)("h2",{className:"match-date",children:c.date}),Object(o.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(o.jsxs)("div",{className:"detail-section-2",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:c.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:c.team2}),Object(o.jsx)("h3",{children:"Player of the Match"}),Object(o.jsx)("p",{children:c.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},d=(c(38),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=["MatchSmallCard"];return c.matchWinner===t?s.push("win"):s.push("loss"),Object(o.jsxs)("div",{className:s.join(" "),children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h3",{children:Object(o.jsx)(m.b,{to:n,children:a})}),Object(o.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),b=c(2),O=c(19),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var r="Team Not Found!",i=0,x=0;return c&&c.teamName&&(r=c.matches.map((function(e,t){return 0===t?Object(o.jsx)(u,{teamName:c.teamName,match:e},t):Object(o.jsx)(d,{teamName:c.teamName,match:e},t)})),i=Number(c.totalWins),x=Number(c.totalMatches-c.totalWins)),Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsxs)("div",{className:"win-loss-section",children:[Object(o.jsx)("p",{children:"Win/Losses"}),Object(o.jsx)(O.PieChart,{data:[{title:"Wins",value:i,color:"#4da376"},{title:"Losses",value:x,color:"#a44d5d"}]})]}),Object(o.jsxs)("div",{className:"match-detail-section",children:[Object(o.jsx)("h3",{children:"Latest Matches"}),r[0]]}),r.slice(1),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsx)(m.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]})},f=(c(39),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(o.jsx)("ol",{className:"YearSelector",children:c.map((function(e,c){return Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},c)}))})}),p=(c(40),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year"}),Object(o.jsx)(f,{teamName:r})]}),Object(o.jsxs)("div",{className:"matches-section",children:[Object(o.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),Object(o.jsx)("div",{children:c.map((function(e,t){return Object(o.jsx)(u,{teamName:r,match:e},t)}))})]})]})}),v=(c(41),function(e){var t=e.teamName;return t?Object(o.jsx)("div",{className:"TeamCard",children:Object(o.jsx)("h2",{children:Object(o.jsx)(m.b,{to:"/teams/".concat(t),children:t})})}):null}),N=(c(42),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/teams");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=c.map((function(e,t){return Object(o.jsx)(v,{teamName:e.teamName},t)}));return Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{children:"JAVA IPL DASHBOARD"})}),Object(o.jsx)("div",{className:"team-tiles-section",children:s})]})});var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",children:Object(o.jsx)(N,{})}),Object(o.jsx)(b.a,{exact:!0,path:"/teams/:teamName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(b.a,{exact:!0,path:"/teams/:teamName/matches/:year",children:Object(o.jsx)(p,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.0e815883.chunk.js.map