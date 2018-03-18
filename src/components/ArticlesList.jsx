import React, { Component } from 'react'
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import { Link } from 'react-router-dom'
import { request } from '../Util'
import Pagination from './Pagination'



class ArticlesList extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      title: '',
      isLoading: false,
      index: 1
    }
  }

  componentDidMount() {
    this.getArticles()
    this.setState({ type: this.props.type })
  }

  changeTo = (index) => {
    if(index === 0) {
      index = this.state.index - 1
    } else if(index === -1) {
      index = this.state.index + 1
    }
    if (index !== this.state.index) {
      this.setState({
        index
      }, () => this.getArticles())
    }
  }
  getArticles = () => {
    let { index } = this.state
    let { type } = this.props
    this.setState({ isLoading: true })
    let url, title
    switch (type) {
    case 'new':
      url = '/articles/1'
      title = '最新文章'
      break
    case 'all':
      url = `/articles/${index}`
      title = '文章列表'
      break
    default:
      url = `/articles/tags/${type}/${index}`
      title = '文章列表 > ' + type
      break
    }
    request(url, (res) => {
      this.setState({ isLoading: false })

      this.setState({
        articles: res.data.rows,
        pages: Math.ceil(res.data.count / 5),
        title,
        type
      })
    })
  }

  renderTap = (tagsStr) => {
    const tagsArr = tagsStr.split('-')
    const resultTagsArr = tagsArr.map(tag => {
      return <Link to={`/list/tags/${tag}`} key={tag}>{tag} </Link>
    })
    return resultTagsArr
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return (
        <div className="article-item" key={article.id}>
          {/* tag={Link} to={`/articles/${article.id}`} */}
          <ListGroupItem>
            <Link to={`/articles/${article.id}`}><h3>{article.title}</h3></Link>
            <p>{article.desc.length > 80 ? article.desc.slice(0, 81) + '...' : article.desc}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p><i className="fa fa-tag" /> 标签：{this.renderTap(article.topic)}</p>
              <p><i className="fa fa-calendar-times-o" /> 发布日期：{article.createdAt.slice(0, 10)}</p>
              {/* <p><i className="fa fa-book" /> 浏览量：{article.count}</p>  */}
            </div>

          </ListGroupItem>
        </div>
      )
    })
  }

  renderLoading = () => {
    return (
      <div>
        <div className="article-item" key={1} style={{ backgroundColor: "#898989", lineHeight: 2 }}>
          <ListGroupItem>
            <h3>________</h3>
            <p>________________________________</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p><i className="fa fa-tag" /> ________</p>
              <p><i className="fa fa-calendar-times-o" /> ________</p>
              {/* <p><i className="fa fa-book" /> 浏览量：{article.count}</p>  */}
            </div>
          </ListGroupItem>
        </div>
        <div className="article-item" key={2} style={{ backgroundColor: "#898989", lineHeight: 2 }}>
          <ListGroupItem>
            <h3>________</h3>
            <p>________________________________</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p><i className="fa fa-tag" /> ________</p>
              <p><i className="fa fa-calendar-times-o" /> ________</p>
              {/* <p><i className="fa fa-book" /> 浏览量：{article.count}</p>  */}
            </div>
          </ListGroupItem>
        </div>
      </div>

    )
  }

  render() {
    
    const renderMore = this.props.type === 'new' ? (
      <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
        <Link to="/list" style={{ color: 'gray' }}><h4>>> 文章列表  </h4></Link>
      </div>
    ) : (<Pagination index={this.state.index} pages={this.state.pages} changeTo={this.changeTo} />)

    return (
      <Col tag="div" sm={this.props.sm}>
        <h4>{this.state.title}</h4>
        <hr />
        <ListGroup>
          {this.state.isLoading ? this.renderLoading() : this.renderArticles()}
        </ListGroup>
        {renderMore}
      </Col>
    )
  }
}

export default ArticlesList