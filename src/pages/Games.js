import styles from '../Home.module.css';
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';
import React from 'react';
import useNavHeight from './hooks/NavbarHeight';

const Games = () => {
  // const [navHeight, setNavHeight] = React.useState(4); // Default to 4rem (adjust as needed)

  // React.useEffect(() => {
  //     const updateNavHeight = () => {
  //         const navbar = document.querySelector('.navbar');
  //         if (navbar) {
  //             const navHeightInPx = navbar.offsetHeight;
  //             const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // Get base rem value
  //             const navHeightInRem = navHeightInPx / rootFontSize; // Convert px to rem
  //             setNavHeight(navHeightInRem);
  //             document.documentElement.style.setProperty('--nav-height', `${navHeightInRem}rem`);
  //         }
  //     };

  //     updateNavHeight();
  //     window.addEventListener("resize", updateNavHeight); // Update on window resize

  //     return () => window.removeEventListener("resize", updateNavHeight);
  // }, []);
    
    // console.log(navHeight)
    useNavHeight();
    return (
      <div>
        <div>
          {/* <header id="League-header">
            <img
              src="https://i.imgur.com/S9U4H7T.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">uSync Titles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </header> */}

          <div className='Header-Img-l games-img'>
            
          {/* <img
              src="https://i.imgur.com/S9U4H7T.png"
              className="Header-Img-l"
            /> */}
            <div className="games-leagues-header-title">
            <h2 id="league-title">uSync Titles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </div>

          <div className="Background-leagues">
            <div className={styles.backgroundMid}>
              <div className={styles.backgroundImages}>
              <a href="/games/call-of-duty">
                  <img
                    src="https://i.imgur.com/lt94bkC.png"
                    alt="Call of Duty"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/warzone">
                  <img
                    src="https://i.imgur.com/IBGIbY2.png"
                    alt="Warzone"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>

                <a href="/games/halo">
                  <img
                    src="https://i.imgur.com/wqKJfEu.png"
                    alt="Halo Infinite"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/LoL">
                  <img
                    src="https://i.imgur.com/5riYNow.png"
                    alt="League of Legends"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <br />
                <br />
                <a href="/games/RocketLeague">
                  <img
                    src="https://i.imgur.com/GJO8JIZ.png"
                    alt="Rocket League"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/Valorant">
                  <img
                    src="https://i.imgur.com/Gsl3oIp.png"
                    alt="Valorant"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/CS2">
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
export default Games;