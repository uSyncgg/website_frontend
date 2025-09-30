import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const TXP5 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="The FIRST Black Ops 7 LAN tournament in Canada is being hosted by TorontoXP. Play in Ontario for $4.5k in prizing." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">TorontoXP 5</h1>
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
            href="https://x.com/TorontoXP/status/1969177805083521338" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>November 29 - 30th, 2025</p>
              <p>Ontario, Canada</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$4,500 Prize Pool</p>
              <p>4v4 CDL Ruleset</p>
              <p>16 Teams MAX</p>
              <p>Live Streamed Matches</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Team Pass: $250 (Estimated)</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/call-of-duty/lans" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED, ONCE ARCHIVED CHANGE BACK BUTTON TO / ------------------------------------------------------------------------------
  );
};

export default TXP5;
