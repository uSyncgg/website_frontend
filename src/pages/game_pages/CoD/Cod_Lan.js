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
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1GEf0IzpwDFmiA-Snc7WsoH_nbqPvNhU&ehbc=2E312F" className='full-map' loading='lazy'/>
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
                                <a href="/lans/reforged-gaming-4v4"><img src="https://i.imgur.com/xJuJq6u.png" className='league-img' loading='lazy' /></a>
                                <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Charleston, SC</p>
                            <a href='/lans/reforged-gaming-4v4'>
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
                                <a href="/lans/ezone-4k-bo6-lan"><img src="https://i.imgur.com/2lCZf3Y.png" className='league-img' loading='lazy'/></a>
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
                            <a href='/lans/rva-gunfight-2025'>
                                <h1 className='Leagueh1 hide-on-mobile'>RVA Gunfight 2025</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/rva-gunfight-2025"><img src="https://i.imgur.com/npSklqh.png" className='league-img' loading='lazy' /></a>
                            </div>
                            <p className='Leaguep'>Richmond, VA</p>
                            <a href='/lans/rva-gunfight-2025'>
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
                                <a href="/lans/cod-ireland-2025"><img src="https://i.imgur.com/3A4LoyH.png" className='league-img' loading='lazy'/></a>
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
                                <a href="/lans/battle-for-the-brand"><img src="https://i.imgur.com/x07EXoR.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Kansas City, MO</p>
                            <a href='/lans/battle-for-the-brand'>
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
                                <a href="/lans/texas-battle-bowl-25"><img src="https://i.imgur.com/ijT1Jbg.png" className='league-img' loading='lazy'/></a>
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
                            <a href='/lans/tpc-champs'>
                                <h1 className='Leagueh1 hide-on-mobile'>The Premier Circuit Champs</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/tpc-champs"><img src="https://i.imgur.com/aY0v1e1.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Columbus, OH</p>
                            <a href='/lans/tpc-champs'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/bell-esports-challenge25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Bell Esports Challenge</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/bell-esports-challenge25"><img src="https://i.imgur.com/k0vXVI8.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Toronto, Canada</p>
                            <a href='/lans/bell-esports-challenge25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/dropzone-4v4-5k'>
                                <h1 className='Leagueh1 hide-on-mobile'>DropZone 4v4 $5k</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/dropzone-4v4-5k"><img src="https://i.imgur.com/eqzMcKd.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Lakewood, CO</p>
                            <a href='/lans/dropzone-4v4-5k'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/double-tap-weekly-s25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Double Tap Weekly</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/double-tap-weekly-s25"><img src="https://i.imgur.com/mpWKRNU.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Lakewood, CO</p>
                            <a href='/lans/double-tap-weekly-s25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/indycod-x-yes-gaming'>
                                <h1 className='Leagueh1 hide-on-mobile'>Indy COD x Yes Gaming</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/indycod-x-yes-gaming"><img src="https://i.imgur.com/Z43ttEI.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Fishers, IN</p>
                            <a href='/lans/indycod-x-yes-gaming'>
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