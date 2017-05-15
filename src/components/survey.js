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
          return (
            <div className="surveyQ">
              <div className="question_heading">
                {q.query}
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
            </div>);
        })
      );
    } else {
      return (<div>No questions</div>);
    }
  }
  render() {
    return (
      <div>
        {this.showQuestions()}
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
