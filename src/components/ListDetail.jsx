import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import SideBar from './SideBar'
import ArticlesList from './ArticlesList'


class ListDetail extends Component {
  constructor() {
    super()
    this.state = {
      type: 'all'
    }
  }

  resetTags = (tag) => {
    // this.setState({
    //   type: tag
    // })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12, order: 1 }} sm={{ size: 4, order: 2 }} style={{marginBottom: '40px'}}>
            <SideBar resetTags = {this.resetTags} />
          </Col>
          <Col xs={{ size: 12, order: 2 }} sm={{ size: 8, order: 1 }}>
            <ArticlesList type={this.state.type} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListDetail