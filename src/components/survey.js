import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="survey">
        <div className="surveyQ">
          <div className="question_heading">
            Question 1
          </div>
          <div className="answers">
            <input type="radio" value="1" name="q1" />1
            <input type="radio" value="2" name="q1" />2
            <input type="radio" value="3" name="q1" />3
            <input type="radio" value="4" name="q1" />4
          </div>
        </div>
        <div className="surveyQ">
          <div className="question_heading">
            Question 2
          </div>
          <div className="answers">
            <input type="radio" value="1" name="q2" />1
            <input type="radio" value="2" name="q2" />2
            <input type="radio" value="3" name="q2" />3
            <input type="radio" value="4" name="q2" />4
          </div>
        </div>
        <div className="surveyQ">
          <div className="question_heading">
            Question 3
          </div>
          <div className="answers">
            <input type="radio" value="1" name="q3" />1
            <input type="radio" value="2" name="q3" />2
            <input type="radio" value="3" name="q3" />3
            <input type="radio" value="4" name="q3" />4
          </div>
        </div>
        <div className="surveyQ">
          <div className="question_heading">
            Question 4
          </div>
          <div className="answers">
            <input type="radio" value="1" name="q4" />1
            <input type="radio" value="2" name="q4" />2
            <input type="radio" value="3" name="q4" />3
            <input type="radio" value="4" name="q44" />4
          </div>
        </div>
        <div className="surveyQ">
          <div className="question_heading">
            Question 5
          </div>
          <div className="answers">
            <input type="radio" value="1" name="q5" />1
            <input type="radio" value="2" name="q5" />2
            <input type="radio" value="3" name="q5" />3
            <input type="radio" value="4" name="q5" />4
          </div>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Survey;
