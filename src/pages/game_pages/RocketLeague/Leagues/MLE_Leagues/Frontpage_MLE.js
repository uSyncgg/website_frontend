import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_MLE = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/mle-leagues/premier'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Premier League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/mle-leagues/premier"><img src="https://i.imgur.com/1ouD021.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1651 - 1900 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/mle-leagues/premier'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/mle-leagues/master'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Master League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/mle-leagues/master"><img src="https://i.imgur.com/44UEg5N.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1451 - 1650 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/mle-leagues/master'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/mle-leagues/champ'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Champion League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/mle-leagues/champ"><img src="https://i.imgur.com/U3PRmzs.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1251 - 1450 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/mle-leagues/champ'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/mle-leagues/academy'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Academy League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/mle-leagues/academy"><img src="https://i.imgur.com/6Fzq2oe.jpg" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1000 - 1250 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/mle-leagues/academy'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/mle-leagues/foundation'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Foundation League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/mle-leagues/foundation"><img src="https://i.imgur.com/acXiAPL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>0 - 1050 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/mle-leagues/foundation'>
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
    );
}

export default Frontpage_MLE;