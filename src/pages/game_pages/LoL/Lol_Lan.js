import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCoverGames';
import '../CoD/Cod.css'
import styles from '../../../Home.module.css';

const Lol_Lan = () => {
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
            {/* <div>
                <a href=''>
                    <button type="submit" className='info-button-lans-lol'>Back to League of Legends</button>
                </a>
                <a href='/lans'>
                    <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                </a>
            </div> */}

            <div className={styles.MapWrapper} style={{ position: 'relative' }}>
                <div>
                    <a href='/games/LoL'>
                        <button type="submit" className='info-button-lans'>Back to LoL</button>
                    </a>
                    <a href='/lans'>
                        <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                    </a>
                </div>
            
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1CFHyDVMbDSwBAX2_cz3KqiCm0UY9aQQ&ehbc=2E312F" className='full-map'></iframe>
                <GrayBox />
            </div>

        </div>

        <div className='Background-leagues'>
            <div className='container-fluid'>
                
                <p className='hr' />

                {/* COMMENT BELOW OUT WHEN LANS ARE POSTED, OTHERWISE UNCOMMENT */}
                {/* <div className='white-text'><h1>None Upcoming - Please Check Back Tomorrow</h1></div> */}

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/heartland-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>Heartland 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/heartland-2026"><img src="https://i.imgur.com/ZRcvLqn.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Manhattan, KS</p>
                            <a href='/lans/heartland-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/volan-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>Volan 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/volan-2026"><img src="https://i.imgur.com/SynVnAn.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Knoxville, TN</p>
                            <a href='/lans/volan-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/macs-spring-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>MACS Spring 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/macs-spring-2026"><img src="https://i.imgur.com/4bddM3N.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Philadelphia, PA</p>
                            <a href='/lans/macs-spring-2026'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/tech-in-action'>
                                <h1 className='Leagueh1 hide-on-mobile'>Tech In Action</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/tech-in-action"><img src="https://i.imgur.com/zD3erMG.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Concord, CA</p>
                            <a href='/lans/tech-in-action'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/rmcs-spring-2026'>
                                <h1 className='Leagueh1 hide-on-mobile'>RMCS Spring 2026</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/rmcs-spring-2026"><img src="https://i.imgur.com/WaNJjN7.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Lakewood, CO</p>
                            <a href='/lans/rmcs-spring-2026'>
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

export default Lol_Lan;
