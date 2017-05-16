import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../style.scss';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="settingsContainer">
        <h1 className="pageHeading">Settings</h1>
        <div className="pageBody">
          <h3 className="pageBodyText">The User will eventually be able to change their account settings here.</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Settings));
