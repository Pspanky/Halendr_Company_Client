import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import header from '../components/header';
import { createEvent, fetchAllEvents } from '../actions';
import { monthConverterShort, dayConverter, hourCleaner } from '../helper_functions';
import '../style.scss';

class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };
    this.createEvent = this.createEvent.bind(this);
    this.createEventPreview = this.createEventPreview.bind(this);
    this.resultsRouter = this.resultsRouter.bind(this);
    this.homeRouter = this.homeRouter.bind(this);
    this.searchButtonField = this.searchButtonField.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentWillMount() {
    console.log(this.props.events);
    this.props.fetchAllEvents();
  }

  toggleSearch() {
    const currentState = this.state.search;
    this.setState({ search: !currentState });
  }

  createEvent() {
    this.props.createEvent();
  }

  homeRouter() {
    this.props.history.push('/');
  }

  resultsRouter() {
    this.props.history.push('/results');
  }

  createEventPreview(eventInfo) {
    const eventDate = new Date(eventInfo.date);
    return (
      <div className="previewBlock" onClick={this.resultsRouter}>
        <div className="previewImage" />
        <div className="previewInfo">
          <div className="previewText">
            <div className="previewTitle">{eventInfo.title}</div>
            <div className="previewSub">{dayConverter(eventDate.getDay())} at {hourCleaner(eventDate.getHours())}</div>
            <div className="previewSub">5 km away</div>
          </div>
          <div className="previewDateBox">
            <div className="dateMonth previewDate">{monthConverterShort(eventDate.getMonth())}</div>
            <div className="dateDay previewDate">{eventDate.getDate()}</div>
          </div>
        </div>
      </div>
    );
  }

  // makes an array of discrete random numbers in a range
  generateRandomNumbers(amount, range) {
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

  createEventPreviews(eventsList) {
    const indices = this.generateRandomNumbers(4, eventsList.length);

    return indices.map((index) => {
      return this.createEventPreview(eventsList[index]);
    });
  }

  searchButtonField() {
    if (!this.state.search) {
      return (
        <div id="searchButtonContainer">
          <button className="searchButton" onClick={this.toggleSearch}>
            Search
        </button>
          <div className="discoverButton">
            View everything happening now
        </div>
        </div>
      );
    } else {
      return (
        <div id="searchButtonContainerTrue">
          <div className="flexContainer">
            <input className="searchInput" />
            <div className="searchClick" onClick={this.resultsRouter} />
            <div className="searchVariables">
            happening
            <div className="underline">
              this week
            </div>
              <div>
              within
            </div>
              <div className="underline">
              5 km
            </div>
              <div>
              from Hong Kong
            </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.props.events.length !== 0) {
      console.log(this.props.events[0].date);
      console.log(this.generateRandomNumbers(4, this.props.events.length));
      return (
        <div className="homeBody">
          {header()}
          <div className="homeSearchBody contentBlock">
            <div id="hashtagText">
            #halendrandme
          </div>
            {this.searchButtonField()}
          </div>
          <div className="whiteBlockMed contentBlock">
            <div className="featuredText">
              <b>Featured</b>
            </div>
          </div>
          <div className="featuredBlock contentBlock">
            <div id="leftButton" className="buttonContainer left" />
            <div className="previewContainer">
              re
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
            <div id="discover"><b>Discover</b></div>
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
              <a className="footerLink" href="">
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
    } else {
      return (
        <div>
        hello testing
        </div>
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
