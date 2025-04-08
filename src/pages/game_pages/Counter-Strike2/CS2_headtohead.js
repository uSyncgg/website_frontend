import '../CoD/Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const CS2_headtohead = () => {
    useNavHeight();
    return (
        <div>
            <div className='Header-Img-l cs2-h2h-header'>
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
                                <a href='/games/CS2/head-to-head/faceit'>
                                    <h1 className='Leagueh1 hide-on-mobile'>FACEIT</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/head-to-head/faceit"><img src="https://i.imgur.com/4GwagUk.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/head-to-head/faceit'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/CS2/head-to-head/pracc'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Pracc</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/head-to-head/pracc"><img src="https://i.imgur.com/XERVRrh.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/head-to-head/pracc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/CS2/head-to-head/esport-scrim'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esport Scrim</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/head-to-head/esport-scrim"><img src="https://i.imgur.com/KIPClg9.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/head-to-head/esport-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/CS2/head-to-head/ckras'>
                                    <h1 className='Leagueh1 hide-on-mobile'>CKRAS</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/head-to-head/ckras"><img src="https://i.imgur.com/ry9oAAw.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/head-to-head/ckras'>
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

export default CS2_headtohead;