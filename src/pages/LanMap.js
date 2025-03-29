import styles from '../Home.module.css';
import Footer from '../Footer';
import '../Info.css';
import React from 'react';

const LanMap = () => {
    const [navHeight, setNavHeight] = React.useState(60); // Default to 60px

    React.useEffect(() => {
        const navbar = document.querySelector('.navbar'); // Adjust based on your class
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        }
    }, []);

    return (
        <div style={{ height: `calc(100vh - ${navHeight}px)`, paddingTop: `${navHeight}px` }}>
            <iframe
                title="lanMap"
                id="map"
                className="full-map"
                src="https://www.google.com/maps/d/u/6/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F"
            ></iframe>
            <Footer />
        </div>
    );
};

export default LanMap