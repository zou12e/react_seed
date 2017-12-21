import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Routes from './modules/Routes'


import './public/scss/scss.scss';


const BasicExample = () => (
  <Router>
     <Routes />
  </Router>
)


render(
	<BasicExample />,
	document.getElementById('app')
)


