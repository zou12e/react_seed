import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
// import { HashRouter, Route, Link, Switch } from 'react-router-dom';


import RouterList from './modules/routes'

 

render(
	<RouterList />,
	document.getElementById('app')
)

// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

// const One = () => (
//     <div>
//         <h2>首页</h2>
//     </div>
// )

// const Two = () => (
//     <div>
//         <h2>我是第二页</h2>
//     </div>
// )

// const Lists = ({ match }) => (
//     <div>
//         <h3>{match.params.ListsId}</h3>
//     </div>
// )

// const List = ({ match }) => (
//     <div>
//         <h2>我是一个列表</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/我是第一个哈哈`}>
//                     列表下边的第一个
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/我是第二个呵呵`}>
//                     列表下边的第二个
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/我是第三个嘿嘿`}>
//                     列表下边的第三个
//                 </Link>
//             </li>
//         </ul>
//         <Route path={`${match.url}/:ListsId`} component={Lists}/>

//         <Route exact path={match.url} render={() => (
//             <h3>点击上边的列表项此处显示与url地址一样的...</h3>
//         )}/>
//     </div>
// )

// const RouterList = () => (
//     <Router>
//         <div>
        	 
//             <Link to="/">首页</Link>
            
//             <div>
//             	<Link to="/two">第二页</Link>
//             </div>

//             <Link to="/Lists">一个列表</Link>
            
//             <Route exact path="/" component={One}/>
//             <Route path="/two" component={Two}/>
//             <Route path="/Lists" component={List}/>
//         </div>
//     </Router>
// )
 

// 
// 

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}

//       </div>
//     );
//   }
// }

// const About = () => (
//   <div>
//     <h3>About</h3>
//   </div>
// )

// const Home = () => (
//   <div>
//     <h3>Home</h3>
//   </div>
// )

// const Message = ({ match }) => (
//   <div>
//     <h3>new messages</h3>
//     <h3>{match.params.id}</h3>
//   </div>
// )

// const Inbox = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <Route path={`${match.url}/messages/:id`} component={Message}/>

//   </div>
// ) 

// ReactDOM.render(
//   (<HashRouter>
//     <App>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/inbox" component={Inbox} />
//     </App>
//   </HashRouter>),
//   document.getElementById('app')
// );



// render((
// 	<HashRouter>
// 	     <Route path="/" component={A} />
// 	     <Route path="/b" component={B} />
// 	  </HashRouter>
// ), document.getElementById('app'))



// render(
// 	<Router routes={routes} history={browserHistory}/>,
// 	document.getElementById('app')
// )


