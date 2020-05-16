import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'

export default class Header extends Component {
render () {
  return (
    
    <Row>
    <h1>{this.props.pageTitle}</h1>
    </Row>
  )
}
}
