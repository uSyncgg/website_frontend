import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const TomorrowLAN_2026 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="30 Tournaments accross various titles. Console and PC tournaments. $25 venue fee / $30 at door. Tournament entry fee: LoL $20 per teammate, CoD 2v2 $10 per teammate. PC tournaments: BYOPC and monitor. 70/30 Prize Pool split for CoD and LoL" />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">TomorrowLAN 2026</h1>
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
            href="https://www.start.gg/tournament/tomorrowlan-2026/details" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>March 6 - 8th, 2026</p>
              <p>Moncton, Canada</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>30 Tournaments Accross Various Titles</p>
              <p>Console and PC Tournaments</p>
              <p>PC tournaments: BYOPC and Monitor</p>
              <p>Console tournaments: Bring Controller</p>
              <p>70/30 Prize Pool Split for CoD and LoL</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$25 Venue Fee / $30 at door</p>
              <p>Tournament Entry Fee(s): LoL $20 per teammate, CoD 2v2 $10 per teammate</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/lans" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED, ONCE ARCHIVED CHANGE BACK BUTTON TO / ------------------------------------------------------------------------------
  );
};

export default TomorrowLAN_2026;
