import '../../Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
const LCL_Leagues = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Fun but competitive Call of Duty league for free agents that are looking for a draft based league with a cash prize and playoffs." />
              <meta property="og:title" content="Lockdown COD Leagues | Verified CoD Leagues." />
              <meta property="og:description" content="Play in LCL's upcoming Leagues. Sign up this winter." />
              <meta property="og:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
              <meta property="og:url" content="https://usync.gg/" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Lockdown Leagues | Verified CoD Leagues." />
              <meta name="twitter:description" content="Play in LCL's upcoming Leagues. Sign up this winter." />
              <meta name="twitter:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
              <meta name="twitter:site" content="@uSyncGG" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Lockdown COD Leagues (LCL)</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/legends'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Legends League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/lockdowncl-leagues/legends"><img src="https://i.imgur.com/MQkAGHe.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Legends League - Crim 3 & Above</p>
                                <p className='Leaguep hide-on-mobile'>Crim 3 & Above</p>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/legends'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/uppers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Uppers League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/lockdowncl-leagues/uppers"><img src="https://i.imgur.com/MQkAGHe.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Uppers League - Diamond 2 - Crim 2</p>
                                <p className='Leaguep hide-on-mobile'>Diamond 2 - Crim 2</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/uppers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/lowers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Lowers League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/lockdowncl-leagues/lowers"><img src="https://i.imgur.com/MQkAGHe.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Lowers League - Diamond 1 & Below</p>
                                <p className='Leaguep hide-on-mobile'>Diamond 1 & Below</p>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/lowers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/womens'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Womens League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/lockdowncl-leagues/womens"><img src="https://i.imgur.com/MQkAGHe.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Womens League - All Skill Levels</p>
                                <p className='Leaguep hide-on-mobile'>All Skill Levels</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/leagues/lockdowncl-leagues/womens'>
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

export default LCL_Leagues;
