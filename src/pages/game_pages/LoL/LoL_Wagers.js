import '../CoD/Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const LoL_Wagers = () => {
    useNavHeight();
    return (
        <div>
            <div className='Header-Img-l lol-wagers-header'>
                <div className="games-leagues-header-title">
                <h2 id="league-title">Wagers</h2>
                <img
                    src="https://i.imgur.com/eNhKhTI.png"
                    alt="underline"
                    className="Underline-h"
                />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/wagers/dropingaming'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/wagers/dropingaming"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/wagers/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/wagers/dubbz'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Dubbz</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/wagers/dubbz"><img src="https://i.imgur.com/cgPHyyf.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/wagers/dubbz'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/wagers/ewagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/wagers/ewagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/LoL/wagers/ewagers'>
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

export default LoL_Wagers;