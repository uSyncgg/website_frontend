import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Doubles = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Frontier Double Rocket League leagues. 4 different leagues to choose from based on your MMR. Sign up with your duo today." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Frontier Doubles Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/elite'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Elite League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/elite"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Elite League - 1600 - 1799 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1600 - 1799 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                    <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/elite'>
                                        <button type="submit" className='info-button'>More Info</button>
                                    </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/star'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Star League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/star"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Star League - 1400 - 1599 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1400 - 1599 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/star'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/expert'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Expert League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/expert"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Expert League - 1200 - 1399 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1200 - 1399 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/expert'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/origin'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Origin League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/origin"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Origin League - 0 - 1199 MMR</p>
                                <p className='Leaguep hide-on-mobile'>0 - 1199 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/origin'>
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

export default Frontpage_Doubles;