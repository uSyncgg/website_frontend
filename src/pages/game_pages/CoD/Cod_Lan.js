import Footer from '../../../Footer';
import { Helmet } from "react-helmet";
import '../Lan.css';
import React from 'react';
import GrayBox from '../../hooks/MapCover';
import './Cod.css'

const Cod_Lan = () => {
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

        <div className='Background-leagues'>
            <div className='container-fluid'>
                
                <p className='hr' />

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
                </div>

                
                <p className='hr' />

            </div>
        </div>

        
        <Footer />
    </>
    );
}

export default Cod_Lan;