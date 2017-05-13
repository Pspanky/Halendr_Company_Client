import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';

class Survey extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    <form className="survey">
      <div className="surveyQ">
        <div className="question_heading">
        Question 1
      </div>
        <input type="radio" value="1" name="q1">1</input>
        <input type="radio" value="2" name="q1">2</input>
        <input type="radio" value="3" name="q1">3</input>
        <input type="radio" value="4" name="q1">4</input>
      </div>
      <div className="surveyQ">
        <div className="question_heading">
        Question 2
      </div>
        <input type="radio" value="1" name="q2">1</input>
        <input type="radio" value="2" name="q2">2</input>
        <input type="radio" value="3" name="q2">3</input>
        <input type="radio" value="4" name="q2">4</input>
      </div>
    </form>;
  }
}
