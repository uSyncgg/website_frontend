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

        <div className={styles.TextColumn}>
          <p className={styles.GrayBoxText}>Click to interact with the map</p>
          <p className={styles.GrayBoxText}>or scroll below</p>
        </div>

      </div>
    );
  };
  
  export default GrayBox;