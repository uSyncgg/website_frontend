import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCoverGames';
import '../CoD/Cod.css'
import styles from '../../../Home.module.css';
const Wz_Lan = () => {
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
              <meta name="description" content="Warzone LANs near you. Travel to in-person Warzone events and compete for cash. Sign up solo or with a duo using our LAN map today." />
            </Helmet>
        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden', backgroundColor: 'rgb(49, 49, 49)'  }}>
            {/* <div>
                <a href=''>
                    <button type="submit" className='info-button-lans'>Back to Warzone</button>
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

                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" className='full-map'></iframe>
                <GrayBox />
            </div>

        </div>

        <div className='Background-leagues'>
            <div className='container-fluid'>
                
                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/blink-respawn-25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Blink Respawn 2025</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/blink-respawn-25"><img src="https://i.imgur.com/4jCW0Li.png" className='league-img' /></a>
                            </div>
                            <p className='Leaguep'>Santo Domingo, DR</p>
                            <a href='/lans/blink-respawn-25'>
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

export default Wz_Lan;