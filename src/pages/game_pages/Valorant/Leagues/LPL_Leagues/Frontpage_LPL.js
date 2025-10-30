import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
const Frontpage_LPL = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Let's Play Live (LPL) Valorant Leagues. Sign your Oceania team up today and start in the open division and climb your way all the way to the top division." />
            </Helmet>
        <div>
            <div className="Header-Img-l lpl-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">LPL Leagues</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/gold'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gold Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/gold"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Gold Division League - Invite-Only</p>
                                <p className='Leaguep hide-on-mobile'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/silver'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Silver Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/silver"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Silver Division League - Invite-Only</p>
                                <p className='Leaguep hide-on-mobile'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/silver'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/bronze'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Bronze Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/bronze"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Bronze Division League - Qualified Teams</p>
                                <p className='Leaguep hide-on-mobile'>Qualified Teams</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/bronze'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/open'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Open Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/open"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Open Division League - Open</p>
                                <p className='Leaguep hide-on-mobile'>Open</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/open'>
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

export default Frontpage_LPL;