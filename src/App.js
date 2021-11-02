import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Leagues from './components/Leagues';
import Navigbar from './components/Navigbar';
import Home from './components/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import League from './components/League';
import Teams from './components/Teams';
import Team from './components/Team';

export const VideoGameContext = createContext({
  currentGame: 0,
  setCurrentGame: (game) => { }
})
function App() {

  const [currentGame, setCurrentGame] = useState(() => {

    const saved = localStorage.getItem('currentGame');
    const initialValue = JSON.parse(saved);

    return initialValue || 1;
  });

  useEffect(() => {
    localStorage.setItem('currentGame', JSON.stringify(currentGame))
  }, [currentGame])

  return (
    <VideoGameContext.Provider value={{ currentGame, setCurrentGame }}>

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
            <Route exact path="/" component={Leagues} />
            <Route exact path="*" component={NoMatch} />
          </Switch>
        </div>
      </div>
    </VideoGameContext.Provider>
  );
}

export default App;
