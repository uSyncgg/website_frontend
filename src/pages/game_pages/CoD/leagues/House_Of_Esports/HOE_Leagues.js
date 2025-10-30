import '../../Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const HOE_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="House of Esports Call of Duty leagues. Amateur and Challenger leagues based on your gameplay skills" />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">House of Esports Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Amateurs League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Amateurs League - All Regions</p>
                                <p className='Leaguep hide-on-mobile'>All Regions</p>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Challengers League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Challengers League - All Regions</p>
                                <p className='Leaguep hide-on-mobile'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers'>
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

export default HOE_Leagues;