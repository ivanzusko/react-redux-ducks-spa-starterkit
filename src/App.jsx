import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page-1';
import Page2 from './Page-2';
// ⬇⬇⬇ You can just remove this and compontent on line:23 ⬇⬇⬇
import IntroJustForDemo from './intro/Intro';
// ⬆⬆⬆ TODO: remove ⬆⬆⬆

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
					{/* ⬇⬇⬇ You can just remove this and import line:12 ⬇⬇⬇ */}
          <IntroJustForDemo />
					{/* ⬆⬆⬆ TODO: remove ⬆⬆⬆*/}
	
					<nav className="Navigation">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/page-1">Page 1</Link>
						</li>
						<li>
							<Link to="/page-2">Page 2</Link>
						</li>
					</nav>

					<div className="Pages">
						<Route exact path="/" component={Home}/>
						<Route path="/page-1" component={Page1}/>
						<Route path="/page-2" component={Page2}/>
					</div>
	
        </div>
      </Router>
    );
  }
}

export default App;
