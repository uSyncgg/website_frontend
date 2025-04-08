import '../Game.css';
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';


const Lol = () => {
  useNavHeight();
    return (
      <div>
        <div className='Header-Img-l lol-general-header-img' />

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4 space-on-bottom" id="bubblel">
                <a href="/games/LoL/lans">
                  <img
                    src="https://i.imgur.com/sXCt646.png"
                    alt="LoL LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubble">
                <a href="/Comingsoon">
                  <img
                    src="https://i.imgur.com/K6PQmyu.png"
                    alt="LoL Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubbler">
                <a href="/games/LoL/leagues">
                  <img
                    src="https://i.imgur.com/p77z4SF.png"
                    alt="LoL Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4 space-on-bottom" id="bubblelb">
                <a href="/games/LoL/wagers">
                  <img
                    src="https://i.imgur.com/OhtUL4E.png"
                    alt="LoL Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="/games/LoL/head-to-head">
                  <img
                    src="https://i.imgur.com/y5W9NXc.png"
                    alt="LoL head-to-head"
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

export default Lol;