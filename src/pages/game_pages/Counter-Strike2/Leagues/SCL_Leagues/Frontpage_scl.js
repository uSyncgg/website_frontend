import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_scl = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="SCL CS2 leagues and practice scrims are for Counter-Strike 2 players looking to make money and improve their game." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">SCL Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>
            
            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/scl-leagues/challenger'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Challenger Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/scl-leagues/challenger"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Challenger Division - Highest Division</p>
                                <p className='Leaguep hide-on-mobile'>Highest Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/scl-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/scl-leagues/masters'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Masters Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/scl-leagues/masters"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Masters Division - High-Tier Division</p>
                                <p className='Leaguep hide-on-mobile'>High-Tier Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/scl-leagues/masters'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/scl-leagues/intermediate'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Intermediate Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/scl-leagues/intermediate"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Intermediate Division - Mid-Tier Division</p>
                                <p className='Leaguep hide-on-mobile'>Mid-Tier Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/scl-leagues/intermediate'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/scl-leagues/public'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Public Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/scl-leagues/public"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Public Division - Open Division</p>
                                <p className='Leaguep hide-on-mobile'>Open Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/scl-leagues/public'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/CS2/leagues">
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

export default Frontpage_scl;