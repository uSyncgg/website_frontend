import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
const AB_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Ascending Baseline Leagues. Two different leagues for Halo players looking to play more than just ranked play - win cash today." />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Ascending Baseline Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/halo/leagues/ascending-baseline/ab'>
                                    <h1 className='Leagueh1'>AB League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/leagues/ascending-baseline/ab"><img src="https://i.imgur.com/W2CJtZK.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Premade Format</p>
                                <a href='/games/halo/leagues/ascending-baseline/ab'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/halo/leagues/ascending-baseline/pandemonium-games'>
                                    <h1 className='Leagueh1'>Pandemonium Games League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/leagues/ascending-baseline/pandemonium-games"><img src="https://i.imgur.com/W2CJtZK.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                <a href='/games/halo/leagues/ascending-baseline/pandemonium-games'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                   </div>

                    <p className='hr' />

                    <div className="league-back-button-container">
              <a href="/games/halo/leagues">
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

export default AB_Leagues;