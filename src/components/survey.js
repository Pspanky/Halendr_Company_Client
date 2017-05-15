import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchQuestions } from '../actions/index';
import '../style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchQuestions();
    console.log('Questions:');
    console.log(this.props.questions);
  }
  componentWillUpdate(nextProps) {
    this.props.fetchQuestions();
  }
  showQuestions() {
    if (this.props.questions) {
      return (
        this.props.questions.map((q) => {
          return (<div>{q}</div>);
        })
      );
    } else {
      return (<div>No questions</div>);
    }
  }
  render() {
    return (
      <div>
        {}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    questions: state.questions.questions,
  }
);

export default withRouter(connect(mapStateToProps, { fetchQuestions })(Survey));
