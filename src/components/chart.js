
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../style.scss';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div>There will be some sort of a line chart to show their results:<img id="chart" alt="chart" src="https://i.stack.imgur.com/pVjoj.png" /></div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Chart));
