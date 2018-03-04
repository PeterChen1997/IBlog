import React from 'react';
import './App.css';
import Main from './components/Main'
import BlogNavbar from './components/BlogNavbar'
import Footer from './components/Footer'
// import { Container, Row } from 'reactstrap'

const App = () => (
  <div className="wrapper">
    <BlogNavbar />
    <Main />
    <Footer />
  </div>
)

export default App;
