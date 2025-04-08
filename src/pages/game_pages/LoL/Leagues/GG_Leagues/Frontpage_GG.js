import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_GG = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/gg-leagues/division-a'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/gg-leagues/division-a"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/gg-leagues/division-a'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/gg-leagues/division-b'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division B League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/gg-leagues/division-b"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/gg-leagues/division-b'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/gg-leagues/division-c'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division C League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/gg-leagues/division-c"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/gg-leagues/division-c'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/LoL/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_GG;