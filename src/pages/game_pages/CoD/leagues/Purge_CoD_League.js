// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';
import '../../leagues.css';
import useNavHeight from '../../../hooks/NavbarHeight';

// Make sure the name following const is the same as the file name
const Purge_CoD_League = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Purge CoD League is THE Call of Duty league that you and your team has been looking for. Sign up solo or as a team and compete for thousands!" />
          </Helmet>
          <div className="total-playground">
      <div className="Header-Img-l purge-league-verified-banner">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Purge CoD League</h1>
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
              src="https://i.imgur.com/OSMYolc.png"
              className="Checkmark-title"
            />
          </a>
          <a href="/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/PCHIHQB.png" className="Checkmark" />
          </a>
          <a
            href="https://discord.gg/WFB3UKPfDZ"
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
              <p>December Start - Runs Twice per Title Year</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Two Divisions: Premade and Lowers</p>
              <p>Premade Division: $800 - $1,000 Prize Pool (TBD)</p>
              <p>Lowers Division: $100 Prize Pool</p>
              <p>Crossplay (Xbox, Playstation 4 & 5, and PC)</p>
              <p>Live Streamed Matches with Casters and Media Coverage</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>4v4 - NA/EU (NA Based)</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>Premade Division: $10 per Captain, $5 per player, $25 per team</p>
              <p>Lowers Division: Free Entry</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/call-of-duty/leagues" id='league-back-button-a'>
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
export default Purge_CoD_League;