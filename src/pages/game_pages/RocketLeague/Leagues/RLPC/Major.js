// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
import { Helmet } from "react-helmet";
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../../Footer';
import useNavHeight from '../../../../hooks/NavbarHeight';
import '../../../leagues.css';
// Make sure the name following const is the same as the file name
const Major = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="RLPC Major League is the Rocket League league for those that are trying to go pro. This league is not for the weak, and has a ton of tough competition on the way to the top." />
          </Helmet>
          <div className="total-playground">
      <div className="Header-Img-l rlpc-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">RLPC Major League</h1>
          <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
      </div>
      <div className="background-mid">
        <div className="Background-mid-top">          {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
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
              src="https://i.imgur.com/OSMYolc.png"
              className="Checkmark-title"
            />
          </a>
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/PCHIHQB.png" className="Checkmark" />
          </a>
          <a
            href="https://linktr.ee/officialrlpc"
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
              <p>Annual Spring, Summer, and Winter Seasons</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Prize Pool Based on Donations</p>
              <p>Must Sign 1-3 Season Contract</p>
              <p>Build Your Own Team</p>
              <p>Live Streamed Matches</p>
              <p>Live Support on Discord</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>3v3 - NA</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>Free Entry</p>
              <p>1800+ MMR</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/RocketLeague/leagues/rlpc-leagues" id='league-back-button-a'>
            <button className="back-button">Back</button>
          </a>
        </div>
        <div className="become-verified">
          <h6>
             <a href="/more/verification"></a>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
    </>
    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Major;
