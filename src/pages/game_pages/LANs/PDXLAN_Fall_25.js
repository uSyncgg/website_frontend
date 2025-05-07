import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const PDXLAN_Fall_25 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="PDX LAN Fall 2025. Sign up to play in a huge BYOC event near Portland, Oregon. The event fills up fast so get your tickets today!" />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">PDXLAN Fall 2025</h1>
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
            href="https://www.pdxlan.net/site/" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>November 13 - 16th, 2025</p>
              <p>Ridgefield, WA</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Money Raised for Charity</p>
              <p>Multiple Gaming Contests</p>
              <p>BYOC Tournaments</p>
              <p>Analog Contests</p>
              <p>Limited Number of Seats Remaining</p>
              <p>No Refunds</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Standard Seat: $175</p>
              <p>End Seat: $195</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/LanMap" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED, ONCE ARCHIVED CHANGE BACK BUTTON TO / ------------------------------------------------------------------------------
  );
};

export default PDXLAN_Fall_25;
