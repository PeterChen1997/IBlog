import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import { Link } from 'react-router-dom'
import { UnicodeToAscii } from '../helper'
import config from '../config'



class ArticlesList extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      title: '',
      isLoading: false
    }
  }

  componentWillMount() {

    this.getArticles(this.props.type)
    this.setState({ type: this.props.type })
  }

  getArticles = (type) => {
    this.setState({ isLoading: true })
    
    axios
      .get(`${config.url}/articles`)
      .then(res => {
        this.setState({ isLoading: false })
        if(type === "new") {
          let articles = res.data.length > 4 ? res.data.reverse().slice(0, 5) : res.data.reverse()

          this.setState({ 
            articles,
            title: '最新文章'
          })
        } else if(type === "all") {
          let articles = res.data

          this.setState({ 
            articles,
            title: '文章列表'
          })
        }
        
      })
    
  }

  renderTap = (tagsArr) => {
    const resultTagsArr = tagsArr.map(tag => {
      return <Link to={`/tags/${tag}`} key={tag}>{tag} </Link>
    })
    return resultTagsArr
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return (
        <div className="article-item" key={article._id}>
          {/* tag={Link} to={`/articles/${article.id}`} */}
          <ListGroupItem>
            <Link to={`/articles/${article._id}`}><h3>{article.title}</h3></Link>
            <p>{article.desc.length > 80 ? article.desc.slice(0, 81) + '...' : article.desc}</p>
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><i className="fa fa-tag" /> 标签：{this.renderTap(article.topic)}</p>
              <p><i className="fa fa-calendar-times-o" /> 发布日期：{article.date.slice(0,10)}</p>
              {/* <p><i className="fa fa-book" /> 浏览量：{article.count}</p>  */}
            </div>
            
          </ListGroupItem>
        </div>
      )
    })
  }

  renderLoading = () => {
    return (
      <h3>Loading...</h3>
    )
  }

  render() {
    const renderMore = this.props.type === 'new' ? (
      <div style={{marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
        <Link to="/list" style={{color: 'gray'}}><h4>>> 文章列表  </h4></Link>
      </div>
    ) : ''
    
    return (
      <Col tag="div" sm={this.props.sm}>
        <h4>{this.state.title}</h4>
        <hr/>
        <ListGroup>
          {this.state.isLoading ? this.renderLoading() : this.renderArticles()}
        </ListGroup>
        {renderMore}
      </Col>
    )
  }
}

export default ArticlesList