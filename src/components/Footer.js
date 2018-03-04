import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <a target="_blank"  rel='noopener noreferrer' href="https://www.zhihu.com/people/PeterChen1997" className="mr-3">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-stack-1x fa-inverse">知</i>
                </span>
              </a>
              <a target="_blank"  rel='noopener noreferrer' href="https://github.com/PeterChen1997">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x text-muted"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <p className="text-muted mt-1">
                Copyright © 谌杨的博客 2018
                <br />
                    Ported by <a target="_blank"  rel='noopener noreferrer' href="https://github.com/PeterChen1997">PeterChen</a> | 
                <iframe title="git-star" id="iframe"
                  frameBorder="0" scrolling="0" width="80px" height="20px"
                  src="https://ghbtns.com/github-btn.html?user=PeterChen1997&repo=IBlog&type=star&count=true" >
                </iframe>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer