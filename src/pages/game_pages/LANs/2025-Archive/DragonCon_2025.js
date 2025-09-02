import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import Footer from "../../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const DragonCon_2025 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Atlanta, Georgia LAN DragonCon is back in 2025 setup with various fighter games, League of Legends, and Marvel Rivals. Enter today to play Guilty Gear, Tekken and many more." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">DragonCon 2025</h1>
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
                    {/* <a
            href="https://www.start.gg/tournament/dragoncon-2025-gaming-tournaments/details" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
            target="_blank"
            rel="noopener noreferrer"
            id="join-button-link"
          >
            <button className="join-button">Join Now</button>
          </a> */}

        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date/Place:</h2>
              <p>Aug 28th - Sep 1st, 2025</p>
              <p>Atlanta, GA</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Prize Pool Split Based on Entrants</p>
              <p>2PM EST Saturday Start Time (League of Legends)</p>
              <p>Multiple Tournament Titles: Marvel Rivals, Guilty Gear, Tekken 8, and more</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>DragonCon Membership Required</p>
              <p>League of Legends Team Pass: $100</p>
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

export default DragonCon_2025;
