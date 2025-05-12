import '../../../CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
const Frontpage_Aegis = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Aegis League of Legends leagues. Enroll today and meet new friends while competing for large cash prizes." />
            </Helmet>
        <div>
      <div className="Header-Img-l aegis-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Aegis Leagues</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
            

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/aegis-leagues/champ'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Champions League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/aegis-leagues/champ"><img src="https://i.imgur.com/iy67hgo.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Uncapped</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/aegis-leagues/champ'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/aegis-leagues/marauder'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Marauder League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/aegis-leagues/marauder"><img src="https://i.imgur.com/iy67hgo.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Master 600LP cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/aegis-leagues/marauder'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/aegis-leagues/defenders'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Defenders League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/aegis-leagues/defenders"><img src="https://i.imgur.com/iy67hgo.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>100LP cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/aegis-leagues/defenders'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/aegis-leagues/executioners'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Executioners League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/aegis-leagues/executioners"><img src="https://i.imgur.com/iy67hgo.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/aegis-leagues/executioners'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                                <a href='/games/LoL/leagues/aegis-leagues/protectors'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Protectors League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/aegis-leagues/protectors"><img src="https://i.imgur.com/iy67hgo.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Emerald 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/aegis-leagues/protectors'>
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

export default Frontpage_Aegis;