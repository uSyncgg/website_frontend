import '../Game.css';
import { Helmet } from "react-helmet";
import '../CoD/Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';


const Halo = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Halo and Halo Infinite LANs, leagues, wagers, tournaments, and head-to-head matches from across the globe. Find your next event today." />
          </Helmet>
      <div>
        <div className='Header-Img-l halo-general-header-img' />

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4 space-on-bottom" id="bubblel">
                <a href="/games/halo/lans">
                  <img
                    src="https://i.imgur.com/5JagjfE.png"
                    alt="Halo LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubble">
                <a href="/Comingsoon">
                  <img
                    src="https://i.imgur.com/XcbF4hG.png"
                    alt="Halo Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4 space-on-bottom" id="bubbler">
                <a href="/games/halo/leagues">
                  <img
                    src="https://i.imgur.com/oq9dG7T.png"
                    alt="Halo Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4 space-on-bottom" id="bubblelb">
                <a href="/games/halo/wagers">
                  <img
                    src="https://i.imgur.com/aXgvEAv.png"
                    alt="Halo Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="/games/halo/head-to-head">
                  <img
                    src="https://i.imgur.com/UC6wGwa.png"
                    alt="Halo head-to-head"
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

export default Halo;
