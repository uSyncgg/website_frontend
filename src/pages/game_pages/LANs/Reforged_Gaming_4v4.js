import "../../../Info.css";
import { Helmet } from "react-helmet";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import '../head-to-head.css';
import useNavHeight from "../../hooks/NavbarHeight";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const Reforged_Gaming_4v4 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Reforged Gaming 4v4 Black Ops 6 LAN is the South Carolina LAN you have been searching for. Compete for thousands of dollars and a chance to prove yourself." />
        </Helmet>
    <div className='total-container'>
<div className="Header-Img-l reforged-verified-lan"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">Reforged Gaming 4v4</h1>
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
          <a // from here to the </a> do CTRL + /
            href="https://x.com/Sitched/status/1924232179036340460" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <p>August 2 - 3rd, 2025</p>
              <p>Charleston, SC</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$2,500 Prize Pool (Max Teams)</p>
              <p>4v4 BO6 CDL Variant Ruleset</p>
              <p>12 Teams MAX</p>
              <p>15 Minutes from the Airport</p>
              <p>Full Service Bar and Kitchen</p>
              <p>180 hz monitors and 7800 XTs</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>Team Pass: $300</p>
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

export default Reforged_Gaming_4v4;
