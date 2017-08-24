import React, { Component } from 'react';
import axios from 'axios';
import '../style.scss';

const validator = require('email-validator');

const ROOT_URL = 'https://hlp-api.herokuapp.com/candidates';
// const ROOT_URL = 'http://localhost:9090/candidates';

class jobsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      clicked: false,
      userEmail: '',
      userExists: false,
      badEmail: false,
      waiting: false,
    };

    this.homeRouter = this.homeRouter.bind(this);
    this.newsRouter = this.newsRouter.bind(this);
    this.pressRouter = this.pressRouter.bind(this);
    this.investorRouter = this.investorRouter.bind(this);
    this.jobsRouter = this.jobsRouter.bind(this);
    this.happinessRouter = this.happinessRouter.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.sendJobInterestEmail = this.sendJobInterestEmail.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayJobInterestSection = this.displayJobInterestSection.bind(this);
    this.displayError = this.displayError.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  componentDidMount() {
    document.title = 'Jobs';
  }

  onEmailChange(event) {
    if (this.state.badEmail) {
      this.setState({ badEmail: false });
    }
    this.setState({ userEmail: event.target.value });
    this.setState({ userExists: false });
    console.log(this.state.userEmail);
  }

  checkEmail() {
    if (this.state.badEmail) {
      this.setState({ badEmail: false });
    }
  }

  sendJobInterestEmail() {
    if (validator.validate(this.state.userEmail)) {
      console.log('email is being added');
      return axios.post(`${ROOT_URL}`, { email: this.state.userEmail }).then((response) => {
        if (response.data === 'user already exists') {
          this.setState({ userExists: true });
          console.log('candidate exists');
        } else {
          this.setState({ submitted: true });
          console.log('candidate has been added');
          console.log(response.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.setState({ badEmail: true });
      console.log('invalid email');
      return '';
    }
  }

  toggleDisplay() {
    const newState = !this.state.submitted;
    this.setState({ submitted: newState });
  }

  displayJobInterestSection() {
    if (this.state.submitted) {
      return (
        <div className="jobsConfirmationContainer">
          <div className="jobsConfirmationTexts">
            <div id="confirmationTitle">
                  Thank you for registering your interest in Halendr.
                  We will be in touch with vacancy announcements and updates about jobs at Halendr.
                </div>
            <div ><b>Did not receive our email?</b>
            </div>
            <div>
                      Please check your spem and junk folders.
                      Don not forget to mark our emails as safe so you don not miss important updates.
                  </div>
          </div>
          <button className="jobsConfirmationBtn" onClick={this.toggleDisplay}>
                  Got it
              </button>
        </div>
      );
    } else {
      return (
        <div className="jobsBodyMidContainer colFlex">
          <div className="jobsMidText">
            We do not have any open vanancies at present although we have lots of exciting new roles
            coming up. <br /> Register your interest today and be the first to know about future job opportunities.
          </div>
          <div className="jobsButtonContainer">
            <input className="jobInterestInput" placeholder="Enter your email" onClick={this.checkEmail} onChange={this.onEmailChange} />
            <button className="jobInterestButton" onClick={this.sendJobInterestEmail}>Submit</button>
          </div>
          {this.displayError()}
        </div>
      );
    }
  }

  displayError() {
    if (this.state.badEmail) {
      return (
        <div className="errorMessage">
        Please enter a valid email address
    </div>
      );
    } else if (this.state.userExists) {
      return (
        <div className="errorMessage">
      This email has already been registered
    </div>
      );
    } else {
      return (
        <div className="errorMessage" />
      );
    }
  }

  resetState() {

  }

  homeRouter() {
    this.props.history.push('/');
  }

  newsRouter() {
    this.props.history.push('/news');
  }

  pressRouter() {
    this.props.history.push('/press');
  }

  investorRouter() {
    this.props.history.push('/investors');
  }

  jobsRouter() {
    this.props.history.push('/jobs');
  }

  happinessRouter() {
    this.props.history.push('/happiness');
  }

  render() {
    return (
      <div className="homeBody">
        <div className="testHeader contentBlock">
          <img src="https://preview.ibb.co/cHby9v/h_Logo_White.png" className="headerLogo" onClick={this.homeRouter} alt="" />
          <ul className="headerLinks">
            <li className="headerLink" onClick={this.jobsRouter}>
              <a>Jobs</a>
            </li>
            <li className="headerLink" onClick={this.newsRouter}>
              <a>News</a>
            </li>
            <li className="headerLink" onClick={this.pressRouter}>
              <a>Press</a>
            </li>
            <li className="headerLink" onClick={this.investorRouter}>
              <a>Investors</a>
            </li>
            <li className="headerLink" onClick={this.happinessRouter}>
              <a>Halendr for Happiness</a>
            </li>
          </ul>
        </div>
        <div className="jobsBodyTop contentBlock">
          <div className="jobsBodyTopContainer">
            <div id="jobsBodyTopTitle">
              People make Halendr.
            </div>
            <div className="jobsBodyTopButtonHelper">
              <div className="jobsBodyTopText">
                We look for people who challenge ths status quo; people who ask questions and provide answers. People whose curiosity know no bounds.
                <br />
                Our people lead innovation by example and remain at the forefront of a fast changing world. Is it you we are looking for?
              </div>
              <button className="browseJobsButton">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
        <div className="jobsBodyMid contentBlock">
          {this.displayJobInterestSection()}
        </div>
        <div className="jobsBodyBot contentBlock">
          <div className="jobsBotContainer">
            <div>
              Halendr is a proud equal opportunity employer. We aim to create a diverse and inclusive workforce
              where everyone feels valued. We do not discriminate based upon race, religion, colour, age, national
               origin, gender (including pregnancy, childbirth, or related medical conditions), sexual orientation,
                gender identity, gender expression, age, status as a protected veteran, status as an individual with
                 a disability, genetic predisposition or carrier status, or other applicable legally protected
                 characteristic. We encourage our people to maintain balanced and healthy lifestyles while working
                 flexibly at Halendr.
            </div>
            <div>
              We are committed to providing reasonable accommodations for individuals with disabilities or
              special needs. If you need assistance or an accommodation, please contact us at access@halendr.com.
            </div>
          </div>
        </div>
        <div className="footerBlock contentBlock">
          <div className="footerLinks divider45">
            <a className="footerLink">
              About
            </a>
            <a className="footerLink">
              Careers
            </a>
            <a className="footerLink">
              Help Centre
            </a>
            <a className="footerLink">
              Terms
            </a>
            <a className="footerLink">
              Advertising
            </a>
            <a className="footerLink">
              Create an event
            </a>
          </div>
          <div className="footerCopy divider25">
            <div className="languageMenu">
              <select className="languageContainer">
                <option>
                  English
                </option>
                <option>
                  Spanish
                </option>
              </select>
            </div>
            <div className="copyrightText">
              Halendr © 2017
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default jobsHome;
