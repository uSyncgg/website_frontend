import '../CoD/Cod.css';
import Footer from '../../../Footer';
import '../CoD/Cod.css';
import useNavHeight from '../../hooks/NavbarHeight';
const Rl_Wagers = () => {
    useNavHeight();
    return (
        <div>
            <div className='Header-Img-l lans-img'>
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

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/wagers/cmg'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/wagers/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/wagers/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/wagers/dropingaming'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/wagers/dropingaming"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/RocketLeague/wagers/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/wagers/gamersaloon'>
                                    <h1 className='Leagueh1 hide-on-mobile'>GamerSaloon</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/wagers/gamersaloon"><img src="https://i.imgur.com/M8da8S6.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/RocketLeague/wagers/gamersaloon'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/wagers/dubbz'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Dubbz</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/wagers/dubbz"><img src="https://i.imgur.com/cgPHyyf.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/RocketLeague/wagers/dubbz'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/wagers/ewagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/wagers/ewagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='/games/RocketLeague/wagers/ewagers'>
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

export default Rl_Wagers;