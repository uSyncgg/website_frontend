import '../Lan.css';
import { Helmet } from "react-helmet";
import React from 'react';
import Footer from '../../../Footer';
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
        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden'  }}>
            <a href='/games/warzone'>
                <button type="submit" className='info-button-lans'>Back to Warzone</button>
            </a>
            <a href='/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" className='full-map'></iframe>
            <Footer />
        </div>
        </>
    );
}

export default Wz_Lan;