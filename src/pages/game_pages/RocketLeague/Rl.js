import '../Game.css';
import Footer from '../../../Footer';
import '../CoD/Cod.css';
import useNavHeight from '../../hooks/NavbarHeight';

const Rl = () => {
  useNavHeight();
    return (
      <div>
        {/* <header id="League-header">
          <img
            src="https://i.imgur.com/fomqXSz.png"
            className="Header-Img-l-rl"
          />
        </header> */}
        <div className='Header-Img-l rl-general-header-img' />

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4" id="bubblel">
                <a href="/Comingsoon">
                  <img
                    src="https://i.imgur.com/5ETdmF8.png"
                    alt="RocketLeague LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4" id="bubble">
                <a href="/Comingsoon">
                  <img
                    src="https://i.imgur.com/8ZFHAM6.png"
                    alt="RocketLeague Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubbler">
                <a href="/games/RocketLeague/leagues">
                  <img
                    src="https://i.imgur.com/C2VoFOV.png"
                    alt="RocketLeague Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4" id="bubblelb">
                <a href="/games/RocketLeague/wagers">
                  <img
                    src="https://i.imgur.com/ylkoL6L.png"
                    alt="RocketLeague Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="/games/RocketLeague/head-to-head">
                  <img
                    src="https://i.imgur.com/vC5N7DW.png"
                    alt="RocketLeague head-to-head"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Rl;