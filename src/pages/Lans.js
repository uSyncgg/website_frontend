import styles from '../Home.module.css';
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
import useNavHeight from './hooks/NavbarHeight';

const Lans = () => {
  useNavHeight();
  
    return (
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
              <h2 id="league-title">LAN Titles</h2>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>

          <div className={styles.backgroundMidWithBanner}>
              <div className={styles.backgroundImages + ' full-height-wrapper'}>
              <a href="/games/call-of-duty/lans">
                  <img
                    src="https://i.imgur.com/lt94bkC.png"
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
            </div>
            <Footer />

      </div>
    );
}
export default Lans;