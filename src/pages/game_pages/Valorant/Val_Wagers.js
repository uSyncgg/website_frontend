import '../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Val_Wagers = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Valorant Wagers from every wager site out there. Play Valorant for $ and a chance to prove yourself in these head-to-head wager matches." />
            </Helmet>
        <div>
            <div className='Header-Img-l cod-headtohead-header'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Wagers</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/Valorant/wagers/dropingaming'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/wagers/dropingaming"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/Valorant/wagers/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/Valorant/wagers/ewagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/wagers/ewagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/Valorant/wagers/ewagers'>
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

export default Val_Wagers;