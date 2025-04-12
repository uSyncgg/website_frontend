import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Frontline_val = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/frontline-leagues/prime'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Prime League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/frontline-leagues/prime"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/frontline-leagues/prime'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/frontline-leagues/academy'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Academy League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/frontline-leagues/academy"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold & Below</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/frontline-leagues/academy'>
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

export default Frontpage_Frontline_val;