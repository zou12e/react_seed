import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'



import A from './modules/A'
import B from './modules/B'



render((
  <Router history={hashHistory}>
    <Route path="/"   component={A}   />
    <Route path="/repos" component={B} />
  </Router>
), document.getElementById('app'))



// render(
// 	<Router routes={routes} history={browserHistory}/>,
// 	document.getElementById('app')
// )


