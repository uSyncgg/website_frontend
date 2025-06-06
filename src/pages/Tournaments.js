import styles from '../Home.module.css';
import { Helmet } from "react-helmet";
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
import useNavHeight from './hooks/NavbarHeight';

const Tournaments = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="The one-stop shop for every single tournament ongoing for your esports game. Save time searching spend time playing." />
          </Helmet>
      <div>
        <div>
          {/* <header id="League-header">
            <img
              src="https://i.imgur.com/6nqLPyu.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">Tournament Titles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </header> */}

          <div className='Header-Img-l tournaments-header-img'>
            <div className="games-leagues-header-title">
              <h1 id="league-title">Tournament Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>

          <div className="Background-leagues">
            <div class={styles.backgroundMid}>
              <div className={styles.backgroundImages + ' full-height-wrapper'}>
                <a href="/tournaments/call-of-duty-tournaments">
                  <img
                    src="https://i.imgur.com/lt94bkC.png"
                    alt="Call of Duty"
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
      </>
    );
}
export default Tournaments;