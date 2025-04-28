import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Frontline_val = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Sign up today for the Frontline Valorant Leagues. In-game rank based leagues for all Valorant esports players. High quality Valorant league for any level player." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Team Frontline Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

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
        </>
    );
}

export default Frontpage_Frontline_val;