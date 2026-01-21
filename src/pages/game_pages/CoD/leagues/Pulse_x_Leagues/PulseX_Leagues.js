import '../../Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const PulseX_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Pulse X CoD League is THE Call of Duty league that you and your team has been looking for. Sign up solo or as a team and compete for thousands!" />
              <meta property="og:title" content="Pulse X Leagues | Verified CoD Leagues." />
              <meta property="og:description" content="Play in PulseX's upcoming Leagues. Sign up before December 1st, 2025." />
              <meta property="og:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
              <meta property="og:url" content="https://usync.gg/" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Pulse X Leagues | Verified CoD Leagues." />
              <meta name="twitter:description" content="Play in PulseX's upcoming Leagues. Sign up before December 1st, 2025." />
              <meta name="twitter:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
              <meta name="twitter:site" content="@uSyncGG" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Pulse X Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-premade'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Premade Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-premade"><img src="https://i.imgur.com/4dVJ11u.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Premade Division - NA/EU</p>
                                <p className='Leaguep hide-on-mobile'>NA/EU</p>
                                <a href='/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-premade'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-lowers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Uppers & Lowers Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-lowers"><img src="https://i.imgur.com/4dVJ11u.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Uppers & Lowers Division - NA/EU</p>
                                <p className='Leaguep hide-on-mobile'>NA/EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/leagues/pulse-x-leagues/pulse-x-lowers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="/games/call-of-duty/leagues">
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

export default PulseX_Leagues;
