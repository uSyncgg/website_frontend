import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_OCE = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="OCE Rocket League Leagues. Oceania server based leagues with team salary caps based on players MMR. Compete in a league that feels like the pro league." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Oceania Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 1 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$5100 Team Salary cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$3100 Team Salary cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 3 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$1300 Team Salary Cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="/games/RocketLeague/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Frontpage_OCE;