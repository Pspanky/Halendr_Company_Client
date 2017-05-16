
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';
import Survey from './survey';
import Chart from './chart';
import SignUp from './sign-up';
import Welcome from './welcome';
import Settings from './settings';


const Nav = (props) => {
  return (
    <nav className="navBar">
      <NavLink to="/" className="homeLink"> <h2 id="logoText"><span id="logo" className="fa fa-tachometer" /> LyfeTracker!</h2> </NavLink>
      <div id="navLinks">
        <NavLink to="/survey"><button className="ButtonLink">SURVEY <span id="surveyIcon" className="fa fa-list" /></button></NavLink>
        <NavLink to="/stats"><button className="ButtonLink">STATISTICS <span id="statsIcon" className="fa fa-bar-chart" /></button></NavLink>
        <NavLink to="/settings"><button className="ButtonLink">SETTINGS <span id="settingsIcon" className="fa fa-cog" /></button></NavLink>
        <NavLink to="/signup"><button className="ButtonLink">SIGN UP <span id="signupIcon" className="fa fa-sign-in" /></button></NavLink>
      </div>
    </nav>
  );
};


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/stats" component={Chart} />
            <Route path="/settings" component={Settings} />
            <Route path="/survey" component={Survey} />
            <Route path="/signup" component={SignUp} />
            <Route component={FallBack} />
          </Switch>
        </div>


      </div>
    </Router>
  );
};

export default App;
