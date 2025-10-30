import '../../Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const Purge_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Purge CoD League is THE Call of Duty league that you and your team has been looking for. Sign up solo or as a team and compete for thousands!" />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Purge CoD Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/purge-cod-leagues/purge-premade'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Premade Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/purge-cod-leagues/purge-premade"><img src="https://i.imgur.com/4dVJ11u.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Premade Division - NA/EU</p>
                                <p className='Leaguep hide-on-mobile'>NA/EU</p>
                                <a href='/games/call-of-duty/leagues/purge-cod-leagues/purge-premade'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/purge-cod-leagues/purge-lowers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Uppers & Lowers Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/purge-cod-leagues/purge-lowers"><img src="https://i.imgur.com/4dVJ11u.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Uppers & Lowers Division - NA/EU</p>
                                <p className='Leaguep hide-on-mobile'>NA/EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/leagues/purge-cod-leagues/purge-lowers'>
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

export default Purge_Leagues;