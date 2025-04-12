import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Playfly = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/playfly-leagues/varsity'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Varsity League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/playfly-leagues/varsity"><img src="https://i.imgur.com/XHCsRTv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/playfly-leagues/varsity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/playfly-leagues/open'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Open League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/playfly-leagues/open"><img src="https://i.imgur.com/XHCsRTv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold & Below</p>
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
    );
}

export default Frontpage_Playfly;