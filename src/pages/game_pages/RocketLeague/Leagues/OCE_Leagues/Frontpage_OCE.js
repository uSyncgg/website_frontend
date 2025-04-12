import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_OCE = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
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

                        <div className='col-lg-6'>
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

                        <div className='col-lg-6'>
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
    );
}

export default Frontpage_OCE;