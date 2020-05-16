import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Play, Tutorial, Login, Leaderboard} from "../pages"

export default class Home extends Component {
render () {

  return(
    <Row>
      <Router>
      <Col xl={12}>
        <h3><a href="/play">Play</a></h3>
        <h3><a href="/login">Login</a></h3>
        <h3><a href="/tutorial">Tutorial</a></h3>
        <h3><a href="/leaderboard">Leaders</a></h3>
      </Col>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      </Router>

    </Row>
  )
}
}
