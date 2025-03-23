import styles from '../Home.module.css';
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
 
const Leagues = () => {
    return (
      <div>
        <div>
          <header id="League-header">
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
          </header>

          <div className="Background-leagues">
            <div class={styles.backgroundMid}>
              <div className={styles.backgroundImages}>
              <a href="/games/call-of-duty/leagues">
                  <img
                    src="https://i.imgur.com/lt94bkC.png"
                    alt="Call of Duty"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/warzone/leagues">
                  <img
                    src="https://i.imgur.com/IBGIbY2.png"
                    alt="Warzone"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>

                <a href="/games/halo/leagues">
                  <img
                    src="https://i.imgur.com/wqKJfEu.png"
                    alt="Halo Infinite"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/LoL/leagues">
                  <img
                    src="https://i.imgur.com/5riYNow.png"
                    alt="League of Legends"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <br />
                <br />
                <a href="/games/RocketLeague/leagues">
                  <img
                    src="https://i.imgur.com/GJO8JIZ.png"
                    alt="Rocket League"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/Valorant/leagues">
                  <img
                    src="https://i.imgur.com/Gsl3oIp.png"
                    alt="Valorant"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/CS2/leagues">
                  <img
                    src="https://i.imgur.com/60FwDKN.png"
                    alt="Counter-Strike 2"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <hr />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}
export default Leagues;