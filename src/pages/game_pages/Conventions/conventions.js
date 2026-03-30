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
                            <a href='/lans/immersecon-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>ImmerseCon 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/immersecon-2026"><img src="https://i.imgur.com/fwRdpTT.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Richmond, VA</p>
                            <a href='/lans/immersecon-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/fortlan-spring-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>FortLAN Spring 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/fortlan-spring-2026"><img src="https://i.imgur.com/W1iIUMc.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Fort Wayne, IN</p>
                            <a href='/lans/fortlan-spring-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/lan-all-night-spring-26'>
                                <h1 className='Leagueh1 hide-on-mobile'>LAN All Night</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/lan-all-night-spring-26"><img src="https://i.imgur.com/JYplRtG.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Grapevine, TX</p>
                            <a href='/lans/lan-all-night-spring-26'>
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
