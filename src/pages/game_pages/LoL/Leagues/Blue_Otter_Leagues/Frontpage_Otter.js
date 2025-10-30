import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
const Frontpage_Otter = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="League of Legends Blue Otter leagues. 6 different leagues to choose from based on your in game rank, try it today." />
        </Helmet>
        <div>
        <div className="Header-Img-l not-verified-banner-img-lans">
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Blue Otter Leagues</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/masters'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Masters League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/masters"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Masters League - 600LP+</p>
                                <p className='Leaguep hide-on-mobile'>600LP+</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/masters'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/diamond'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Diamond League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/diamond"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Diamond League - Diamond 1 cap / One Masters</p>
                                <p className='Leaguep hide-on-mobile'>Diamond 1 cap / One Masters</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/diamond'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/emerald'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Emerald League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/emerald"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Emerald League - Emerald 1 cap / One Diamond 4</p>
                                <p className='Leaguep hide-on-mobile'>Emerald 1 cap / One Diamond 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/emerald'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/plat'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Platinum League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/plat"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Platinum League - Platinum 1 cap / One Emerald 4</p>
                                <p className='Leaguep hide-on-mobile'>Platinum 1 cap / One Emerald 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/plat'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/gold'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Gold League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/gold"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Gold League - Gold 1 cap / One Platinum 4</p>
                                <p className='Leaguep hide-on-mobile'>Gold 1 cap / One Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/draft'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/draft"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Draft League - Platinum 4 - Diamond 1</p>
                                <p className='Leaguep hide-on-mobile'>Platinum 4 - Diamond 1</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/draft'>
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

export default Frontpage_Otter;