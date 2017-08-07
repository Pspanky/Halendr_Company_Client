import React, { Component } from 'react';
import header from '../components/header';
import '../style.scss';

class eventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holder: 0,
    };
  }

  render() {
    return (
      <div className="homeBody">
        {header()}
        <div className="eventBackground">
          <div className="eventBodyLeft columnSection">
            <div className="eventPhoto eventBlock" />
            <div className="eventTitleBlock eventBlock">
              <div className="eventTitleTop">
                <div className="eventDate">
                  <div id="eventDateDay">MON</div>
                  <div id="eventDateNumber">21</div>
                  <div id="eventDateMonth">JUN</div>
                </div>
                <div className="eventTitleInfo">
                  <div className="eventTitle">
                    Hiking Sundays
                    <img className="starIcon" src="https://i.imgur.com/h6hkhAW.png" alt="" />
                  </div>
                  <div className="eventSubTitle">
                    <div>
                      Sai Kung
                    </div>
                    <div className="textDot">·</div>
                    <div>
                      Hosted by
                    </div>
                    <div className="eventHostName">
                      Hong Kong Expats
                    </div>
                  </div>
                </div>
                <div id="eventReviewsBtnContainer">
                  <div className="eventMiscButton">
                    <div className="reviewsButton">
                      Reviews
                    </div>
                  </div>
                </div>
              </div>
              <div className="eventTitleBottom">
                <div className="eventBottomContainer">
                  <div id="timeIcon" className="Icon" />
                  <div className="eventBottomText">
                    Monday, 21 June at 9:00 am-1:00 pm
                  </div>
                  <div id="checkIcon" className="Icon" />
                  <div className="clashText">
                    It doesnt look like you have any clashes
                  </div>
                </div>
                <div className="eventBottomContainer">
                  <div id="locationIcon" className="Icon" />
                  <div className="eventBottomText">
                    Sai Kung Peak, Sai Kung Road, Sai Kung
                  </div>
                  <div className="textDot">
                    ·
                  </div>
                  <div className="showMapText">
                    Show Map
                  </div>
                </div>
              </div>
            </div>
            <div className="eventButtonsBlock eventBlock">
              <button className="eventMiscButton">
                <div className="buttonContainer">
                  Going
                  <div className="goingIcon" />
                </div>
              </button>
              <button className="eventMiscButton" id="eventShareButton">
                <div className="buttonContainer">
                  <div className="shareIcon" />
                  Share
                </div>
              </button>
              <button className="eventMiscButton">
                <div className="buttonContainer">
                  <img className="dotIcon" src="https://i.imgur.com/DN1W9Tm.png" alt="" />
                </div>
              </button>
            </div>
            <div className="eventDetailsBlock eventBlock">
              <div id="eventDetailTitle">About Hiking Sundays</div>
              <div className="divider" />
              <div className="eventBodyText">
                Praesent accumsan ligula eget elit porta, sed efficitur est varius.
                Sed quam tellus, iaculis vel ante nec, tincidunt tempus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                Donec lacinia, enim a posuere molestie, ante est cursus nunc, quis fringilla tortor sapien sed nisl. Donec viverra,
                tortor quis commodo tincidunt, turpis sapien ornare nisi, sed maximus ipsum ligula eu diam. Praesent a lectus quis massa elementum mollis fermentum.
              </div>
            </div>
            <div className="eventDiscussionBlock eventBlock">
              <div id="eventDetailTitle">
                Discussions
              </div>
              <div className="divider" />
              <div className="discussionContainer">
                <div className="discussionComment">
                  <img className="userPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <div className="discussionTextContainer">
                    <div className="discussionCommentAuthor">
                      <b>Sam Ryans</b>
                    </div>
                    <div className="discussionCommentText">
                      Im looking forward to meeting everyone at our weekly Hiking Sunday! If you need directions, please call me on +852 9731 6761.
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="discussionComment">
                  <img className="userPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <div className="discussionTextContainer">
                    <div className="discussionCommentAuthor">
                      <b>Sam Ryans</b>
                    </div>
                    <div className="discussionCommentText">
                      Im looking forward to meeting everyone at our weekly Hiking Sunday! If you need directions, please call me on +852 9731 6761.
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="discussionComment">
                  <img className="userPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <div className="discussionTextContainer">
                    <div className="discussionCommentAuthor">
                      <b>Sam Ryans</b>
                    </div>
                    <div className="discussionCommentText">
                      Im looking forward to meeting everyone at our weekly Hiking Sunday!
                      If you need directions, please call me on +852 9731 6761.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventBodyRight columnSection">
            <div id="goingBlock" className="rightSmallBlock eventBlock">
              <div className="smallBlockTitle">
                <b>Going ·</b>
                <b>63</b>
                <img className="attendingIcon" src="https://i.imgur.com/dGP2kT5.png" alt="" />
              </div>
              <div className="divider" />
              <div className="attendingBottomContainer">
                <div className="attendingPortraitsContainer">
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                </div>
                <div className="attendingNumbers">
                  +
                  <div className="goingNumber">
                    79
                  </div>
                  <div>
                    others
                  </div>
                </div>
              </div>
            </div>
            <div id="interestedBlock" className="rightSmallBlock eventBlock">
              <div className="smallBlockTitle">
                <b>Interested ·</b>
                <b>79</b>
                <img className="attendingIcon" src="https://i.imgur.com/dGP2kT5.png" alt="" />
              </div>
              <div className="divider" />
              <div className="attendingBottomContainer">
                <div className="attendingPortraitsContainer">
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                  <img className="attendingPortrait" src="https://i.imgur.com/tENCmLt.png" alt="" />
                </div>
                <div className="attendingNumbers">
                  +
                  <div className="goingNumber">
                    79
                  </div>
                  <div>
                    others
                  </div>
                </div>
              </div>
            </div>
            <div id="ticketsBlock" className="rightSmallBlock eventBlock">
              <div className="smallBlockTitle">
                Tickets Available
              </div>
              <div className="divider" />
              <div className="eventMiscButton centerText">
                Register
              </div>
            </div>
            <div className="eventRelatedBlock eventBlock">
              <div className="relatedBlockTitle"> Event you might like:</div>
              <div className="divider">
                <div className="relatedEventPreview flexBlock">
                  <img className="relatedEventPreviewImage" src="https://i.imgur.com/SS2fGSo.png" alt="" />
                  <div className="relatedEventPreviewTextContainer">
                    <div className="relatedEventPreviewTitle">
                      <b> Celebrate Eggs Event</b>
                    </div>
                    <div className="relatedEventPreviewLocation">
                      Sai Wan, Hong Kong
                    </div>
                  </div>
                  <div className="relatedEventPreviwDateContainer">
                    <div className="REPMonth">
                      JUN
                    </div>
                    <div className="REPDate">
                      24
                    </div>
                  </div>
                </div>
                <div className="relatedEventPreview flexBlock">
                  <img className="relatedEventPreviewImage" src="https://i.imgur.com/SS2fGSo.png" alt="" />
                  <div className="relatedEventPreviewTextContainer">
                    <div className="relatedEventPreviewTitle">
                      <b> Celebrate Eggs Event</b>
                    </div>
                    <div className="relatedEventPreviewLocation">
                      Sai Wan, Hong Kong
                    </div>
                  </div>
                  <div className="relatedEventPreviwDateContainer">
                    <div className="REPMonth">
                      JUN
                    </div>
                    <div className="REPDate">
                      24
                    </div>
                  </div>
                </div>
                <div className="relatedEventPreview flexBlock">
                  <img className="relatedEventPreviewImage" src="https://i.imgur.com/SS2fGSo.png" alt="" />
                  <div className="relatedEventPreviewTextContainer">
                    <div className="relatedEventPreviewTitle">
                      <b> Celebrate Eggs Event</b>
                    </div>
                    <div className="relatedEventPreviewLocation">
                      Sai Wan, Hong Kong
                    </div>
                  </div>
                  <div className="relatedEventPreviwDateContainer">
                    <div className="REPMonth">
                      JUN
                    </div>
                    <div className="REPDate">
                      24
                    </div>
                  </div>
                </div>
                <div className="relatedEventPreview flexBlock">
                  <img className="relatedEventPreviewImage" src="https://i.imgur.com/SS2fGSo.png" alt="" />
                  <div className="relatedEventPreviewTextContainer">
                    <div className="relatedEventPreviewTitle">
                      <b> Celebrate Eggs Event</b>
                    </div>
                    <div className="relatedEventPreviewLocation">
                      Sai Wan, Hong Kong
                    </div>
                  </div>
                  <div className="relatedEventPreviwDateContainer">
                    <div className="REPMonth">
                      JUN
                    </div>
                    <div className="REPDate">
                      24
                    </div>
                  </div>
                </div>
              </div>
              <div className="bigAdBlock">
                <div className="bigAdText">
                  <div className="bigAdTitle">
                    <b>Clockenflap 2017</b>
                  </div>
                  <div className="bigAdDate">
                    17-18 November
                  </div>
                </div>
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

export default eventPage;
