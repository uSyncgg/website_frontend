import Footer from '../../../Footer';
import { Helmet } from "react-helmet";
import '../Lan.css';
import React from 'react';
import GrayBox from '../../hooks/MapCover';

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
            
            <Footer />
        </div>
    </>
    );
}

export default Cod_Lan;