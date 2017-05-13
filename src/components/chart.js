
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
      <div>Chart goes here</div>
    );
  }
}

export default withRouter(connect(null, null)(Chart));
