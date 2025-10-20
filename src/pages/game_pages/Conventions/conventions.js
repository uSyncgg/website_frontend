import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCoverGames';
import '../CoD/Cod.css'
import styles from '../../../Home.module.css';

const Conventions = () => {
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
              <meta name="description" content="League of Legends LANs near you. Find a LAN that is closest to you on our world renown LAN map." />
            </Helmet>

        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden', backgroundColor: 'rgb(49, 49, 49)'  }}>
            <div className={styles.MapWrapper} style={{ position: 'relative' }}>
                <div>
                    <a href='/lans'>
                        <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                    </a>
                </div>

                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=14BPiOYVAOTLrIFgUNrLdViUMRoypuU4&ehbc=2E312F" className='full-map'></iframe>
                <GrayBox />
            </div>
        </div>
        
                <p className='hr' />

        <div className='Background-leagues'>
            <div className='container-fluid'>

                {/* COMMENT BELOW OUT WHEN LANS ARE POSTED, OTHERWISE UNCOMMENT */}
                {/* <div className='white-text'><h1>None Upcoming - Please Check Back Tomorrow</h1></div> */}

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/pdxfall-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>PDXLAN Fall 2025</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/pdxfall-25"><img src="https://i.imgur.com/JlcrVZH.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Ridgefield, WA</p>
                            <a href='/lans/pdxfall-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/lan-all-night-12'>
                                <h1 className='Leagueh1 hide-on-mobile'>LAN All Night 12</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/lan-all-night-12"><img src="https://i.imgur.com/hfacYHq.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Grapevine, TX</p>
                            <a href='/lans/lan-all-night-12'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/emerald-city-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>Emerald City LAN 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/emerald-city-2026"><img src="https://i.imgur.com/tijewTk.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Seattle, WA</p>
                            <a href='/lans/emerald-city-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/dreamhack-atlanta-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>DreamHack Atlanta 25</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/dreamhack-atlanta-25"><img src="https://i.imgur.com/6mNKaHp.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Atlanta, GA</p>
                            <a href='/lans/dreamhack-atlanta-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/magfest-20x6'>
                                <h1 className='Leagueh1 hide-on-mobile'>MAGFest 20X6</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/magfest-20x6"><img src="https://i.imgur.com/5JqCoIB.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>National Harbor, MD</p>
                            <a href='/lans/magfest-20x6'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/weekly-contender-ssbu'>
                                <h1 className='Leagueh1 hide-on-mobile'>The Weekly Contender | SSBU</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/weekly-contender-ssbu"><img src="https://i.imgur.com/tMrloRb.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Tulsa, OK</p>
                            <a href='/lans/weekly-contender-ssbu'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/newengland-collegelan-fall-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>New England College LAN Fall 25</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/newengland-collegelan-fall-25"><img src="https://i.imgur.com/7jBpmTA.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Henniker, NH</p>
                            <a href='/lans/newengland-collegelan-fall-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/dreamhack-birmingham'>
                                <h1 className='Leagueh1 hide-on-mobile'>DreamHack Birmingham</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/dreamhack-birmingham"><img src="https://i.imgur.com/6mNKaHp.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Birmingham, UK</p>
                            <a href='/lans/dreamhack-birmingham'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/florence-festival-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Florence Esports Festival 25</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/florence-festival-25"><img src="https://i.imgur.com/TmtORb5.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Florence, SC</p>
                            <a href='/lans/florence-festival-25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/rmcs-fall-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Rocky Mountain Collegiate Fall Series</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/rmcs-fall-25"><img src="https://i.imgur.com/WaNJjN7.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Lakewood, CO</p>
                            <a href='/lans/rmcs-fall-25'>
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

export default Conventions;
