import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
export default class Home extends Component {
render () {

  return(
    <Row>
      <Col xl={12}>
        <h3><a>Play</a></h3>
        <h3><a>Login</a></h3>
        <h3><a>Tutorial</a></h3>
        <h3><a>Leaders</a></h3>
      </Col>
    </Row>
  )
}
}
