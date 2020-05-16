import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

export default class Home extends Component {
render () {

  return(
    <Row>
      <Col xl={12}>
        <h3><a href="/play">Play</a></h3>
        <h3><a href="/login">Login</a></h3>
        <h3><a href="/tutorial">Tutorial</a></h3>
        <h3><a href="/leaderboard">Leaders</a></h3>
      </Col>
    </Row>
  )
}
}
