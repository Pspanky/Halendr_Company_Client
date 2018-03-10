import React, { Component } from 'react';
import '../style.scss';

class aboutHome extends Component {
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
    document.title = 'Halendr';
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
        <div className="aboutBody contentBlock">
          <div className="bodyContainer">
            <div className="missionStatementContainer colFlex">
              <img className="statementLogo" src="https://preview.ibb.co/cHby9v/h_Logo_White.png" alt="" />
              <div className="missionStatementText">
                <div>
                        Our mission is to connect people with everything happening around
                        them. Our story began when we realised the frustration of finding
                        things to do; no more we said, no more. We want people to be able to connect with everything they love to do at their fingertips.
                      </div>
                <div>
                        Every second, Halendr connects users with most exciting things happening around them and helps
                        build communities of people who celebrate their passions and share new experiences.
                      </div>
                <div>
                        We aim to share our vision of a more connected world with communities across the world
                        by expanding to new cities.
                      </div>
                <div>
                        We believe in being a transparent, accountable and responsible business. We have lots
                        of way you can give us your feedback and let us know if something isnt quite right.
                        Our commitment to our users go beyond our online community, on the ground we empower
                        communities we operate in through our charitable campaign; Halendr for Happiness.
                      </div>
                <div>
                        Share your Halendr experience today with the hashtag #halendrandme
                      </div>
              </div>
            </div>
            <div className="contactInfoContainer colFlex">
              <div className="contactContainer">
                <div className="contactTitle">
                        Contact
                      </div>
                <div className="contactInfo">
                        Halendr limited <br />
                        PO Box XXX <br />
                        Hong Kong
                      </div>
              </div>
              <div className="contactContainer">
                <div className="contactTitle">
                        Press
                      </div>
                <div className="contactInfo">
                        press@halendr.com
                      </div>
              </div>
              <div className="contactContainer">
                <div className="contactTitle">
                        Investor Relations
                      </div>
                <div className="contactInfo">
                        investor-relations@halendr.com
                      </div>
              </div>
              <div className="contactContainer">
                <div className="contactTitle">
                        Follow us
                      </div>
                <div className="contactInfo">
                        @halendrtweets
                      </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBlock contentBlock">
          <div className="footerLinks divider45">
            <a className="footerLink">
                    About
                  </a>
            <a className="footerLink" >
                    Careers
                  </a>
            <a className="footerLink">
                    Help Centre
                  </a>
            <a className="footerLink" >
                    Terms
                  </a>
            <a className="footerLink" >
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

export default aboutHome;
