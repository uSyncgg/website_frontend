import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCover';
import '../CoD/Cod.css'
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
            <div>
                <a href='/games/warzone'>
                    <button type="submit" className='info-button-lans'>Back to Warzone</button>
                </a>
                <a href='/lans'>
                    <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                </a>
            </div>
            
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" className='full-map'></iframe>
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

export default Wz_Lan;