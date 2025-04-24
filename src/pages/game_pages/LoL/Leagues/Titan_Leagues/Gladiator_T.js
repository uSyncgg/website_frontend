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
const Gladiator_T = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Titan Gladiator League. The League of Legends league with a Platinum 4 cap. Sign up before spots sell out." />
          </Helmet>
        <div className="total-playground">
            <div className="Header-Img-l titan-verified-league" />
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
              src="https://i.imgur.com/OSMYolc.png"
              className="Checkmark-title"
            />
          </a>
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/PCHIHQB.png" className="Checkmark" />
          </a>
          <a
            href="https://lol.titanesports.org/"
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
              <p>Annual Summer, Fall, and Winter Seasons</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>1st place = 35% - 2nd place = 15% - 3rd/4th place = 5% - Operations = 40%</p>
              <p>9 Week Single Round Robin Group Stage</p>
              <p>3 Week Playoffs</p>
              <p>Support on Discord</p>
              <p>Live Streamed Matches</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>5v5 - NA</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>$25 Per Team</p>
              <p>$25 Forfeit Deposit</p>
              <p>Platinum 4 Cap</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/LoL/leagues/titan-leagues" id='league-back-button-a'>
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
export default Gladiator_T;
