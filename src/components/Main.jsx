import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Message from './Message'
import ListDetail from './ListDetail'
import ArticleItem from './ArticleItem'


const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/list' component={ListDetail} />
      <Route exact path='/message' component={Message} />
      <Route exact path='/articles/:id' component={ArticleItem} />
    </Switch>
  </main>
)

export default Main;
