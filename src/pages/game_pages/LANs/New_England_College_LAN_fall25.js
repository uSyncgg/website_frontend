import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const New_England_College_LAN_fall25 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Looking to play esports in college? Join this showcase to show collegiate recruiters that you have what it takes." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">New England College LAN 25</h1>
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
            href="https://www.staypluggedin.com/events/new-england-college-lan-'25" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>October 25 - 26th, 2025</p>
              <p>Henniker, NH</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$2,700 Prize Pool</p>
              <p>College Recruiting Event for Titles: Rocket League, Valorant, and Smash Ultimate</p>
              <p>College Recruiters with Esport Scholarship Opportunities</p>
              <p>9:00AM Start Time</p>
              <p>NO Refunds</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Free Entry</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/other-lans" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to home for conventions AND FOR ARCHIVED) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED ------------------------------------------------------------------------------
  );
};

export default New_England_College_LAN_fall25;
