import React, { Component } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import { Link } from 'react-router-dom' 

class BlogNavbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">晨阳再升</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/list"><i className="fa fa-list-ul"> 文章分类</i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/message"><i className="fa fa-pencil-square-o"> 留言</i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about"><i className="fa fa-hand-o-right"> 关于我</i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default BlogNavbar