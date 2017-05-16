import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../style.scss';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="welcomeContainer">
        <div id="main">
          <h1 className="pageHeading">LyfeOnTrack</h1>
          <h2 className="pageSubtitle">An easy way to track your health, productivity and wellness</h2>

          <div className="pageBody">
            <div id="ftitle"><input id="field" placeholder="Email Address" /></div>
            <div id="buttons1">
              <button className="formButtons" id="button">JOIN!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Welcome));
