import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_hyper = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Hyperfibre leagues based in New Zealand. Compete at a casual or highly competitive level to showcase your Counter-Strike 2 skills." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Hyperfibre Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/hyperfibre-leagues/elite'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Elite Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/hyperfibre-leagues/elite"><img src="https://i.imgur.com/Cx4N8HW.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Elite Division - Competitive</p>
                                <p className='Leaguep hide-on-mobile'>Competitive</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/hyperfibre-leagues/elite'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/leagues/hyperfibre-leagues/social'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Social Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/leagues/hyperfibre-leagues/social"><img src="https://i.imgur.com/Cx4N8HW.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Social Division - Casual</p>
                                <p className='Leaguep hide-on-mobile'>Casual</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/leagues/hyperfibre-leagues/social'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="/games/CS2/leagues">
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

export default Frontpage_hyper;