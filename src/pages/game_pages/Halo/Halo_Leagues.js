import '../CoD/Cod.css'
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Halo_Leagues = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Halo esports leagues. Find all of the Halo leagues happening in one place. Find your event today." />
          </Helmet>
      <div>
        <div className='Header-Img-l halo-league-header'>
                <div className="games-leagues-header-title">
                <h1 id="league-title">Halo Leagues</h1>
                <img
                    src="https://i.imgur.com/eNhKhTI.png"
                    alt="underline"
                    className="Underline-h"
                />
                </div>
            </div>

        <div className="Background-leagues">
          <div className="container-fluid">
            <div className="row">

            <div className='col-12 col-lg-6 space-on-bottom-mobile'>
            <div className="league">
                  <a href="/games/halo/leagues/halo-rec-league">
                    <h1 className="Leagueh1 hide-on-mobile">Halo Rec League</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/halo/leagues/halo-rec-league">
                      <img
                        src="https://i.imgur.com/6cA46YH.png"
                        className="league-img"
                      />
                    </a>
                    <a href="/more/verification">
                      <img
                        src="https://i.imgur.com/PCHIHQB.png"
                        title="uSync Verified"
                        className="over-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  <a href="/games/halo/leagues/halo-rec-league">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

            <div className='col-12 col-lg-6 bottom-card'>
            <div className="league">
                  <a href="/games/halo/leagues/ascending-baseline">
                    <h1 className="Leagueh1 hide-on-mobile">Ascending Baseline</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/halo/leagues/ascending-baseline">
                      <img
                        src="https://i.imgur.com/W2CJtZK.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  <a href="/games/halo/leagues/ascending-baseline">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />

              <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                <div className="league">
                  <a href="/games/halo/leagues/halo-agent">
                    <h1 className="Leagueh1 hide-on-mobile">Halo Agent</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/halo/leagues/halo-agent">
                      <img
                        src="https://i.imgur.com/bHzfdu8.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">All Regions</p>
                  <a href="/games/halo/leagues/halo-agent">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <div>
                
                <p className="hr" />
                <h2 id="league-title1">Collegiate Leagues</h2>
                <img
                  src="https://i.imgur.com/eNhKhTI.png"
                  alt="underline"
                  className="Underline-h1"
                />
                <p className="hr" />
              </div>

              <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
              <div className="league">
                  <a href="/games/halo/leagues/ugc-halo">
                    <h1 className="Leagueh1 hide-on-mobile">College Halo</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/halo/leagues/ugc-halo">
                      <img
                        src="https://i.imgur.com/JeMuXtx.png"
                        className="league-img"
                      />
                    </a>
                    <a href="/more/verification">
                      <img
                        src="https://i.imgur.com/PCHIHQB.png"
                        title="uSync Verified"
                        className="over-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  <a href="/games/halo/leagues/ugc-halo">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="hr" />
                <h2 id="league-title1">High School Leagues</h2>
                <img
                  src="https://i.imgur.com/eNhKhTI.png"
                  alt="underline"
                  className="Underline-h1"
                />
                <p className="hr" />
              </div>
              <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
              <div className="league">
                  <a href="/games/halo/leagues/hsel">
                    <h1 className="Leagueh1 hide-on-mobile">High School Esports League</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/halo/leagues/hsel">
                      <img
                        src="https://i.imgur.com/fYpPNR1.png"
                        className="league-img"
                      />
                    </a>
                    <a href="/more/verification">
                      <img
                        src="https://i.imgur.com/PCHIHQB.png"
                        title="uSync Verified"
                        className="over-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  <a href="/games/halo/leagues/hsel">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
}

export default Halo_Leagues;