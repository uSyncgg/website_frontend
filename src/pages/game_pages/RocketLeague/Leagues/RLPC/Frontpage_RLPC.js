import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
const Frontpage_RLPC = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="RLPC Leagues are the #1 North American Competitive Draft League for all Rocket League Players. With MMR based leagues and live streamed matches you won't want to miss this." />
            </Helmet>
        <div>
            <div className="Header-Img-l rlpc-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">RLPC Leagues</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/major'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Major League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rlpc-leagues/major"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1800 MMR & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/major'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aaa'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Triple A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rlpc-leagues/aaa"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1575-1799 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aaa'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aa'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Double A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rlpc-leagues/aa"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1350-1574 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aa'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/a'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Single A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/rlpc-leagues/a"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1021-1349 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/a'>
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

export default Frontpage_RLPC;