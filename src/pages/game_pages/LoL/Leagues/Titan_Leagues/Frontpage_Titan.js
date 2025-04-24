import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';

const Frontpage_Titan = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Titan League of Legends Leagues. Find a league from a reputable provider that suits not only your rank but your schedule." />
            </Helmet>
        <div>
            <div className="Header-Img-l titan-verified-league" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/immortal'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Immortal</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/immortal"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>600LP cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/immortal'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/vanquisher'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Vanquisher</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/vanquisher"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>M100 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/vanquisher'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/eternal'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Eternal</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/eternal"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/eternal'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/conqueror'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Conqueror</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/conqueror"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/conqueror'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                        
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/divinity'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Divinity</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/divinity"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Emerald 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/divinity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                    <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/titan-leagues/gladiator'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gladiator</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/titan-leagues/gladiator"><img src="https://i.imgur.com/cB4ptXT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/titan-leagues/gladiator'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <p className='hr' />

                    <div className="league-back-button-container">
              <a href="/games/LoL/leagues">
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

export default Frontpage_Titan;