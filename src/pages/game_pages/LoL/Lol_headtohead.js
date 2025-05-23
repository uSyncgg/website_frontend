import '../CoD/Cod.css'
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Lol_headtohead = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="League of Legends XP matches and scrims. Find every scrim across the world to ensure you have the highest quality practice." />
            </Helmet>
        <div>
            <div className='Header-Img-l cod-headtohead-header'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Head-to-Head</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/head-to-head/gankster'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gankster GG</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/head-to-head/gankster"><img src="https://i.imgur.com/ljDANVi.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/head-to-head/gankster'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/head-to-head/esport-scrim'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esport Scrim</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/head-to-head/esport-scrim"><img src="https://i.imgur.com/irkzmva.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/head-to-head/esport-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/head-to-head/pracc'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Pracc</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/head-to-head/pracc"><img src="https://i.imgur.com/XERVRrh.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/head-to-head/pracc'>
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

export default Lol_headtohead;