import React from 'react'
import { Route, IndexRoute } from 'react-router'
import A from './A'
import B from './B'


 


module.exports = (
	<Route path="/" component={A}>
		
    	<Route path="/about" component={B}/>
	</Route>
)
