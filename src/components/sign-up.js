
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signupUser } from '../actions';
import '../style.scss';


// //COPIED FROM LAB 5

class SignUp extends Component {
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
    console.log(this.state.email);
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    this.props.signupUser(user, this.props.history);
  }


  render() {
    return (
      <div id="newpost">
        <div id="title">Make your account!</div>
        <div id="ftitle">First Name: <input id="field" /></div>
        <div id="ftitle">Last Name: <input id="field" /></div>
        <div id="ftitle">Email: <input id="field" onChange={this.onEmailChange} value={this.state.email} /></div>
        <div id="ftitle">Password: <input id="field" onChange={this.onPasswordChange} value={this.state.password} /></div>
        <div id="buttons1">
          <button id="button" onClick={this.onButtonClick}>Done!</button>
          <NavLink to="/"><button id="button2">Cancel</button></NavLink>
        </div>
      </div>

    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
