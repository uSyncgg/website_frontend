import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Italian = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Italian Rocket League leagues for your playstyle. Grab your Rocket League teammates and sign up for these leagues today." />
        </Helmet>
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/italian-leagues/serie-a'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Serie A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/italian-leagues/serie-a"><img src="https://i.imgur.com/VjsPbnv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/italian-leagues/serie-a'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/italian-leagues/serie-b'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Serie B League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/italian-leagues/serie-b"><img src="https://i.imgur.com/VjsPbnv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/italian-leagues/serie-b'>
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

export default Frontpage_Italian;