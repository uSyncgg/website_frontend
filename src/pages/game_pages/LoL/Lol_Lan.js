import '../Lan.css';
import React from 'react';
import Footer from '../../../Footer';
const Lol_Lan = () => {
    const [navHeight, setNavHeight] = React.useState(60); // Default to 60px
    
    React.useEffect(() => {
        const navbar = document.querySelector('.navbar'); // Adjust based on your class
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        } 
    }, []); 

    return (
        <div style={{ height: `calc(100vh - ${navHeight}px)`, paddingTop: `${navHeight}px` }}>
            <a href='/games/LoL'>
                <button type="submit" className='info-button-lans-lol'>Back to League of Legends</button>
            </a>
            <a href='/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1CFHyDVMbDSwBAX2_cz3KqiCm0UY9aQQ&ehbc=2E312F" className='full-map'></iframe>
            <Footer />
        </div>
    );
}

export default Lol_Lan;
