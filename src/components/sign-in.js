import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signupUser } from '../actions';
import '../style.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  onButtonClick(event) {
    console.log('About to sign in');
    console.log(this.state.email);
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    this.props.signinUser(user, this.props.history);
  }


  render() {
    return (
      <div id="newpost">
        <div className="pageHeading">Join LyfeTracker Today!</div>
        <div className="pageBody">
          <div id="ftitle">EMAIL: <input id="field" onChange={this.onEmailChange} value={this.state.email} /></div>
          <div id="ftitle">PASSWORD: <input id="field" onChange={this.onPasswordChange} value={this.state.password} /></div>
          <div id="buttons1">
            <button className="formButtons" id="button" onClick={this.onButtonClick}>SIGN IN!</button>
            <NavLink to="/"><button className="formButtons" id="button2">CANCEL</button></NavLink>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(connect(null, { signupUser })(SignIn));
