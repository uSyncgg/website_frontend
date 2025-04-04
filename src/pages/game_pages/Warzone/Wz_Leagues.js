import '../CoD/Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Wz_Leagues = () => {
  useNavHeight();
    return (
      <div>
        <div className='Header-Img-l wz-league-header'>
            <div className="games-leagues-header-title">
            <h2 id="league-title">Warzone Leagues</h2>
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

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="/games/warzone/leagues/airforce">
                    <h1 className="Leagueh1">Air Force Gaming League</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/warzone/leagues/airforce">
                      <img
                        src="https://i.imgur.com/4o2rJWS.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA/EU/APAC</p>
                  <a href="/games/warzone/leagues/airforce">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="/games/warzone/leagues/ghml">
                    <h1 className="Leagueh1">GMHL Gaming</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/warzone/leagues/ghml">
                      <img
                        src="https://i.imgur.com/hDF13fh.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  <a href="/games/warzone/leagues/ghml">
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


              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="/games/warzone/leagues/njcaae">
                    <h1 className="Leagueh1">NJCAAE</h1>
                  </a>
                  <div className="parent">
                    <a href="/games/warzone/leagues/njcaae">
                      <img
                        src="https://i.imgur.com/Yer31Qr.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  <a href="/games/warzone/leagues/njcaae">
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
    );
}

export default Wz_Leagues;