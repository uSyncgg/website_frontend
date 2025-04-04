import { useState } from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from '../Home.module.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isGrayBoxVisible, setIsGrayBoxVisible] = useState(true); // State to track the visibility of the GrayBox

  const handleGrayBoxClick = () => {
    setIsGrayBoxVisible(false); // Hide the GrayBox when it's clicked
  };

  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.backgroundTop}>
          <div>
            <div className={styles.nameLogo}>
              <img src="https://i.imgur.com/l6mclM4.png" alt="uSync"/>
            </div>
            <h2 className={styles.Intro}>
              World's <u>Largest</u> Selection of Esports <u>LANs</u>, <u>Leagues</u>, <br /> and <u>Tournaments</u>.
              Find Your Next Event Today<br />
            </h2>
          </div>
          <div>
            <a href="/games">
              <button type="submit" className={styles.getStarted}>
                Get Started
              </button>
            </a>
          </div>
          <h2 className={styles.Slogan}>We Sync so uSync</h2>
        </div>
        <div className={styles.backgroundMid}>
          <h2 className={styles.hometitles}>Explore Events</h2>
          <img
            className="underline-h"
            src="https://i.imgur.com/eNhKhTI.png"
            alt="underline"
          />
            <div className={styles.backgroundImages}>
              <a href="/games/call-of-duty">
                <img
                  src="https://i.imgur.com/lt94bkC.png"
                  alt="Call of Duty"
                  className="home-games-images"
                />
                
              </a>
              <a href="/games/warzone">
                <img
                  src="https://i.imgur.com/IBGIbY2.png"
                  alt="Warzone"
                  className="home-games-images"
                />
              </a>
              <a href="/games/halo">
                <img
                  src="https://i.imgur.com/wqKJfEu.png"
                  alt="Halo Infinite"
                  className="home-games-images"
                />
              </a>
              <a href="/games/LoL">
                <img
                  src="https://i.imgur.com/5riYNow.png"
                  alt="League of Legends"
                  className="home-games-images"
                />
              </a>
            <br />
            <br />
              <a href="/games/RocketLeague">
                <img
                  src="https://i.imgur.com/GJO8JIZ.png"
                  alt="Rocket League"
                  className="home-games-images"
                />
              </a>
              <a href="/games/Valorant">
                <img
                  src="https://i.imgur.com/Gsl3oIp.png"
                  alt="Valorant"
                  className="home-games-images"
                />
              </a>
              <a href="/games/CS2">
                <img
                  src="https://i.imgur.com/60FwDKN.png"
                  alt="Counter-Strike 2"
                  className="home-games-images"
                />
              </a>
          </div>

          <div className={styles.hr}></div>

          <h2 className={styles.hometitles}>LAN Events</h2>
          <img
            className="underline-h"
            src="https://i.imgur.com/eNhKhTI.png"
            alt="underline"
          />

          <div className={styles.MapWrapper} style={{ position: 'relative' }}>
            <iframe
              title="lanMap"
              id="map"
              className={styles.Map}
              src="https://www.google.com/maps/d/u/2/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F"
            ></iframe>
            {isGrayBoxVisible && (
              <div
                className={styles.GrayBox}
                onClick={handleGrayBoxClick} // Adds click event to hide the GrayBox
              >
                <p className={styles.GrayBoxText}>Click to interact with map</p> {/* Added text here */}
              </div>
            )}
          </div>
          <h3 className={styles.learnhow}>
            Learn how to post your LAN to the map{" "}
            <a href="/more/eventhost" className={styles.eventhost}>
              here
            </a>
          </h3>
          <br />
          <div className={styles.hr}></div>

          <h2 className={styles.hometitles}>Coming Soon!</h2>
          <img
            className="underline-h"
            src="https://i.imgur.com/eNhKhTI.png"
            alt="underline"
          />

          <div className={styles.backgroundImages}>
          <a href="/Comingsoon">
              <img src="https://i.imgur.com/ybSqQK4.png" alt="Fortnite" />{" "}
            </a>

            <a href="/Comingsoon">
              <img src="https://i.imgur.com/MUcaqmt.png" alt="Apex Legends" />{" "}
            </a>

            <a href="/Comingsoon">
              <img
                src="https://i.imgur.com/qpQDtRJ.png" alt="Super Smash Brothers" />{" "}
            </a>

            <a href="/Comingsoon">
              <img src="https://i.imgur.com/XxOYZiE.png" alt="Overwatch 2" />{" "}
            </a>
          </div>
          <br />
          <div className={styles.hr}></div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// import { useState, useEffect } from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import styles from "../Home.module.css";
// import Footer from "../Footer";

// const containerStyle = {
//   width: "640px",
//   height: "480px",
// };

// const center = {
//   lat: 37.7749, // Example latitude (San Francisco)
//   lng: -122.4194, // Example longitude
// };

// const Home = () => {
//   const [mapLoaded, setMapLoaded] = useState(false);

//   return (
//     <div>
//       <div className={styles.homeContainer}>
//         <div className={styles.backgroundTop}>
//           <div>
//             <img src="https://i.imgur.com/l6mclM4.png" alt="uSync" />
//             <h2 className={styles.Intro}>
//               World's <u>Largest</u> Selection of <u>Esports</u> LANs, Leagues, and Tournaments
//               <br />
//               Find Your Next Event Today
//               <br />
//             </h2>
//           </div>
//           <div>
//             <a href="http://localhost:3000/games">
//               <button type="submit" className={styles.getStarted}>
//                 Get Started
//               </button>
//             </a>
//           </div>
//           <h2 className={styles.Slogan}>We Sync so uSync</h2>
//         </div>

//         <div className={styles.backgroundMid}>
//           <h2 className={styles.hometitles}>Explore Events</h2>
//           <img className="underline-h" src="https://i.imgur.com/eNhKhTI.png" alt="underline" />

//           <div className={styles.hr}></div>

//           <h2 className={styles.hometitles}>LAN Events</h2>
//           <img className="underline-h" src="https://i.imgur.com/eNhKhTI.png" alt="underline" />

//           {/* Google Map Integration */}
//           <LoadScript
//             googleMapsApiKey="https://www.google.com/maps/d/u/6/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F"
//             onLoad={() => setMapLoaded(true)} 
//           >
//             {mapLoaded && (
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 options={{ gestureHandling: "cooperative" }}
//               />
//             )}
//           </LoadScript>

//           <h3 className={styles.learnhow}>
//             Learn how to post your LAN to the map{" "}
//             <a href="/more/eventhost" className={styles.eventhost}>
//               here
//             </a>
//           </h3>
//           <br />
//           <div className={styles.hr}></div>

//           <h2 className={styles.hometitles}>Coming Soon!</h2>
//           <img className="underline-h" src="https://i.imgur.com/eNhKhTI.png" alt="underline" />

//           <br />
//           <div className={styles.hr}></div>
//           <br />
//           <br />
//           <br />
//           <br />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

