import React, { Component } from 'react';
import '../style.scss';

class hHappiness extends Component {
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
    document.title = 'Halendr for Happiness';
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
              Halendr for Happiness.
            </div>
            <div className="jobsBodyTopButtonHelper">
              <div className="happinessBodyTopText">
                We are committed to empowering communities we operate in.
                <br />
                In partnership with local groups, government agencies and nonprofits, we operate and support projects that focus on bringing communities together.
              </div>
              <button className="browseProjectsButton">
                View Projects
              </button>
            </div>
          </div>
        </div>
        <div className="happinessBodyMid contentBlock">
          <div className="HappinessBodyMidContainer colFlex">
            <div className="dignityContainer">
              <div className="dignityTitle">
                The Human Dignity Festival 2017
              </div>
              <div className="dignityBodyText">
                <div>
                  We are a proud supporter of the Human Dignity Festival. As an event partner, we provide techonology
                  solutions that enables the event to reach a global audience and manage local attendees.
                </div>
                <div>
                  The Human Dignity Festival inspires and empowers local and global citizens to creatively collaborate
                  on concrete ways to advance human rights and dignity. Over a two day symposium,
                  an online collaborative event and a series of salon events, the festival will empower
                  leaders at the grassroots across LGBTI and intersectional rights by connecting them with global
                  opportunities and resources so they may build on existing efforts as well as action new ideas.
                </div>
                <div>
                  The festival will shine a light on underrepresented human rights issues and activate change. The HDF
                  Leadership Forum will take apart the Universal Declaration of Human Rights and examine its current
                  status in the world today. Together with local and regional partners, the Forum will celebrate leaders
                  who inspire change in their own communities and facilitate dialogue between key stakeholders.
                  The Human Dignity Festival is proudly bringing to Hong Kong the Human Rights Tattoo, this global
                  arts project aims to complete the Declaration of Universal Human Rights with the full 6773 characters
                   on 6773 human beings around the world.
                </div>
                <div>
                  The core issues for this festival center on LGBTI rights and dignity as they intersect with the
                   challenges that face refugees, displaced people, domestic workers, the targets of human trafficking,
                   and all those who lack access.
                </div>
                <div>
                  The global online challenge will commence on 14 August with the festival’s officiall launch commencing
                  on 14 September followed by the Human Rights Tattoo project and the Human Dignity Leadership Forum on
                  14-15 October at Metta Hong Kong where a wide range of attendees will be brought together to emphasise
                  what dignity means.
                </div>
                <div>
                  To learn more about the Human Dignity Festival, please visit: www.humandignityfestival.org
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

export default hHappiness;
