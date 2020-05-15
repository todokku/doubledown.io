import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Leaderboard from '../pages/leaderboard'
import Login from '../pages/login'
import MainMenu from '../pages/mainMenu'
import Play from '../pages/play'
import Tutorial from '../pages/tutorial'



export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainMenu} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/login" component={Login} />
      <Route path="/play" component={Play} isPrivate />
      {/* redirect user to Login page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
