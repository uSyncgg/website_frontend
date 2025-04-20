import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import Footer from "../../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const UFGL_BO6_LAN_2 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="UFGL Black Ops 6 Call of Duty LAN #2 is the second $10k event for amateur and challenger teams in the Call of Duty competitive scene." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">UFGL BO6 LAN 2</h1>
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
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date/Place:</h2>
              <p>March 28 - 30th, 2025</p>
              <p>Lisle, IL</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$10,000 Prize Pool</p>
              <p>4v4 Black Ops 6 CDL Variant</p>
              <p>Best of 3 Until Top 32, then Best of 5</p>
              <p>Pool Play and Double Elim Bracket</p>
              <p>Top 8 Payout</p>
              <p>Live Streamed Matches with Casters</p>
              <p>Delayed Payments Previously</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$379.75 - 4v4 Team Pass</p>
              <p>$25 Off Coupon: ufglscrims</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to home for conventions AND FOR ARCHIVED) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED ------------------------------------------------------------------------------
  );
};

export default UFGL_BO6_LAN_2;
