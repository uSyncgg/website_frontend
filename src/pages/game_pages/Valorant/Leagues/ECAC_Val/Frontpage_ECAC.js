import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_ECAC = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="ECAC Valorant Leagues. Rank based Valorant leagues for college students and teams across the United States. Enroll today." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">ECAC Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/ecac-leagues/division-a'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/ecac-leagues/division-a"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond - Radiant</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/ecac-leagues/division-a'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/ecac-leagues/division-b'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division B League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/ecac-leagues/division-b"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold - Platinum</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/ecac-leagues/division-b'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/ecac-leagues/division-c'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division C League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/ecac-leagues/division-c"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Iron - Silver</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/ecac-leagues/division-c'>
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

export default Frontpage_ECAC;