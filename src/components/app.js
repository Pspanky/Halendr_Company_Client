
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style.scss';
import categoryPage from '../containers/categoryPage';
import eventPage from '../containers/eventPage';
import homePage from '../containers/homePage';
import resultsPage from '../containers/resultsPage';
// import requireAuth from '../components/require_auth';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={homePage} />
              <Route exact path="/results" component={resultsPage} />
              <Route exact path="/event" component={eventPage} />
              <Route exact path="/categories" component={categoryPage} />
              <Route component={FallBack} />
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
