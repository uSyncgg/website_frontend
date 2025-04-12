import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Doubles = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/elite'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Elite League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/elite"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1600 - 1799 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                    <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/elite'>
                                        <button type="submit" className='info-button'>More Info</button>
                                    </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/star'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Star League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/star"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1400 - 1599 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/star'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/expert'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Expert League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/expert"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1200 - 1399 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/expert'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontier-doubles-leagues/origin'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Origin League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontier-doubles-leagues/origin"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>0 - 1199 MMR</p>
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
    );
}

export default Frontpage_Doubles;