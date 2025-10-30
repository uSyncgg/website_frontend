import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Cobalt = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Cobalt Winds (CWL) League of Legends leagues. EUW leagues for your rank. Find your league to enter into." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">CWL Divisions</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-ascend'>
                                    <h1 className='Leagueh1 hide-on-mobile'>CWL Ascend</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/cwl-ascend"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>CWL Ascend - 750 LP Individual Cap</p>
                                <p className='Leaguep hide-on-mobile'>750 LP Individual Cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-ascend'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-defy'>
                                    <h1 className='Leagueh1 hide-on-mobile'>CWL Defy</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/cwl-defy"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>CWL Defy - 500 LP Individual Cap</p>
                                <p className='Leaguep hide-on-mobile'>500 LP Individual Cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-defy'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-rise'>
                                    <h1 className='Leagueh1 hide-on-mobile'>CWL Rise</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/cobalt-winds-leagues/cwl-rise"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>CWL Rise - 100 LP Individual Cap</p>
                                <p className='Leaguep hide-on-mobile'>100 LP Individual Cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/cobalt-winds-leagues/cwl-rise'>
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
        </>
    );
}

export default Frontpage_Cobalt;