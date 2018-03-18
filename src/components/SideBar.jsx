import React, { Component } from 'react'
import axios from 'axios'
import { Col, Nav, NavItem, NavLink, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import config from '../config'

class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      tags: {},
      renderedTags: ''
    }
  }

  componentWillMount() {
    this.getTags()
  }

  getTags = () => {
    let tags = {}
    axios
      .get(`${config.url}/articles`)
      .then(res => {
        const articles = res.data
        const topic = []
        articles
          .map(article => {
            topic.push(...article.topic.split('-'))
          })
        tags = topic.reduce(function(obj, tag) {
          if(!obj[tag]) {
            obj[tag] = 0
          }
          obj[tag]++
          return obj
        }, {})
        this.renderTags(tags)
      })
    
      
  }

  renderTags = (tags) => {
    const renderTags = Object.keys(tags).map(index => (
      <NavItem key={index}>
        <NavLink onClick={() => {this.props.resetTags(index)}}>
          {index} <Badge color="info">{tags[index]}</Badge>
        </NavLink>
      </NavItem>
    ))
    this.setState({ renderedTags: renderTags })
  }
  
  render() {
    return (
      <Col>
        <h5>标签栏</h5>
        <Nav tag="ul" vertical>
          {this.state.renderedTags}
        </Nav>
      </Col>
    )
  }
}

export default SideBar