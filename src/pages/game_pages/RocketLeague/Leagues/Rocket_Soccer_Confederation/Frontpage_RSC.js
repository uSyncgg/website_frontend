import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_RSC = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Rocket Soccar Confederation leagues. Rocket League leagues that are draft based format in NA and EU. Compete in 3v3 or 2v2 RL leagues and climb to the top." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Rocket Soccar Confederation</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rsc-leagues/3v3-na'>
                                    <h1 className='Leagueh1 hide-on-mobile'>3v3 NA League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rsc-leagues/3v3-na"><img src="https://i.imgur.com/QiNSeyE.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rsc-leagues/3v3-na'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/rsc-leagues/3v3-eu'>
                                    <h1 className='Leagueh1 hide-on-mobile'>3v3 EU League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rsc-leagues/3v3-eu"><img src="https://i.imgur.com/uQgW3Kj.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rsc-leagues/3v3-eu'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rsc-leagues/2v2'>
                                    <h1 className='Leagueh1 hide-on-mobile'>2v2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rsc-leagues/2v2"><img src="https://i.imgur.com/QiNSeyE.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rsc-leagues/2v2'>
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

export default Frontpage_RSC;