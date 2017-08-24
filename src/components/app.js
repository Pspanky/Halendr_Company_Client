
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style.scss';
import aboutHome from '../containers/about';
import pressHome from '../containers/press';
import launchAnnouncement from '../containers/launchAnnouncement';
import investorPage from '../containers/investor';
import newsHome from '../containers/newsHome';
import jobsHome from '../containers/jobs';
import hHappiness from '../containers/hHappiness';

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
              <Route exact path="/" component={aboutHome} />
              <Route exact path="/press" component={pressHome} />
              <Route exact path="/investors" component={investorPage} />
              <Route exact path="/news" component={newsHome} />
              <Route exact path="/news/launch" component={launchAnnouncement} />
              <Route exact path="/jobs" component={jobsHome} />
              <Route exact path="/happiness" component={hHappiness} />
              <Route component={FallBack} />
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
