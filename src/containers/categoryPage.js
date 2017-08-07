import React, { Component } from 'react';
import header from '../components/header';
import '../style.scss';

class categoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holder: 0,
    };
  }

  render() {
    return (
      <div>
        {/* Hello world */}
        <div className="homeBody">
          { header() }
          <div className="categoryPictureBlock contentBlock" id="categoryArtBlock" />
          <div className="categoryAdsBlock contentBlock">
            <div className="categoryAdsTitle">
              <b>Featured</b>
            </div>
            <div className="categoryAdsContainer">
              <div className="adsHoriBlock contentBlock">
                <div className="adsVertBlock3">
                  <div className="tallAdBig ad">
                    <div className="adTextContainer">
                      <div className="adTextTitle">
                        <b>Clockenflap 2017</b>
                      </div>
                      <div className="adTextDate">
                        17-18 November
                      </div>
                    </div>
                  </div>
                </div>
                <div className="adsVertBlock3 smallerAds">
                  <div className="tallAdMed ad" />
                  <div className="tallAdMed ad" />
                  <div className="wideAdMed ad" />
                </div>
                <div className="adsVertBlock3 smallerAds">
                  <div className="tallAdMed ad" />
                  <div className="tallAdMed ad" />
                </div>
              </div>
              <div className="adsHoriBlock contentBlock">
                <div className="wideAdBig ad" />
              </div>
              <div className="adsHoriBlock contentBlock">
                <div className="adsVertBlock4">
                  <div className="tallAdSmall ad" />
                </div>
                <div className="adsVertBlock4">
                  <div className="tallAdSmall ad" />
                </div>
                <div className="adsVertBlock4">
                  <div className="tallAdSmall ad" />
                </div>
                <div className="adsVertBlock4">
                  <div className="tallAdSmall ad" />
                </div>
              </div>
            </div>
          </div>
          <div className="categoryBotBlock contentBlock">
            <div className="catBotButton">
              View everything happening in Music
            </div>
          </div>
        </div>
        <div className="footerBlock contentBlock">
          <div className="footerLinks divider40">
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

export default categoryPage;
