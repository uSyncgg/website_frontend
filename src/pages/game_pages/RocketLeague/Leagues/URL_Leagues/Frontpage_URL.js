import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_URL = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Discover competitive Rocket League leagues on uSync. Join draft-based 2v2 and 3v3 leagues with over 10 MMR divisions: Play your rank, climb the leaderboards, and secure your spot before sign-ups close." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Ultimate Rocket Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/url-leagues/2s'>
                                    <h1 className='Leagueh1 hide-on-mobile'>2v2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/url-leagues/2s"><img src="https://i.imgur.com/MAt6qsf.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>2v2 League - Draft Format</p>
                                <p className='Leaguep hide-on-mobile'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/url-leagues/2s'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/url-leagues/3s'>
                                    <h1 className='Leagueh1 hide-on-mobile'>3v3 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/url-leagues/3s"><img src="https://i.imgur.com/MAt6qsf.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>3v3 League - Draft Format</p>
                                <p className='Leaguep hide-on-mobile'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/url-leagues/3s'>
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

export default Frontpage_URL;
