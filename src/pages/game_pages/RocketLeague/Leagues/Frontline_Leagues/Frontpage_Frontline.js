import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Frontline = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Team Frontline Rocket League leagues. All the way from 0 - 1700+ MMR anyone can compete. Find what league fits you today." />
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
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/champ'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Champ League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/champ"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1700+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/champ'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/vanguard'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Vanguard League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/vanguard"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1500-1699 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/vanguard'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/challenger'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Challenger League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/challenger"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1300 - 1499 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/prospect'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Prospect League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/prospect"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1299 MMR and Lower</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/prospect'>
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

export default Frontpage_Frontline;