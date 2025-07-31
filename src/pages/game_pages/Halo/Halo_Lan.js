import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCoverGames';
import '../CoD/Cod.css'
import styles from '../../../Home.module.css';

const Halo_Lan = () => {
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
              <meta name="description" content="Halo LAN tournaments near you and across the world. Find the closest Halo LAN to you today." />
            </Helmet>
        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden', backgroundColor: 'rgb(49, 49, 49)'  }}>
            {/* <div>
                <a href=''>
                    <button type="submit" className='info-button-lans'>Back to Halo</button>
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
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1RWVPklwSmTd6iqaSgHP4LLh2WOd8Pt8&ehbc=2E312F" className='full-map'></iframe>
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
                            <a href='/lans/hcs-slc-major'>
                                <h1 className='Leagueh1 hide-on-mobile'>HCS SLC Major</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/hcs-slc-major"><img src="https://i.imgur.com/Ab93zPY.png" className='league-img' /></a>
                                <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Salt Lake City, UT</p>
                            <a href='/lans/hcs-slc-major'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 bottom-card'>
                        <div className='league'>
                            <a href='/lans/cindershots-fired-3'>
                                <h1 className='Leagueh1 hide-on-mobile'>Cindershots Fired 3</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/cindershots-fired-3"><img src="https://i.imgur.com/hJ5hDyP.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Lacey, WA</p>
                            <a href='/lans/cindershots-fired-3'>
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

export default Halo_Lan;