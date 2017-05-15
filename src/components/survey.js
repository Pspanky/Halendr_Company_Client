import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="survey">

        <div className="surveyQ">
          <div className="question_heading">
            Question 1
          </div>
          <div className="answers">
            <div>
            1<input type="radio" value="1" name="q1" />
            </div>
            <div>
            2<input type="radio" value="2" name="q1" />
            </div>
            <div>
            3<input type="radio" value="3" name="q1" />
            </div>
            <div>
            4<input type="radio" value="4" name="q1" />
            </div>
            <div>
            5<input type="radio" value="5" name="q1" />
            </div>
          </div>
        </div>

        <div className="surveyQ">
          <div className="question_heading">
            Question 2
          </div>
          <div className="answers">
            <div>
            1<input type="radio" value="1" name="q2" />
            </div>
            <div>
            2<input type="radio" value="2" name="q2" />
            </div>
            <div>
            3<input type="radio" value="3" name="q2" />
            </div>
            <div>
            4<input type="radio" value="4" name="q2" />
            </div>
            <div>
            5<input type="radio" value="5" name="q2" />
            </div>
          </div>
        </div>

        <div className="surveyQ">
          <div className="question_heading">
            Question 3
          </div>
          <div className="answers">
            <div>
            1<input type="radio" value="1" name="q3" />
            </div>
            <div>
            2<input type="radio" value="2" name="q3" />
            </div>
            <div>
            3<input type="radio" value="3" name="q3" />
            </div>
            <div>
            4<input type="radio" value="4" name="q3" />
            </div>
            <div>
            5<input type="radio" value="5" name="q3" />
            </div>
          </div>
        </div>

        <div className="surveyQ">
          <div className="question_heading">
            Question 4
          </div>
          <div className="answers">
            <div>
              1<input type="radio" value="1" name="q4" />
            </div>
            <div>
              2<input type="radio" value="2" name="q4" />
            </div>
            <div>
              3<input type="radio" value="3" name="q4" />
            </div>
            <div>
              4<input type="radio" value="4" name="q4" />
            </div>
            <div>
            5<input type="radio" value="5" name="q4" />
            </div>
          </div>
        </div>
        <div className="surveyQ">
          <div className="question_heading">
            Question 5
          </div>
          <div className="answers">
            <div>
            1<input type="radio" value="1" name="q5" />
            </div>
            <div>
            2<input type="radio" value="2" name="q5" />
            </div>
            <div>
            3<input type="radio" value="3" name="q5" />
            </div>
            <div>
            4<input type="radio" value="4" name="q5" />
            </div>
            <div>
            5<input type="radio" value="5" name="q5" />
            </div>
          </div>
        </div>
        <button className="surveyButton">Submit</button>
      </div>
    );
  }
}

export default Survey;
