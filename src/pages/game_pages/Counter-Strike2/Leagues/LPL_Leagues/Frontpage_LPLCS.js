import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_LPLCS = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Let's Play Live (LPL) CS2 leagues are where you can start in the open division and move all the way to the gold division. Join today." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">LPL Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-gold'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gold Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/lpl-leagues/lpl-gold"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-silver'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Silver Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/lpl-leagues/lpl-silver"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-silver'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-bronze'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Bronze Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/lpl-leagues/lpl-bronze"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Qualified Teams</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-bronze'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-open'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Open Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/lpl-leagues/lpl-open"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Open</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/lpl-leagues/lpl-open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/CS2/leagues">
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

export default Frontpage_LPLCS;