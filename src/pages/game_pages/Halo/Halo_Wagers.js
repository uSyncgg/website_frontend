import '../CoD/Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Halo_Wagers = () => {
    useNavHeight();
    return (
        <div>
            <div className='Header-Img-l halo-wagers-header'>
                <div className="games-leagues-header-title">
                <h2 id="league-title">Halo Leagues</h2>
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
                                <a href='/games/halo/wagers/cmg'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/wagers/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/halo/wagers/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/wagers/oneup'>
                                    <h1 className='Leagueh1 hide-on-mobile'>One Up (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/wagers/oneup"><img src="https://i.imgur.com/wkSz5Le.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/halo/wagers/oneup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/halo/wagers/esport-wagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/halo/wagers/esport-wagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/halo/wagers/esport-wagers'>
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

export default Halo_Wagers;