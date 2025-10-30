import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';

const Frontpage_Risen = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Risen leagues are League of Legends leagues with huge prize pools and a super competitive environment. Sign yourself or your team up today." />
            </Helmet>
        <div>
            <div className="Header-Img-l risen-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Risen Leagues</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/risen-leagues/champions'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Champions League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/risen-leagues/champions"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Champions League - Must Qualify</p>
                                <p className='Leaguep hide-on-mobile'>Must Qualify</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/risen-leagues/champions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/risen-leagues/dominate'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Dominate League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/risen-leagues/dominate"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Dominate League - Diamond 1 cap</p>
                                <p className='Leaguep hide-on-mobile'>Diamond 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/risen-leagues/dominate'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/risen-leagues/unstoppable'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Unstoppable League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/risen-leagues/unstoppable"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Unstoppable League - Emerald 1 cap</p>
                                <p className='Leaguep hide-on-mobile'>Emerald 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/risen-leagues/unstoppable'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/risen-leagues/rampage'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Rampage League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/risen-leagues/rampage"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Rampage League - Emerald 4 cap</p>
                                <p className='Leaguep hide-on-mobile'>Emerald 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/risen-leagues/rampage'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/risen-leagues/draft'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/risen-leagues/draft"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep hide-on-pc'>Draft League - Account Level 100</p>
                                <p className='Leaguep hide-on-mobile'>Account Level 100</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/risen-leagues/draft'>
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

export default Frontpage_Risen;