import styles from '../Home.module.css';
import { Helmet } from "react-helmet";
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
import useNavHeight from './hooks/NavbarHeight';
 
const Leagues = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Find a league to join for competitive esports. With over 200+ leagues we have what you are looking for." />
          </Helmet>
      <div>
          {/* <header id="League-header">
            <img
              src="https://i.imgur.com/fackjly.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">League Titles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </header> */}

          <div className='Header-Img-l league-header-img'>
            <div className="games-leagues-header-title">
              <h1 id="league-title">League Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>
          
          <div className={styles.backgroundMidWithBanner}>
              <div className={styles.backgroundImages}>
              <a href="/games/call-of-duty/leagues">
                  <img
                    src="https://i.imgur.com/gNvoNEo.png"
                    alt="Call of Duty"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/warzone/leagues">
                  <img
                    src="https://i.imgur.com/IBGIbY2.png"
                    alt="Warzone"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>

                <a href="/games/halo/leagues">
                  <img
                    src="https://i.imgur.com/wqKJfEu.png"
                    alt="Halo Infinite"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/LoL/leagues">
                  <img
                    src="https://i.imgur.com/5riYNow.png"
                    alt="League of Legends"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <br className='hide-on-mobile' />
                <br className='hide-on-mobile' />
                <a href="/games/RocketLeague/leagues">
                  <img
                    src="https://i.imgur.com/GJO8JIZ.png"
                    alt="Rocket League"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/Valorant/leagues">
                  <img
                    src="https://i.imgur.com/Gsl3oIp.png"
                    alt="Valorant"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <a href="/games/CS2/leagues">
                  <img
                    src="https://i.imgur.com/60FwDKN.png"
                    alt="Counter-Strike 2"
                    className='home-games-images'
                    // height="12.5rem"
                    // width="12.5rem"
                  />
                </a>
                <hr />
              </div>
              <Footer />
            </div>
      </div>
      </>
    );
}
export default Leagues;