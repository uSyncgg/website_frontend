// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../Info.css';
import { Helmet } from "react-helmet";
// Import bootstrap like this on every single CoD League game page
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';

// Make sure the name following const is the same as the file name
const ECAC_Lol = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="The college league you have been looking for. ECAC League of Legends league for your college team or to find the right college for you." />
        </Helmet>
        <div className="total-playground">
    <div className="Header-Img-l not-verified-banner-img" />
    <div className="background-mid">
        <div className="Background-mid-top">
          {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed
                
                Add id="checkmark-title-link" className='mx-auto my-2' as attributes to the .Checkmark-title a tag
                Add id="checkmark-link" to the .Checkmark a tag
                Add id='join-button-link' to the .join-button a tag*/}
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
          <a
            href="https://ecacsports.com/sb_output.aspx?form=235"
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
              <h2 className="info-title">Date:</h2>
              <p>Annual Spring and Fall Seasons</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>NO Prize Pool</p>
              <p>Compete for Team Trophies</p>
              <p>8 Week Regular Season then Playoffs</p>
              <p>Multiple Skill Divisions</p>
              <p>Live Streamed Matches</p>
              <p>Live Support on Discord</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>5v5 - USA</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>$1,600/yr - ECAC Membership</p>
              <p>Must be a FULL TIME College Student</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/LoL/leagues" id='league-back-button-a'>
            <button className="back-button">Back</button>
          </a>
        </div>
        <div className="become-verified">
          <h6>
            Become <a href="/more/verification">Verified</a>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
    </>
    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default ECAC_Lol;