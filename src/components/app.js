
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';
import Survey from './survey';
import Chart from './chart';


const Nav = (props) => {
  return (
    <nav className="navBar">
      <NavLink to="/" className="homeLink"> <h2> LyfeTracker! </h2> </NavLink>
      <div id="navLinks">
        <NavLink to="/survey"><button className="ButtonLink">Fill New Survey</button></NavLink>
        <NavLink to="/settings"><button className="ButtonLink">Settings</button></NavLink>
      </div>
    </nav>
  );
};


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// <Route path="/survey" component={Survey} />


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Chart} />
            <Route path="/survey" component={Survey} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
