// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
import { Helmet } from "react-helmet";
// Import bootstrap like this on every single CoD League game page
import '../../../head-to-head.css';
import useNavHeight from "../../../../hooks/NavbarHeight";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../../Footer';

// Make sure the name following const is the same as the file name
const CWL_Rise = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Cobalt Winds (CWL) 100 LP player cap | 200 LP team cap | Up to 2 Master players per team League of Legends league. Do you have what it takes to win the cash prize?" />
        </Helmet>
        <div className='total-container'>
        <div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">CWL Rise</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
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
            />
          </a>
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/0MPIBOK.png" className="Checkmark" />
          </a>
          <a
            href="https://discord.gg/WTJJmgPgCU"
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
              <p>Annual Spring, Summer, and Fall Seasons</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Prize Pool Based on Entrants</p>
              <p>2 Consecutive 4-Week Tournaments</p>
              <p>Community Contests and Events During Season and Offseason</p>
              <p>Flexible Rules for EUNE Players</p>
              <p>Support on Discord</p>
              <p>Live Streamed Matches</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>5v5 - EUW</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>€25 Per Team</p>
              <p>100 LP Individual Cap | 200 LP Team Cap | Up to 2 Master players per team</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/LoL/leagues/cobalt-winds-leagues" id='league-back-button-a'>
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
export default CWL_Rise;
