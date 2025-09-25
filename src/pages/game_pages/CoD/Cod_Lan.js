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

                
                {/* COMMENT BELOW OUT WHEN LANS ARE POSTED, OTHERWISE UNCOMMENT */}
                {/* <div className='white-text'><h1>None Upcoming - Please Check Back Tomorrow</h1></div> */}

                <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/friday-fest-weekly25'>
                                <h1 className='Leagueh1 hide-on-mobile'>Friday Fest: Weekly 2v2 Gunfight</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/friday-fest-weekly25"><img src="https://i.imgur.com/zoThVHv.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Hackettstown, NJ</p>
                            <a href='/lans/friday-fest-weekly25'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/code-green-2'>
                                <h1 className='Leagueh1 hide-on-mobile'>Code Green 2 BO7</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/code-green-2"><img src="https://i.imgur.com/CagfuIK.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Kansas City, MO</p>
                            <a href='/lans/code-green-2'>
                                <button type="submit" className='info-button'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='hr' />

                <div className='row'>
                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                        <div className='league'>
                            <a href='/lans/gacod-bo7-launch'>
                                <h1 className='Leagueh1 hide-on-mobile'>GA:CoD Black Ops 7 Launch</h1>
                            </a>
                            <div className='parent'>
                                <a href="/lans/gacod-bo7-launch"><img src="https://i.imgur.com/JQWbVLw.png" className='league-img' loading='lazy'/></a>
                            </div>
                            <p className='Leaguep'>Columbus, OH</p>
                            <a href='/lans/gacod-bo7-launch'>
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