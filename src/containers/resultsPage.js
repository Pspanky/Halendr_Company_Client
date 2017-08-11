import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllEvents } from '../actions';
import header from '../components/header';
import { monthConverterShort, monthConverter, dayConverterShort, hourCleaner } from '../helper_functions';
import '../style.scss';

class resultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holder: 0,
    };
    this.createResultPreview = this.createResultPreview.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllEvents();
  }

  createResultPreview(eventInfo) {
    if (this.props.events.length === 0) {
      return (
        <div />
      );
    } else {
      const eventDate = new Date(eventInfo.date);
      return (
        <div className="searchResultContainer">
          <img className="resultPreview" src="https://i.imgur.com/Jq16yjo.png.png" alt="" />
          <div className="resultDateInformation">
            <div className="resultDateDay">
              {dayConverterShort(eventDate.getDay())}
            </div>
            <div className="resultDateDate">
              {eventDate.getDate()}
            </div>
            <div className="resultDateMonth">
              {monthConverterShort(eventDate.getMonth())}
            </div>
          </div>
          <div className="resultTextContainer">
            <div className="resultTitleContainer">
              <div className="resultTitle">
                {eventInfo.title}
              </div>
              <div>·</div>
              <div>
              Hosted by
            </div>
              <div className="resultHost">
                <a>
                  {eventInfo.host}
                </a>
              </div>
            </div>
            <div className="resultInformation">
              <div>
              Tomorrow, {eventDate.getDate()} {monthConverter(eventDate.getMonth())} at {hourCleaner(eventDate.getHours())}
              </div>
              <div>
                {eventInfo.location.name}
              </div>
              <div>
              3 kms away
            </div>
            </div>
          </div>
          <div className="resultButtonContainer">
            <div className="resultGoingButton">
            Going
            <img className="resultGoingIcon" src="https://i.imgur.com/l7nX6bO.png" alt="" />
            </div>
            <div className="resultShareButton">
              <img className="resultShareIcon" src="https://i.imgur.com/fUhmVZN.pngg" alt="" />
            Share
          </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="homeBody">
        {header()}
        <div className="searchbarBlock contentBlock">
          <div className="searchbarHelper">
            <div className="searchbarContainer">
              <div id="searchbarQuery">
                Search
              </div>
              <img className="searchIcon" src="https://i.imgur.com/gOZKbJe.png" alt="" />
              happening
              <div id="searchTimeFrame" className="searchOption">
                this week
              </div>
              within
              <div id="searchDistFrame" className="searchOption">
                5 km
              </div>
              of Hong Kong
            </div>
            <div className="createEventButton">
              <img className="plusIcon" src="https://i.imgur.com/MVazKxl.png" alt="" />
              Create an event
            </div>
          </div>
        </div>
        <div className="timeframeBlock contentBlock">
          <div className="timeframeContainer">
            <div className="timeframeOption">
              All
            </div>
            <div className="timeframeOption">
              Today
            </div>
            <div className="timeframeOption">
              Tomorrow
            </div>
            <div className="timeframeOption">
              This weekend
            </div>
            <div className="timeframeOption" id="timeframeExample">
              This week
            </div>
            <div className="timeframeOption">
              Next week
            </div>
          </div>
        </div>
        <div className="searchResultsBackground">
          <div className="searchResultsBodyContainer">
            <div id="searchResultsBodyLeft" className="columnSection">
              <div id="topfiller" />
              <div id="filterResultsTitle">
                Filter Results
              </div>
              <div className="resultsOptionsBox">
                <div className="resultsOptionsTitle">
                  <b>POSTED BY</b>
                </div>
                <div className="resultsOptionsChoices">
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="postedBy" />
                    Anyone
                  </div>
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="postedBy" />
                    You
                  </div>
                  <div className="resultsCheckboxContainer" id="moreOptionsBox">
                    <img id="moreOptionPlus" src="https://i.imgur.com/0FczezP.png" alt="" />
                    <div>Choose a source...</div>
                  </div>
                </div>
              </div>
              <div className="resultsOptionsBox">
                <div className="resultsOptionsTitle">
                  <b>LOCATION</b>
                </div>
                <div className="resultsOptionsChoices">
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="location" />
                    Anywhere
                  </div>
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="location" />
                    Central
                  </div>
                  <div className="resultsCheckboxContainer" id="moreOptionsBox">
                    <img id="moreOptionPlus" src="https://i.imgur.com/0FczezP.png" alt="" />
                    <div>Choose a location...</div>
                  </div>
                </div>
              </div>
              <div className="resultsOptionsBox">
                <div className="resultsOptionsTitle">
                  <b>DATE POSTED</b>
                </div>
                <div className="resultsOptionsChoices">
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="datePosted" />
                    At any time
                  </div>
                  <div className="resultsCheckboxContainer">
                    <input type="radio" name="datePosted" />
                    July 2017
                  </div>
                  <div className="resultsCheckboxContainer" id="moreOptionsBox">
                    <img id="moreOptionPlus" src="https://i.imgur.com/0FczezP.png" alt="" />
                    <div>Choose a date...</div>
                  </div>
                </div>
              </div>
              <div className="resultsOptionsBox">
                <div className="resultsOptionsTitle">
                  <b>CATEGORY</b>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Causes
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Arts &amp; Culture
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Books &amp; Literature
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Causes
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Community &amp; Beliefs
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Family
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Fashion &amp; Beauty
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Food &amp; Drink
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Health &amp; Wellness
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    LBTGQ+
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Music
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Networking
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Outdoors &amp; Sports
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Parties &amp; Nightlife
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Sci-Fi &amp; Games
                  </div>
                </div>
                <div className="resultsOptionsChoices categoryCheck">
                  <div className="resultsCategoriesContainer">
                    <img id="cCausesU" className="categoryPic" src="https://i.imgur.com/f4tK7pJ.png" alt="" />
                    <img id="cCausesC" className="categoryPic" src="https://i.imgur.com/wP1mS6x.png" alt="" />
                    Tech
                  </div>
                </div>
              </div>
            </div>
            <div id="searchResultsBodyRight" className="columnSection">
              <div className="searchResultsTitle">
                This Week
              </div>
              <div className="searchResultsContainer">
                {this.createResultPreview(this.props.events[0])}
                {this.createResultPreview(this.props.events[1])}
                <div className="searchResultContainer">
                  <img className="resultPreview" src="https://i.imgur.com/Jq16yjo.png.png" alt="" />
                  <div className="resultDateInformation">
                    <div className="resultDateDay">
                      MON
                    </div>
                    <div className="resultDateDate">
                      21
                    </div>
                    <div className="resultDateMonth">
                      JUN
                    </div>
                  </div>
                  <div className="resultTextContainer">
                    <div className="resultTitleContainer">
                      <div className="resultTitle">
                        Annual One-Legged Dog Walk
                      </div>
                      <div>·</div>
                      <div>
                        Hosted by
                      </div>
                      <div className="resultHost">
                        Hong kong Expats
                      </div>
                    </div>
                    <div className="resultInformation">
                      <div>
                        Tomorrow, 21 June at 8:00 pm
                      </div>
                      <div>
                        Hong Kong Park
                      </div>
                      <div>
                        3 kms away
                      </div>
                    </div>
                  </div>
                  <div className="resultButtonContainer">
                    <div className="resultGoingButton">
                      Going
                      <img className="resultGoingIcon" src="https://i.imgur.com/l7nX6bO.png" alt="" />
                    </div>
                    <div className="resultShareButton">
                      <img className="resultShareIcon" src="https://i.imgur.com/fUhmVZN.pngg" alt="" />
                      Share
                    </div>
                  </div>
                </div>
                <div className="searchResultContainer">
                  <img className="resultPreview" src="https://i.imgur.com/Jq16yjo.png.png" alt="" />
                  <div className="resultDateInformation">
                    <div className="resultDateDay">
                      MON
                    </div>
                    <div className="resultDateDate">
                      21
                    </div>
                    <div className="resultDateMonth">
                      JUN
                    </div>
                  </div>
                  <div className="resultTextContainer">
                    <div className="resultTitleContainer">
                      <div className="resultTitle">
                        Annual One-Legged Dog Walk
                      </div>
                      <div>·</div>
                      <div>
                        Hosted by
                      </div>
                      <div className="resultHost">
                        Hong kong Expats
                      </div>
                    </div>
                    <div className="resultInformation">
                      <div>
                        Tomorrow, 21 June at 8:00 pm
                      </div>
                      <div>
                        Hong Kong Park
                      </div>
                      <div>
                        3 kms away
                      </div>
                    </div>
                  </div>
                  <div className="resultButtonContainer">
                    <div className="resultGoingButton">
                      Going
                      <img className="resultGoingIcon" src="https://i.imgur.com/l7nX6bO.png" alt="" />
                    </div>
                    <div className="resultShareButton">
                      <img className="resultShareIcon" src="https://i.imgur.com/fUhmVZN.pngg" alt="" />
                      Share
                    </div>
                  </div>
                </div>
                <img src="https://i.imgur.com/dGP2kT5.png" className="moreResults" alt="" />
              </div>
            </div>
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
  }
}
const mapStateToProps = state => (
  {
    events: state.events.events,
  }
);

export default withRouter(connect(mapStateToProps, { fetchAllEvents })(resultsPage));
