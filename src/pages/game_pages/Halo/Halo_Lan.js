import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
import GrayBox from '../../hooks/MapCover';

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
            <div>
                <a href='/games/halo'>
                    <button type="submit" className='info-button-lans'>Back to Halo</button>
                </a>
                <a href='/lans'>
                    <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                </a>
            </div>

            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1RWVPklwSmTd6iqaSgHP4LLh2WOd8Pt8&ehbc=2E312F" className='full-map'></iframe>
            <GrayBox />

            <Footer />
        </div>
        </>
    );
}

export default Halo_Lan;