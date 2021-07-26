import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route exact path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
