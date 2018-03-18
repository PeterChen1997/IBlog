import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import config from '../config'


class ArticleItem extends Component {
  constructor() {
    super()
    this.state = {
      article: ''
    }
  }

  componentDidMount() {
    this.getArticleItem()
  }

  getArticleItem = () => {
    let articleId = this.props.match.params.id
    axios
      .get(`${config.url}/articles/detail/${articleId}`)
      .then(res => {
        console.log(res.data)
        this.setState({ 
          article: {
            ...res.data,
            content: res.data.content
          }
        })
      })
  }

  // updateCount = () => {
  //   let articleId = this.props.match.params.id
  //   axios
  //     .get(`http://localhost:3000/api/articles/${articleId}`)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({ 
  //         article: {
  //           ...res.data,
  //           content: UnicodeToAscii(res.data.content)
  //         }
  //       })
  //     })
  // }

  render() {
    return (
      <Container>
        <Row>
          <Col >
            <h1>{this.state.article.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="react-markdown">
            <ReactMarkdown source={this.state.article.content} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ArticleItem