import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_MetaShift = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="MetaShift Leagues are League of Legends leagues with a tier system based on your in-game rank. Experience competitive league today." />
        </Helmet>
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/radon'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Radon League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/radon"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 1</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/radon'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/xenon'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Xenon League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/xenon"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 2</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/xenon'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/krypton'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Krypton League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/krypton"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/krypton'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/argon'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Argon League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/argon"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/argon'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/nitrogen'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Nitrogen League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/nitrogen"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 5</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/nitrogen'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/meta-shift-leagues/neon'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Neon League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/meta-shift-leagues/neon"><img src="https://i.imgur.com/XiFomA7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Tier 6</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/meta-shift-leagues/neon'>
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
        </>
    );
}

export default Frontpage_MetaShift;