mport '../Game.css';
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';

const CS2 = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <title>Counter-Strike 2 | Leagues, Wagers & Tournaments | uSync</title>
        <meta name="description" content="Find Counter-Strike 2 leagues, wagers, and head-to-heads all in one place. The competitive CS2 experience starts here." />
        <meta property="og:title" content="Play Counter-Strike 2 Competitively | uSync" />
        <meta property="og:description" content="Join CS2 leagues, wagers, and head-to-heads. Your next competitive CS2 match starts on uSync." />
        <meta property="og:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
        <meta property="og:url" content="https://usync.gg/games/CS2" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Competitive CS2 Matches | uSync" />
        <meta name="twitter:description" content="Browse CS2 events including leagues, wagers, and head-to-heads. Get active on uSync." />
        <meta name="twitter:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
          </Helmet>
      <div className="total-container">
        <div className='Header-Img-l cs2-general-header-img' />

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4 space-on-bottom" id="bubblel">
              <a href="/Comingsoon">
              <img
                    src="https://i.imgur.com/ciqy3Bd.png"
                    alt="CS2 LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubble">
              <a href="/Comingsoon">
              <img
                    src="https://i.imgur.com/ugKIhLq.png"
                    alt="CS2 Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubbler">
                <a href="/games/CS2/leagues">
                  <img
                    src="https://i.imgur.com/gE6ZfqX.png"
                    alt="CS2 Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4 space-on-bottom" id="bubblelb">
                <a href="/games/CS2/wagers">
                  <img
                    src="https://i.imgur.com/SzMtvPy.png"
                    alt="CS2 Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="/games/CS2/head-to-head">
                  <img
                    src="https://i.imgur.com/b9B93ig.png"
                    alt="CS2 head-to-head"
                    className="blockimg"
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

export default CS2;
