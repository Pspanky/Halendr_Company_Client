import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchQuestions, recordMetrics } from '../actions/index';
import '../style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleep: [-1, -1, -1, -1],
    };

    this.updateSleep = this.updateSleep.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.recordAnswers = this.recordAnswers.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuestions();
  }

  updateSleep(value, index) {
    const temp = this.state.sleep;
    temp[index] = value;
    this.setState({ sleep: temp });
  }

  // sum up all the sleep scores
  // NOTE: In the future, make sure score doesn't get skewed if q isnt answered
  calculateScore() {
    return this.state.sleep[0] + this.state.sleep[1] + this.state.sleep[2];
  }

  recordAnswers() {
    return this.props.recordMetrics(this.calculateScore(), 'sleep');
  }

  // given an array of possible answers, it returns them as radio inputs
  // The section paramter is there to differentiate the sets of radio inputs
  // from one another. For example, if it's the first, second, or third set of
  // answers for a certain category
  renderAnswers(answers, section) {
    console.log(this.props);
    if (answers) {
      return (
        answers.map((q, key) => {
          // We concatenate the section + key for the id in order to ensure
          // that the labels get bound to the right radio inputs
          return (
            <div className="answerSection">
              <label htmlFor={section + key.toString()}> {q} </label>
              <input type="radio" name={section} id={section + key.toString()}
                value={key} onClick={() => this.updateSleep(key, section)}
              />
            </div>
          );
        })
      );
    } else {
      return (<div>No questions</div>);
    }
  }

  renderSection(question, answers, section) {
    return (
      <div className="question_heading">
        <h2>{question}</h2>
        {this.renderAnswers(answers, section)}
        <br />
      </div>
    );
  }

  render() {
    // Currently feeding answers as an array of strings here. In the final
    // it will be passed in from props
    const test = ['asasdfdf', 'aasdd', 'asffd', 'asgdfsd'];
    return (
      <div className="surveyContainer">
        <h1 className="pageHeading">Good Morning!</h1>
        <div className="surveyQ">
          {this.renderSection('Question 1', test, 0)}
          <div className="divider" />
          {this.renderSection('Question 2', test, 1)}
          <div className="divider" />
          {this.renderSection('Question 3', test, 2)}
          <div className="divider" />
          {this.renderSection('Question 4', test, 3)}

          <button className="ButtonLink" id="surveyButton" onClick={() => this.recordAnswers()} > Submit! </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    questions: state.questions.questions,
  }
);

export default withRouter(connect(mapStateToProps, { fetchQuestions, recordMetrics })(Survey));
