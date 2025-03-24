import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Halo_headtohead = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/8Psf9G6.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Head-to-Head</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/ugc-scrim'>
                                    <h1 className='Leagueh1'>UGC College Halo Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/head-to-head/ugc-scrim"><img src="https://i.imgur.com/JeMuXtx.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
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
                                    <h1 className='Leagueh1'>Halo Rec League Scrims</h1>
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
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/head-to-head/arena'>
                                    <h1 className='Leagueh1'>The Arena | 8 Mans</h1>
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
                                    <h1 className='Leagueh1'>The Sauna Scrims</h1>
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
    );
}

export default Halo_headtohead;