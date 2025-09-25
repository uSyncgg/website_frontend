import '../Game.css';
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';

const CS2 = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Counter-Strike 2 leagues, LANs, wagers, head-to-head, and tournaments all in once place. Try the true competitive experience today." />
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
