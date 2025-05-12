import '../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Val_headtohead = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Valorant XP and scrim matches. Find your most competitive scrim and get ranked based on your record. Practice your skills and improve your team today." />
            </Helmet>
        <div>
            <div className='Header-Img-l rl-h2h-header-img'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Head-to-Head</h1>
                    <img
                    src="https://i.imgur.com/eNhKhTI.png"
                    alt="underline"
                    className="Underline-h"
                    />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/head-to-head/gankster'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gankster GG</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/head-to-head/gankster"><img src="https://i.imgur.com/ljDANVi.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/head-to-head/gankster'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/head-to-head/esport-scrim'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esport Scrim</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/head-to-head/esport-scrim"><img src="https://i.imgur.com/irkzmva.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/head-to-head/esport-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/head-to-head/dropingaming'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/head-to-head/dropingaming"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/Valorant/head-to-head/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/head-to-head/college-hub'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Collegiate Valorant Hub Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/head-to-head/college-hub"><img src="https://i.imgur.com/InYxRbE.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/Valorant/head-to-head/college-hub'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/Valorant/head-to-head/pracc'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Pracc</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/head-to-head/pracc"><img src="https://i.imgur.com/jqe9CCc.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/Valorant/head-to-head/pracc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Val_headtohead;