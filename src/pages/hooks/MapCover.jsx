import { useState } from 'react';
import styles from '../../Home.module.css';

const GrayBox = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsVisible(false);
    };
  
    if (!isVisible) return null;
  
    return (
      <div className={`${styles.GrayBox}`} onClick={handleClick}>
        <p className={`${styles.GrayBoxText}`}>Click to interact with the map</p>
      </div>
    );
  };
  
  export default GrayBox;