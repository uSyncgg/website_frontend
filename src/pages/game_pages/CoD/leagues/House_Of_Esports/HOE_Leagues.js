import '../../Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const HOE_Leagues = () => {
    useNavHeight();
    return (
        <div>
            <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Amateurs League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Challengers League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
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
    );
}

export default HOE_Leagues;