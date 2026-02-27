import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const St_Clair_ARAM_Mayhem = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Welcome to the homepage of the St. Clair College ARAM Mayhem Tournament! Join us at the St. Clair College esports Nexus for an ARAM Mayhem tournament!" />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">St. Clair ARAM Mayhem Tournament</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
      <div className="background-mid">
        <div className="Background-mid-top">
          <a
            href="/more/verification"
            id="checkmark-title-link"
            className="mx-auto my-2"
          >
            <img
              src="https://i.imgur.com/HaRfFh9.png"
              className="Checkmark-title"
            />
          </a>
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/0MPIBOK.png" className="Checkmark" />
          </a>
          <a // from here to the </a> do CTRL + /
            href="https://www.start.gg/tournament/st-clair-saints-aram-mayhem-tournament/details" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
            target="_blank"
            rel="noopener noreferrer"
            id="join-button-link"
          >
            <button className="join-button">Join Now</button>
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date/Place:</h2>
              <p>March 6th, 2026</p>
              <p>Windsor, Ontario</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>League of Legends Tournament</p>
              <p>Double Elimination Bracket</p>
              <p>Players can enter as a Solo, Duo, Trio, 4-Stack or 5-Stack</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Free Entry</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/LoL/lans" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED, ONCE ARCHIVED CHANGE BACK BUTTON TO / ------------------------------------------------------------------------------
  );
};

export default St_Clair_ARAM_Mayhem;
