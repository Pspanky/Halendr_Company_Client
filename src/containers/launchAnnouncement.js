import React, { Component } from 'react';
import '../style.scss';

class launchAnnouncement extends Component {
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
    document.title = 'Halendr - Launch';
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
        <div className="newsBody contentBlock">
          <div className="newsBodyContainer">
            <div className="newsBodyTitleContainer">
              <div className="newsDateContainer">
                <div className="newsPreviewMonth">
                  <b>JUN </b>
                </div>
                <div className="newsPreviewDate">
                  <b> 02 </b>
                </div>
                <div className="newsPreviewYear">
                  <b> 2017 </b>
                </div>
              </div>
              <div className="newsTitle">
                  The Hunt is Over
                </div>
            </div>
            <div className="newsBodyText">
              <div>
                  Halendr today announced its plans to launch in Hong Kong. The social community, which will initially
                  launch its website and follow up with a mobile application, aims to connect users with everything happening around them based on their interests, location and
                  preferences. The website will go live on 01 September 2017.
                </div>
              <div>
                  Halendr will connect users with more of what they enjoy, new things to do and experiences with others.
                  The platform aims to simplify the process of finding things to do and offer suggestions to users based
                   on the intelligent study of their behaviour. Beyond core functionalities, Halendr aims to be an active
                   and vibrant community allowing organisers and hosts to connect with a wider audience of attendees.
                   Features like the proposed “Tell Me What To Do” and “Happening Now” functions, will allow users to
                   discover things happening around them at any time within a matter of minutes. From design to implementation, usability and user experience remain the focus of the platform.
                   “It has been a challenging journey especially with the short time frame from inception to launch but we are excited for the future. Leading the design of the platform means
                   keeping users at the heart of everything we do,” said Maritsa Cortes, Halendr’s Lead Designer.
                </div>
              <div>
                  With traditional ways of finding things to do being both time consuming and limited in scope,
                  the social community aims to offer a bigger and better experience that is focused on the attendee as opposed
                  to the event itself. Existing platforms that feature things happening in an area are usually restricted
                  to the events they are in partnership with or do not offer users a convenient way
                  for discovery, and more often than not they are built around the event or organiser. “The hunt will soon
                  be over,” said Hasanal Zafrullah, CEO &amp; Co-founder of Halendr. “We want people to go on Halendr
                  and in minutes find something to do, and do it. We’re talking anything from your neighbour’s bake sale
                  to a Britney concert.”
                </div>
              <div>
                  Following its anticipated launch in Hong Kong, the social community aims to share its vision with the
                  world and expand to further cities. Globally, consumer spending on leisure and recreation is currently
                  at an all-time high and is only expected to surge in the coming years. “In countries where consumers
                  spend more on leisure and recreation, there is an overall demand for ‘things to do’ and a significant
                  presence of both commercial and non-commercial activities; consumers tend to go out more and ‘fun’
                  cities tend to be situated in these countries. In economic terms, this means both the demand and supply
                  are high,” said Zafrullah. “We’re glad we have chosen Hong Kong to launch, it really is the ideal place to start our journey.”
                </div>
              <div>
                  About Halendr: Halendr is a Hong Kong-based startup with a mission to connect people with everything
                  happening around them at their fingertips. The company was founded in response to co-founder Hasanal Zafrullah’s frustration with the hassle involved in
                  finding things to do. Halendr is led by co-founders Hasanal Zafrullah and Paul Spangfort and passionately delivered by its people
                  dedicated to redefining the way users connect with the world.
                </div>
            </div>
          </div>
          <div className="pressContainer contentBlock">
            <div className="pressTextHelper">
              <div className="pressTitle">
                <b>Press Contact</b>
              </div>
              <div className="pressEmail">
                  press@halendr.com
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

export default launchAnnouncement;
