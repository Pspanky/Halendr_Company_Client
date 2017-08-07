import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';
import { createEvent, fetchAllEvents } from '../actions';
import '../style.scss';

class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holder: 0,
    };

    this.createEvent = this.createEvent.bind(this);
    this.createEventPreview = this.createEventPreview.bind(this);
    this.testRouter = this.testRouter.bind(this);
    this.homeRouter = this.homeRouter.bind(this);
  }

  // componentWillMount() {
  //   this.props.fetchAllEvents();
  // }

  componentDidMount() {
    console.log(this.props.events);
    this.props.fetchAllEvents();
  }

  createEvent() {
    this.props.createEvent();
  }

  homeRouter() {
    this.props.history.push('/');
  }

  testRouter() {
    this.props.history.push('/categories');
  }

  dayConverter(number) { // eslint-disable-line class-methods-use-this
    let day = '';
    switch (number) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      default:
        day = '';
    }
    return day;
  }

  hourCleaner(number) { // eslint-disable-line class-methods-use-this
    const suffix = (number >= 12) ? ' pm' : ' am';
    const hours = (number > 12) ? number - 12 : number;

    return `${hours}:00${suffix}`;
  }

  monthConverter(number) { // eslint-disable-line class-methods-use-this
    let month = '';
    switch (number) {
      case 0:
        month = 'JAN';
        break;
      case 1:
        month = 'FEB';
        break;
      case 2:
        month = 'MAR';
        break;
      case 3:
        month = 'APR';
        break;
      case 4:
        month = 'MAY';
        break;
      case 5:
        month = 'JUN';
        break;
      case 6:
        month = 'JUL';
        break;
      case 7:
        month = 'AUG';
        break;
      case 8:
        month = 'SEP';
        break;
      case 9:
        month = 'OCT';
        break;
      case 10:
        month = 'NOV';
        break;
      case 11:
        month = 'DEC';
        break;
      default:
        month = '';
    }
    return month;
  }

  createEventPreview(eventInfo) {  // eslint-disable-line class-methods-use-this
    const eventDate = new Date(eventInfo.date);
    return (
      <div className="previewBlock" onClick={this.testRouter}>
        <div className="previewImage" />
        <div className="previewInfo">
          <div className="previewText">
            <div className="previewTitle">{eventInfo.title}</div>
            <div className="previewSub">{this.dayConverter(eventDate.getDay())} at {this.hourCleaner(eventDate.getHours())}</div>
            <div className="previewSub">5 km away</div>
          </div>
          <div className="previewDateBox">
            <div className="dateMonth previewDate">{this.monthConverter(eventDate.getMonth())}</div>
            <div className="dateDay previewDate">{eventDate.getDate()}</div>
          </div>
        </div>
      </div>
    );
  }

  // makes an array of discrete random numbers in a range
  generateRandomNumbers(amount, range) { // eslint-disable-line class-methods-use-this
    let x = 0;
    const indices = [];
    while (x < amount) {
      const randomNumber = Math.floor(Math.random() * (range));
      if (indices.indexOf(randomNumber) === -1) {
        indices[x] = randomNumber;
        x += 1;
      }
    }
    return indices;
  }

  createEventPreviews(eventsList) { // eslint-disable-line class-methods-use-this
    const indices = this.generateRandomNumbers(4, eventsList.length);

    return indices.map((index) => {
      return this.createEventPreview(eventsList[index]);
    });
  }

  render() {
    if (this.props.events.length !== 0) {
      console.log(this.props.events[0].date);
      console.log(this.generateRandomNumbers(4, this.props.events.length));
      return (
        <div className="homeBody">
          <Header homeRouter={this.homeRouter} />
          <div className="homeSearchBody contentBlock">
            <div id="hashtagText">
            #halendrandme
          </div>
            <div id="searchButtonContainer">
              <button className="searchButton" onClick={this.createEvent}>
                Search
            </button>
              <div className="discoverButton">
                View everything happening now
            </div>
            </div>
          </div>
          <div className="whiteBlockMed contentBlock">
            <div className="featuredText">
              <b>Featured</b>
            </div>
          </div>
          <div className="featuredBlock contentBlock">
            <div id="leftButton" className="buttonContainer left" />
            <div className="previewContainer">
              {this.createEventPreviews(this.props.events)}
            </div>
            <div id="rightButton" className="buttonContainer" />
          </div>
          <div className="contentBlock whiteBlockSmall" />
          <div className="redBlock contentBlock">
            <div className="blockText">
            Connect with your friends and new people who share your interests
          </div>
            <div className="blockSign signButton">Sign up</div>
          </div>
          <div className="whiteBlockMed" />
          <div className="findSomethingBlock contentBlock">
            <div className="divider35">
              <div id="imageHelper" />
            </div>
            <div className="divider50">
              <div id="findPosHelp">
                <div id="findTitle">
                Not sure what to do? <br />
                No worries!
              </div>
                <div id="findText">
                With so much happening around you, we dont blame you for being unsure.
                <br />
                Answer a few questions about you and well do the rest.
              </div>
                <div id="findButton">
                TELL ME WHAT TO DO
              </div>
              </div>
            </div>
          </div>
          <div className="whiteBlockSmall contentBlock" />
          <div className="createEventBlock contentBlock">
            <div className="divider36">
              <img id="createButton" src="https://i.imgur.com/BIlwmDo.png" alt="" />
            </div>
            <div id="createText">
            Create an event
          </div>
          </div>
          <div className="whiteBlockSmall contentBlock" />
          <div className="whiteBlockSmall contentBlock">
            <div id="discover">Discover</div>
          </div>
          <div className="categoriesBlock contentBlock">
            <div className="categoriesRow">
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/Lc0Ff8b.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/iEYIlly.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/LR9PE8W.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/GCrmnKF.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/tMBZ2SQ.jpg" alt="" />
              </div>
            </div>
            <div className="categoriesRow">
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/C4BQfxt.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/sJO8Eyn.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/QmeOIUD.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/7kpQqsD.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/3XLgFlV.jpg" alt="" />
              </div>
            </div>
            <div className="categoriesRow">
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/yfzb7EU.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/nWmxu0r.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/W6Yo3Ec.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/p6HAQ8d.jpg" alt="" />
              </div>
              <div className="categoriesTile">
                <img className="categoryImage" src="https://i.imgur.com/Ge6WoRI.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="whiteBlockMed contentBlock" />
          <div className="mobileBlock contentBlock">
            <div className="divider60">
              <div id="comingSoon">
              Halendr for mobile <br /> coming soon.
            </div>
              <div id="comingSub">
              Discover things as they happen and never miss an exciting moment around you.
              <br />
              More features, more fun.
            </div>
            </div>
            <div className="divider35">
              <div className="picContainer" />
            </div>
          </div>
          <div className="footerBlock contentBlock">
            <div className="footerLinks divider40">
              <a className="footerLink" href="">
              About
            </a>
              <a className="footerLink" href="">
              Careers
            </a>
              <a className="footerLink" href="">
              Help Centre
            </a>
              <a className="footerLink" href="">
              Terms
            </a>
              <a className="footerLink" href="">
              Advertising
            </a>
            </div>
            <div className="footerCopy divider25">
              <div className="languageMenu">
              English
            </div>
              <div className="copyrightText">
              Halendr © 2017
            </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

const mapStateToProps = state => (
  {
    events: state.events.events,
  }
);

export default withRouter(connect(mapStateToProps, { createEvent, fetchAllEvents })(homePage));
