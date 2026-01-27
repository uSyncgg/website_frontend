import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const Charleston_Crown_Series = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="The most reputable LAN host is back hosting a Call of Duty LAN event - Charleston Crown Series. Compete against teams in-person for $3k in prizing." />
          </Helmet>
          <div className="total-playground">
      <div className="Header-Img-l basai-lan-verified-banner">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Charleston Crown Series</h1>
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
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/PCHIHQB.png" className="Checkmark" />
          </a>
          <a
            href="https://x.com/TeamBasai/status/2015205573680107861" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>April 18 - 19th, 2026</p>
              <p>Charleston, SC</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$3,000 Prize Pool, Based on Entrants</p>
              <p>4v4 CDL Ruleset</p>
              <p>Pool Play into Double Elimination</p>
              <p>15 Minutes from Airport</p>
              <p>Live Streamed Matches</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Team Pass: $300</p>
              <p>VIP Team Pass: $400</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/call-of-duty/lans" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6>  <a href="/more/verification"></a> </h6> </div> </div> <Footer />
        </div>
        </> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED, ONCE ARCHIVED CHANGE BACK BUTTON TO / ------------------------------------------------------------------------------
  );
};

export default Charleston_Crown_Series;
