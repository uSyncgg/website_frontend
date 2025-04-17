import './Cod.css'
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const Cod_Leagues = () => {
    useNavHeight();
    return (
        <div className='total-container'>
            {/* <header id='League-header'>
                <img src="https://i.imgur.com/UfeTySI.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Call of Duty Leagues</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header> */}

            <div className='Header-Img-l lans-img'>
                <div className="games-leagues-header-title">
                <h2 id="league-title">Call of Duty Leagues</h2>
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
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/xp-league-cod'>
                                    <h1 className='Leagueh1 hide-on-mobile'>XP League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/xp-league-cod"><img src="https://i.imgur.com/d4kQBH4.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA/EU</p>
                                <a href='/games/call-of-duty/leagues/xp-league-cod'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/cod-rec-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>COD Rec League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cod-rec-league"><img src="https://i.imgur.com/qbmhh4T.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cod-rec-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/cod-beer-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>COD Beer League (21+)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cod-beer-league"><img src="https://i.imgur.com/GKRvsAM.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cod-beer-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/u18-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>U18 COD League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/u18-league"><img src="https://i.imgur.com/AMzISPh.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                <a href='/games/call-of-duty/leagues/u18-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/united-rogue-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>United Rogue</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/united-rogue-league"><img src="https://i.imgur.com/jZK2DCe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/united-rogue-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/tpc-womens-cod'>
                                    <h1 className='Leagueh1 hide-on-mobile'>TPC Womens COD</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/tpc-womens-cod"><img src="https://i.imgur.com/u9cCMVa.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/tpc-womens-cod'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/fcl'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Female COD League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/fcl"><img src="https://i.imgur.com/SBSXD2X.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/fcl'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/zoned-out'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Zoned Out Gaming League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/zoned-out"><img src="https://i.imgur.com/qiN8RKF.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/zoned-out'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/airforce-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Air Force Gaming League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/airforce-league"><img src="https://i.imgur.com/4o2rJWS.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA/EU/APAC</p>
                                <a href='/games/call-of-duty/leagues/airforce-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/corporate-cod-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Corporate COD League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/corporate-cod-league"><img src="https://i.imgur.com/k63mdno.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/corporate-cod-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/kinetic-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Kinetic League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/kinetic-league"><img src="https://i.imgur.com/zRAMO6t.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/kinetic-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues'>
                                    <h1 className='Leagueh1 hide-on-mobile'>House of Esports Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/House-of-esports-leagues"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                <a href='/games/call-of-duty/leagues/House-of-esports-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-12 col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/ixi-esports'>
                                    <h1 className='Leagueh1 hide-on-mobile'>IXI Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/ixi-esports"><img src="https://i.imgur.com/mVoGJG4.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/ixi-esports'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                       
                       <div>
                        <p className='hr' />
                        <h2 id="league-title1">Collegiate Leagues</h2>                        
                        <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h1'/>
                        <p className='hr' />
                        </div>


                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-leagues'>
                                    <h1 className='Leagueh1 hide-on-mobile'>College XP</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/cxp-leagues/cxp-leagues"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/cxp-leagues/cxp-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/playfly-cod-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Playfly College</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/playfly-cod-league"><img src="https://i.imgur.com/XHCsRTv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/playfly-cod-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                        
                        <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/ccl-league'>
                                    <h1 className='Leagueh1 hide-on-mobile'>College COD</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/ccl-league"><img src="https://i.imgur.com/71EePEn.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='/games/call-of-duty/leagues/ccl-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/ecac'>
                                    <h1 className='Leagueh1 hide-on-mobile'>ECAC Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/ecac"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                <a href='/games/call-of-duty/leagues/ecac'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/call-of-duty/leagues/njcaae'>
                                    <h1 className='Leagueh1 hide-on-mobile'>NJCAAE</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/leagues/njcaae"><img src="https://i.imgur.com/Yer31Qr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                <a href='/games/call-of-duty/leagues/njcaae'>
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

export default Cod_Leagues;