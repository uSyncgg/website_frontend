import styles from '../Home.module.css';
import { Helmet } from "react-helmet";
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
import useNavHeight from './hooks/NavbarHeight';

const Lans = () => {
  useNavHeight();
  
    return (
      <>
          <Helmet>
            <meta name="description" content="Find esports LAN events for your favorite game titles near you. From Call of Duty to League of Legends we have every LAN going on." />
          </Helmet>
      <div>
          {/* <header id="League-header">
            <img
              src="https://i.imgur.com/YeUPAmO.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">LAN Titles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </header> */}

          <div className='Header-Img-l lans-img'>
            <div className="games-leagues-header-title">
              <h1 id="league-title">LAN Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>
          
          <div className={styles.backgroundMidWithBanner}>
              <div className={styles.backgroundImages}>
              <a href="/games/call-of-duty/lans">
                  <img
                    src="https://i.imgur.com/gNvoNEo.png"
                    alt="Call of Duty"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/warzone/lans">
                  <img
                    src="https://i.imgur.com/IBGIbY2.png"
                    alt="Warzone"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>

                <a href="/games/halo/lans">
                  <img
                    src="https://i.imgur.com/wqKJfEu.png"
                    alt="Halo Infinite"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/LoL/lans">
                  <img
                    src="https://i.imgur.com/5riYNow.png"
                    alt="League of Legends"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <hr />

                </div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 d-flex justify-content-center space-on-bottom space-on-bottom-pc' id='bubble'>
                    <a href="/LanMap">
                      <img
                        src="https://i.imgur.com/OPhy6nX.png"
                        alt="All LANs"
                        className='home-games-images-all-lans blockimg'
                        // height="12.5rem"
                        // width="12.5rem"
                      />
                    </a>
                    </div>
                  </div>
                </div>
            </div>
            <Footer />

      </div>
      </>
    );
}
export default Lans;