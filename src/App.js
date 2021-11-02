import logo from './logo.svg';
import './App.css';
import Leagues from './components/Leagues';
import Navigbar from './components/Navigbar';
import Home from './components/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import League from './components/League';
import Teams from './components/Teams';
import Team from './components/Team';



function App() {
  return (


    <div className="App">
      <div className="App-header">
        <Navigbar />
      </div>

      <div className="App-body">
        <Switch>
          <Route exact path="/leagues" component={Leagues} />
          <Route exact path="/leagues/:leagueId" component={League} />

          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:teamId" component={Team} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
