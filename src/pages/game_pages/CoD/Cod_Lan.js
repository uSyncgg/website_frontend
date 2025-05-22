import Footer from '../../../Footer';
import { Helmet } from "react-helmet";
import '../Lan.css';
import React from 'react';
import GrayBox from '../../hooks/MapCoverGames';
import './Cod.css'
import useNavHeight from '../../hooks/NavbarHeight';
import styles from '../../../Home.module.css';

const Cod_Lan = () => {
    useNavHeight();
    const [navHeight, setNavHeight] = React.useState(60); // Default to 60px

    React.useEffect(() => {
        const navbar = document.querySelector('.navbar'); // Adjust based on your class
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        } 
    }, []); 

    return ( 
        <>
            <Helmet>
              <meta name="description" content="Call of Duty LAN tournaments near you. Find the closest Call of Duty LANs to where you live and work. Every LAN going on near you." />
            </Helmet>
        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden', backgroundColor: 'rgb(49, 49, 49)' }}>
            {/* <div>
                <a href='/games/call-of-duty'>
                    <button type="submit" className='info-button-lans'>Back to Call of Duty</button>
                </a>
                <a href='/lans'>
                    <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                </a>
            </div> */}
            <div className={styles.MapWrapper} style={{ position: 'relative' }}>
                <div>
                    <a href='/games/call-of-duty'>
                        <button type="submit" className='info-button-lans'>Back to Call of Duty</button>
                    </a>
                    <a href='/lans'>
                        <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                    </a>
                </div>
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1GEf0IzpwDFmiA-Snc7WsoH_nbqPvNhU&ehbc=2E312F" className='full-map' />
                <GrayBox />
            </div>
        </div>

        <div className='Background-leagues'>
            <div className='container-fluid'>
                
                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/reforged-gaming-4v4'>
                                <h1 className='Leagueh1 hide-on-mobile'>Reforged Gaming 4v4</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/reforged-gaming-4v4"><img src="https://i.imgur.com/xJuJq6u.png" className='league-img' /></a>
                                <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                            </div>
                            <p className='Leaguep'>Charleston, SC</p>
                            <a href='/lans/reforged-gaming-4v4'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/cdl-major-4-open-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>CDL Major 4 Open25</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/cdl-major-4-open-25"><img src="https://i.imgur.com/B2Zx2Vg.png" className='league-img' /></a>
                                <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                            </div>
                            <p className='Leaguep'>Dallas, TX</p>
                            <a href='/lans/cdl-major-4-open-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/rva-gunfight-2025'>
                                <h1 className='Leagueh1 hide-on-mobile'>RVA Gunfight 2025</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/rva-gunfight-2025"><img src="https://i.imgur.com/npSklqh.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Richmond, VA</p>
                            <a href='/lans/rva-gunfight-2025'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/ezone-4k-bo6-lan'>
                                <h1 className='Leagueh1 hide-on-mobile'>EZone $4k BO6 LAN</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/ezone-4k-bo6-lan"><img src="https://i.imgur.com/2lCZf3Y.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Philadelphia, PA</p>
                            <a href='/lans/ezone-4k-bo6-lan'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/shinto-takeover-2025'>
                                <h1 className='Leagueh1 hide-on-mobile'>Shinto Gaming Club Takeover</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/shinto-takeover-2025"><img src="https://i.imgur.com/8kGATCA.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Brooklyn, NY</p>
                            <a href='/lans/shinto-takeover-2025'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/cod-ireland-2025'>
                                <h1 className='Leagueh1 hide-on-mobile'>COD IreLANd 2025</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/cod-ireland-2025"><img src="https://i.imgur.com/3A4LoyH.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Belfast, UK</p>
                            <a href='/lans/cod-ireland-2025'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/battle-for-the-brand'>
                                <h1 className='Leagueh1 hide-on-mobile'>Battle For The Brand</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/battle-for-the-brand"><img src="https://i.imgur.com/x07EXoR.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Kansas City, MO</p>
                            <a href='/lans/battle-for-the-brand'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/cod-bendix-2025'>
                                <h1 className='Leagueh1 hide-on-mobile'>Call of Duty Bendix Cup</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/cod-bendix-2025"><img src="https://i.imgur.com/Qxo26iM.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>South Bend, IN</p>
                            <a href='/lans/cod-bendix-2025'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>


                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/ufgl-bo6-lan-3'>
                                <h1 className='Leagueh1 hide-on-mobile'>UFGL x LevelUp LAN #3</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/ufgl-bo6-lan-3"><img src="https://i.imgur.com/vhA0Ond.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Overland Park, KS</p>
                            <a href='/lans/ufgl-bo6-lan-3'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/texas-battle-bowl-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Texas Battle Bowl</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/texas-battle-bowl-25"><img src="https://i.imgur.com/ijT1Jbg.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Midland, TX</p>
                            <a href='/lans/texas-battle-bowl-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/double-tap-weekly'>
                                <h1 className='Leagueh1 hide-on-mobile'>Double Tap Weekly</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/double-tap-weekly"><img src="https://i.imgur.com/OQCfKiz.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Lakewood, CO</p>
                            <a href='/lans/double-tap-weekly'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/tpc-champs'>
                                <h1 className='Leagueh1 hide-on-mobile'>The Premier Circuit Champs</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/tpc-champs"><img src="https://i.imgur.com/aY0v1e1.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Columbus, OH</p>
                            <a href='/lans/tpc-champs'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

            </div>
        </div>

        
        <Footer />
    </>
    );
}

export default Cod_Lan;