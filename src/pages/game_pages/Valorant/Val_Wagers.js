import '../CoD/Cod.css';
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Val_Wagers = () => {
    useNavHeight();
    return (
        <div>
            <div className='Header-Img-l cod-headtohead-header'>
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Wagers</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/wagers/dropingaming'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/wagers/dropingaming"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/Valorant/wagers/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/wagers/ewagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/wagers/ewagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/Valorant/wagers/ewagers'>
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

export default Val_Wagers;