
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';
import Survey from './survey';
import Chart from './chart';
import SignUp from './sign-up';


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


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Chart} />
          <Route path="/survey" component={Survey} />
          <Route path="/signup" component={SignUp} />
          <Route component={FallBack} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
