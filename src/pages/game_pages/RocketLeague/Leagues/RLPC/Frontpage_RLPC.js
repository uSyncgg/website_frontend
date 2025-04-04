import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
const Frontpage_RLPC = () => {
    useNavHeight();
    return (
        <div>
            <div className="Header-Img-l rlpc-verified-league" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/major'>
                                    <h1 className='Leagueh1'>Major League</h1>
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

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aaa'>
                                    <h1 className='Leagueh1'>Triple A League</h1>
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

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/aa'>
                                    <h1 className='Leagueh1'>Double A League</h1>
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

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/rlpc-leagues/a'>
                                    <h1 className='Leagueh1'>Single A League</h1>
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
    );
}

export default Frontpage_RLPC;