import React from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import MLink from './MLink'


const C = ({ match }) => (
  <div>
    <h2>C</h2>
    <ul>
      <li>
        <MLink exact to={`${match.url}` }>
            a
        </MLink>
      </li>
      <li>
        <MLink to={`${match.url}/b`}>
            b
        </MLink>
      </li>
      <li>
        <MLink to={`${match.url}/c`}>
            c
        </MLink>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
       <h3>a</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
<div>
    <h3>{match.params.topicId}</h3>
</div>
)


export default C;