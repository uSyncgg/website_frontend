import '../../Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const CXP_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="College XP league is for colleges in North America. Prove your college is the best in the country." />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">College XP Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-varsity'>
                                    <h1 className='Leagueh1'>Varsity Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cxp-leagues/cxp-varsity"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-varsity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-open'>
                                    <h1 className='Leagueh1'>Open Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cxp-leagues/cxp-open"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-club'>
                                    <h1 className='Leagueh1'>Club Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cxp-leagues/cxp-club"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-club'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className='hr' />

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

export default CXP_Leagues;