import '../CoD/Cod.css'
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Halo_headtohead = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Halo XP Matches. Find free to play head-to-head matches to become better overall at competitive Halo." />
            </Helmet>
        <div>
            <div className='Header-Img-l cod-headtohead-header'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Head-to-Head</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/ugc-scrim'>
                                    <h1 className='Leagueh1 hide-on-mobile'>UGC College Halo Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/head-to-head/ugc-scrim"><img src="https://i.imgur.com/JeMuXtx.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/halo/head-to-head/ugc-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/rec-xp'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Halo Rec League Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/head-to-head/rec-xp"><img src="https://i.imgur.com/6cA46YH.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/halo/head-to-head/rec-xp'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/arena'>
                                    <h1 className='Leagueh1 hide-on-mobile'>The Arena | 8 Mans</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/head-to-head/arena"><img src="https://i.imgur.com/rBPapid.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/halo/head-to-head/arena'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/sauna'>
                                    <h1 className='Leagueh1 hide-on-mobile'>The Sauna Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/head-to-head/sauna"><img src="https://i.imgur.com/Oqt4YIJ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                <a href='/games/halo/head-to-head/sauna'>
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

export default Halo_headtohead;