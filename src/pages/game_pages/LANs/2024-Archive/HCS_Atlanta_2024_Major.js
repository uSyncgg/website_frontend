import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import Footer from "../../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const HCS_Atlanta_2024_Major = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="HCS Major in Atlanta for Halo. Ages 13+ welcome to compete and showcase your Halo skills to try and take home the $250k prize." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">HCS Atlanta 2024 Major</h1>
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
              src="https://i.imgur.com/OSMYolc.png"
              className="Checkmark-title"
            />
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date/Place:</h2>
              <p>July 26 - 28th, 2023</p>
              <p>College Park, GA</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Double Elimination Open Bracket to Start</p>
              <p>Pool Play of Top Teams</p>
              <p>Double Elimination Championship Bracket with Top 24 Teams</p>
              <p>$250,000 4v4 Prize Pool</p>
              <p>$5,000 FFA Prize Pool</p>
              <p>Ages 13 and Older</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$250 Team Pass</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6>  <a href="/more/verification"></a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED | change to / for archived ------------------------------------------------------------------------------
  );
};

export default HCS_Atlanta_2024_Major;
