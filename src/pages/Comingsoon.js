import '../Info.css';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import styles from '../Home.module.css';
import {useEffect} from 'react';
import TwitterEmbed from './TwitterEmbed';
import useNavHeight from './hooks/NavbarHeight';

const Comingsoon = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Find out what game titles are coming soon to uSync. Request a game of your choice to be published on www.usync.gg" />
          </Helmet>
      <div className="total-coming-soon-container">
        <div id="league-body2">
          <div className='Header-Img-l coming-soon-header-img'>
            <div className="games-leagues-header-title">
              <h1 id="league-title">Coming Soon</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>

          {/* <div className="Background-mid-contact"> */}
            {/* <div className="game-titles">
              <h1 className="event-title-contactus">Game Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-coming"
              />
            </div> */}
            {/* <div className="container">
              <div className="row justify-content-center coming-soon-row">
              <div className="col-sm-2 space-on-bottom">
                  <img
                    src="https://i.imgur.com/ybSqQK4.png"
                    alt="Fortnite"
                    className="coming-soon-img"
                  />
                </div>

                <div className="col-sm-2 space-on-bottom">
                  <img
                    src="https://i.imgur.com/MUcaqmt.png"
                    alt="Apex Legends"
                    className="coming-soon-img"
                  />
                </div>
                <div className="col-sm-2 space-on-bottom">
                  <img
                    src="https://i.imgur.com/qpQDtRJ.png"
                    alt="Super Smash Brothers"
                    className="coming-soon-img"
                  />
                </div>
                <div className="col-sm-2">
                  <img
                    src="https://i.imgur.com/XxOYZiE.png"
                    alt="Overwatch 2"
                    className="coming-soon-img"
                  />
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className={styles.backgroundMidWithBanner}>
            <div className="game-titles">
              <h1 className="event-title-contactus">Game Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-coming"
              />
            </div>

              <div className={styles.backgroundImages}>
                <img
                  src="https://i.imgur.com/ybSqQK4.png"
                  alt="Fortnite"
                  className='home-games-images-unreleased'
                  // height="12.5rem"
                  // width="12.5rem"
                />

                <img
                  src="https://i.imgur.com/MUcaqmt.png"
                  alt="Apex Legends"
                  // className='home-games-images'
                  // height="12.5rem"
                  // width="12.5rem"
                />

                <img
                  src="https://i.imgur.com/qpQDtRJ.png"
                  alt="Super Smash Brothers"
                  // className='home-games-images'
                  // height="12.5rem"
                  // width="12.5rem"
                />

                <img
                  src="https://i.imgur.com/XxOYZiE.png"
                  alt="Overwatch 2"
                  // className='home-games-images'
                  // height="12.5rem"
                  // width="12.5rem"
                />
              </div>
            </div>
            
          <div className="Background-mid-contact">
            <div className="coming-soon-background-mid-bottom">
              <h1 className="coming-soon-text shorter-top">
              We are actively working on different titles in order to bring the best competition to you. 
              These take time due to the competitive scenes varying from title to title. Your continued use of our services allow 
              for us to keep working on new titles for the future. Thank you!
              </h1>
              <h1 className="event-title-coming">Event Types</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-coming"
              />
              <div className="container event-types-images">
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <img
                      src="https://i.imgur.com/8ZFHAM6.png"
                      alt="RocketLeague Tournaments"
                      className="blockimg-coming-soon"
                      id="coming-soon-online-tournaments"
                    />
                  </div>
                </div>
              </div>
              <h1 className="info-title-coming2">
              We are looking to provide a list of daily tournaments from all of the varying sites so that players don't have to move 
              from site to site to find what they are looking for!
              </h1>

              <h1 className="info-title-coming2">
                Unfortunately, implementing this feature is costly and our services are free which places a heavy burden on us. However, in the meantime keep up to date with what we are working on with our Twitter!
              </h1>

              {/* <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Why YOU should use OUR SITE.<br/>A thread of what uSync does and how it can help you compete or host competitions in Esports. 🧵 <a href="https://t.co/LiXoUeutrs">pic.twitter.com/LiXoUeutrs</a></p>&mdash; uSync (@uSyncGG) <a href="https://twitter.com/uSyncGG/status/1812969871845827047?ref_src=twsrc%5Etfw">July 15, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
              <div className='container'>
                <div className='row'>
                  <div className='col-12 d-flex justify-content-center'>
                    <TwitterEmbed />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
}
export default Comingsoon;

