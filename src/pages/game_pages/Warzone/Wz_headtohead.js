import '../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Wz_headtohead = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Warzone XP Matches from every provider in the globe. Find who is hosting scrims, XPs, and head-to-heads that suit your style." />
            </Helmet>
        <div>
            <div className='Header-Img-l lol-league-header'>
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
                                <a href='/games/warzone/head-to-head/cmg'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/warzone/head-to-head/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/warzone/head-to-head/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/warzone/head-to-head/esport-rivals'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esport Rivals</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/warzone/head-to-head/esport-rivals"><img src="https://i.imgur.com/VvvZFEZ.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/warzone/head-to-head/esport-rivals'>
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

export default Wz_headtohead;