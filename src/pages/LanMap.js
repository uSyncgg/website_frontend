import Footer from '../Footer';
import { Helmet } from "react-helmet";
import '../Info.css';
import React from 'react';
import GrayBox from './hooks/MapCover';

const LanMap = () => {
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
              <meta name="description" content="Find LANs near you. We have every LAN event from across the globe consolidated on our LAN map." />
            </Helmet>
        <div style={{ paddingTop: `${navHeight}px`, overflowX: 'hidden', backgroundColor: 'rgb(49, 49, 49)' }}>
            <div>
                <a href='/lans'>
                    <button type="submit" className='info-button-lans'>Back to LANs</button>
                </a>
                {/* <a href='/lans'>
                    <button type="submit" className='info-button-lans-home'>Back to LANs</button>
                </a> */}
            </div>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F" className='full-map'></iframe>
            <GrayBox />
            
            <Footer />
        </div>
                </>
    );
}

export default LanMap;