import '../Lan.css';
import React from 'react';
import Footer from '../../../Footer';

const Halo_Lan = () => {
    const [navHeight, setNavHeight] = React.useState(60); // Default to 60px
    
    React.useEffect(() => {
        const navbar = document.querySelector('.navbar'); // Adjust based on your class
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        } 
    }, []); 

    return (
        <div style={{ height: `calc(100vh - ${navHeight}px)`, paddingTop: `${navHeight}px` }}>
            <a href='/games/halo'>
                <button type="submit" className='info-button-lans'>Back to Halo</button>
            </a>
            <a href='/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1RWVPklwSmTd6iqaSgHP4LLh2WOd8Pt8&ehbc=2E312F" className='full-map'></iframe>
            <Footer />
        </div>
    );
}

export default Halo_Lan;