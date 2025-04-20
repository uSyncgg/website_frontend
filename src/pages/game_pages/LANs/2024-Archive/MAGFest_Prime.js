import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import Footer from "../../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const MAGFest_Prime = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Maryland hosted BYOC LAN convention with a community centered focus. With over 15 different tournaments this January in National Harbor." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">MAGFest Prime</h1>
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
              <p>January 18 - 21st, 2024</p>
              <p>National Harbor, MD</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>15 Different Tournaments</p>
              <p>BYOC (Bring Your Own Computer)</p>
              <p>Community Centered Event</p>
              <p>Group Passes For Sale</p>
              <p>Non-Profit Event</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$135 - Single Attendee (Prices Increase Over Time)</p>
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

export default MAGFest_Prime;
