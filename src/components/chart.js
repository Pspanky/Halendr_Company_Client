import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../style.scss';
import { fetchMetrics } from '../actions';

// var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// Create the chart
// Highcharts.chart('container', { /*Highcharts options*/ });


const mapStateToProps = state => (
  {
    metrics: state.metrics.metrics,
  }

);


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMetrics();
  }

  showMetrics() {
    console.log(this.props.metrics);
    if (this.props.metrics) {
      console.log('Got here');
      return (
        <div>
          <div className="pageBody">
            <h3 className="pageBodyText">Showing Metrics from previous survey:</h3>
            {this.props.metrics.map((metric) => {
              return (
                <div>
                  <div>Survey Taken On: {metric.date}</div>
                  <div>Category: {metric.category}</div>
                  <div>Score: {metric.score}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
        console.log(this.props.metrics),
          <div className="chartContainer">
            <h1 className="pageHeading">Your Metrics</h1>
            {this.showMetrics()}
          </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, { fetchMetrics })(Chart));
