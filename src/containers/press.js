import React, { Component } from 'react';
import '../style.scss';


class pressHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };

    this.homeRouter = this.homeRouter.bind(this);
    this.newsRouter = this.newsRouter.bind(this);
    this.pressRouter = this.pressRouter.bind(this);
    this.investorRouter = this.investorRouter.bind(this);
    this.jobsRouter = this.jobsRouter.bind(this);
    this.happinessRouter = this.happinessRouter.bind(this);
  }

  componentDidMount() {
    document.title = 'Press';
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
        <div className="investorBody contentBlock">
          <div className="investorTextContainer">
            <div className="pressTextTitle">
              Press Contact
            </div>
            <div className="pressTextBody">
              <div>
                For press enquiries or to request an interview with Halendr, please contact us at press@halendr.com
              </div>
              <div>
                For the latest press releases, product and company
                news, please visit: company.halendr.com/news/
              </div>
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

export default pressHome;
