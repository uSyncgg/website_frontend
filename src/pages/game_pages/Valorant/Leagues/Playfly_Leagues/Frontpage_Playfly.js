import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Playfly = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Playfly Valorant Collegiate Leagues. College ranked based leagues for all players. Massive prize pools and the chance to prove your school is the best." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Playfly Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/playfly-leagues/varsity'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Varsity League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/playfly-leagues/varsity"><img src="https://i.imgur.com/XHCsRTv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Varsity League - Platinum & Above</p>
                                <p className='Leaguep hide-on-mobile'>Platinum & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/playfly-leagues/varsity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/leagues/playfly-leagues/open'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Open League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/playfly-leagues/open"><img src="https://i.imgur.com/XHCsRTv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Open League - Gold & Below</p>
                                <p className='Leaguep hide-on-mobile'>Gold & Below</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/playfly-leagues/open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/Valorant/leagues">
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

export default Frontpage_Playfly;