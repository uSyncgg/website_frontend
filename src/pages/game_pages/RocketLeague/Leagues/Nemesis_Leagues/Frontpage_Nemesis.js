import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Nemesis = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Nemesis Rocket League Leagues. With range based MMR leagues this is the perfect opportunity for North American RL players wanted to compete at the next level." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Nemesis Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/titan'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Titan League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/nemesis-leagues/titan"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Titan League - 1790+ MMR</p>
                                <p className='Leaguep hide-on-mobile'>1790+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/titan'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/rival'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Rival League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/nemesis-leagues/rival"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Rival League - 1611 - 1789 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1611 - 1789 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/rival'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/challenger'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Challenger League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/nemesis-leagues/challenger"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Challenger League - 1474 - 1610 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1474 - 1610 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/prospect'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Prospect League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/nemesis-leagues/prospect"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Prospect League - 1316 - 1474 MMR</p>
                                <p className='Leaguep hide-on-mobile'>1316 - 1474 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/prospect'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/novice'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Novice League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/nemesis-leagues/novice"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Novice League - 1315 MMR & Below</p>
                                <p className='Leaguep hide-on-mobile'>1315 MMR & Below</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/nemesis-leagues/novice'>
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

export default Frontpage_Nemesis;