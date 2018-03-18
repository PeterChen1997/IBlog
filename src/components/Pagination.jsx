import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Example extends React.Component {

  renderPagination() {
    let index = this.props.index
    let pages = this.props.pages
    let resultArr = []
    for(let i = 1; i <= pages; i++) {
      resultArr.push(
        <PaginationItem key={i} active={i === index ? true : false}>
          <PaginationLink  onClick={() => {this.props.changeTo(i)}} >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return resultArr
  }

  render() {
    return (
      <Pagination style={{justifyContent: 'center'}}>
        <PaginationItem disabled={this.props.index === 1 ? true : false}>
          <PaginationLink previous  onClick={() => {this.props.changeTo(0)}}/>
        </PaginationItem>
        { this.renderPagination()}
        <PaginationItem disabled={this.props.index === this.props.pages ? true : false}>
          <PaginationLink next onClick={() => {this.props.changeTo(-1)}} />
        </PaginationItem>
      </Pagination>
    );
  }
}