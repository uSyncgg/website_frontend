// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';

// Make sure the name following const is the same as the file name
const NECC_CS2 = () => {
  useNavHeight();
  return (
    <>
      <Helmet>
        <title>NECC Counter-Strike 2 League | uSync</title>
        <meta name="description" content="NECC is the Counter-Strike 2 league for academically eligible college students. Play live streamed matches to viewers and prove yourself." />
        <link rel="canonical" href="https://usync.gg/games/CS2/leagues/necc" />
      </Helmet>
      <div className='total-container'>
        <div className="Header-Img-l not-verified-banner-img-lans">
          <div className="games-leagues-header-title">
            <h1 id="league-title">NECC League</h1>
            <img 
              src="https://i.imgur.com/eNhKhTI.png" 
              alt="" 
              title="Decorative underline" 
              className='Underline-h' 
            />
          </div>
        </div>
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
                alt="Not a uSync Verified Event."
                title="This event has not been verified by the uSync team."
              />
            </a>
            <a href="/more/verification" id="checkmark-link">
              <img 
                src="https://i.imgur.com/0MPIBOK.png" 
                className="Checkmark" 
                alt="Red 'X' icon indicating a non-verified status."
                title="Not Verified"
              />
            </a>
            <a
              href="https://discord.com/invite/UD9aKwAgGX"
              target="_blank"
              rel="noopener noreferrer"
              id="join-button-link"
              className="join-button"
            >
              Join Now
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
                <p>$1,000 Prize Pool (Estimated)</p>
                <p>Multiple Skill Divisions</p>
                <p>6 Week Regular Season With Playoff Bracket After</p>
                <p>Live Streamed Matches</p>
                <p>Live Support on Discord</p>
                <h2 className="info-title3">Region/Type:</h2>
                <p>5v5 - NA</p>
              </div>
              <div class="col-md-4 league-info">
                <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
                <p>$1,300/yr - Unlimited Game Title Participation</p>
                <p>$650/yr - One Game Title Participation</p>
                <p>Must be a FULL TIME College Student and ACADEMICALLY ELIGIBLE</p>
              </div>
            </div>
          </div>
          <div className="league-back-button-container">
            <a href="/games/CS2/leagues" id='league-back-button-a' className="back-button">
              Back
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
export default NECC_CS2;
