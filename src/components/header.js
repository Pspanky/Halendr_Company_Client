import React, { Component } from 'react';

class CompanyHeader extends Component {

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

  render() {
    return (
      <div className="testHeader contentBlock">
        <img src="https://preview.ibb.co/cHby9v/h_Logo_White.png" className="headerLogo" alt="" />
        <ul className="headerLinks">
          <li className="headerLink" onClick={this.jobsRouter}>
            <a>Jobs</a>
          </li>
          <li className="headerLink">
            <a>News</a>
          </li>
          <li className="headerLink">
            <a>Press</a>
          </li>
          <li className="headerLink">
            <a>Investors</a>
          </li>
          <li className="headerLink">
            <a>Halendr for Happiness</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CompanyHeader;
