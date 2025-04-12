import './Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Cod_headtohead = () => {
    useNavHeight();
    return (
        <div>
            {/* <header id='League-header'>
                <img src="https://i.imgur.com/8Psf9G6.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Head-to-Head</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header> */}

            <div className='Header-Img-l cod-headtohead-header'>
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Head-to-Head</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/head-to-head/cmg'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/head-to-head/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/head-to-head/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/head-to-head/eagent'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esports Agent</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/head-to-head/eagent"><img src="https://i.imgur.com/mued0Qd.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/head-to-head/eagent'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/head-to-head/erivals'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esport Rivals</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/head-to-head/erivals"><img src="https://i.imgur.com/VvvZFEZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/head-to-head/erivals'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/head-to-head/arena'>
                                    <h1 className='Leagueh1 hide-on-mobile'>The Arena</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/head-to-head/arena"><img src="https://i.imgur.com/rBPapid.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/head-to-head/arena'>
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

export default Cod_headtohead;