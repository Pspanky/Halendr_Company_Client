
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';
// import Survey from './survey';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <div>LyfeTracker!</div>
        <NavLink to="/survey"><button>Fill New Survey</button></NavLink>
        <NavLink to="/settings"><button>Settings</button></NavLink>
      </ul>
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
        <Switch>
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
