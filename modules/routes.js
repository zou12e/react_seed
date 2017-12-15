import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import A from './A'
import B from './B'


const RouterList = () => (
    <Router>
        <div>
        	 
            <Link to="/">首页</Link>
            
            <div>
            	<Link to="/two">第二页</Link>
            </div>

            <Link to="/Lists">一个列表</Link>
            
            <Route exact path="/" component={A}/>
            <Route path="/two" component={B}/>
           
        </div>
    </Router>
)

export default RouterList;