import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Cobalt = () => {
  useNavHeight();
  return (
        <div>
    <div className="Header-Img-l not-verified-banner-img" />

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division1'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 1 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/division1"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Masters</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division1'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division2'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/division2"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 1 - Emerald 1</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division3'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Division 3 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/division3"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Emerald 1 - Plat 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/division3'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/LoL/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_Cobalt;