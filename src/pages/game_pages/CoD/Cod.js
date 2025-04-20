import '../Game.css';
import { Helmet } from "react-helmet";
import './Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';

const Cod = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Call of Duty leagues, LANs, wagers, head-to-head, and tournaments. Find every type of competition from every site." />
          </Helmet>
      <div className="total-container">
        {/* <header id="League-header">
          <img
            src="https://i.imgur.com/kZaSdKo.png"
            className="Header-Img-l"
          />
        </header> */}
        <div className='Header-Img-l cod-general-header-img'>

        </div>

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4 space-on-bottom" id="bubblel">
                <a href="/games/call-of-duty/lans">
                  <img
                    src="https://i.imgur.com/NXTgpHd.png"
                    alt="Cod LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubble">
                <a href="/tournaments/call-of-duty-tournaments">
                  <img
                    src="https://i.imgur.com/nVx3C4M.png"
                    alt="Cod Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubbler">
                <a href="/games/call-of-duty/leagues">
                  <img
                    src="https://i.imgur.com/Zj3dVpv.png"
                    alt="Cod Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4 space-on-bottom" id="bubblelb">
                <a href="/games/call-of-duty/wagers">
                  <img
                    src="https://i.imgur.com/EgBRBVS.png"
                    alt="Cod Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="/games/call-of-duty/head-to-head">
                  <img
                    src="https://i.imgur.com/CiO5ViA.png"
                    alt="Cod head-to-head"
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

export default Cod;
