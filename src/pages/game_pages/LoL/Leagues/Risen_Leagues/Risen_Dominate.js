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
const Risen_Dominate = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Risen Dominate is a League of Legends Diamond 1 cap league. Does your team have what it takes to take the winning trophy?" />
          </Helmet>
            <div className="total-playground">
      <div className="Header-Img-l risen-verified-league">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Risen Dominate League</h1>
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
            href="https://discord.com/invite/risenesports"
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
              <p>Annual Spring, Summer and Winter Seasons</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>$400 Prize Pool for Every 8 Teams</p>
              <p>Join With Your Own Team</p>
              <p>Live Streamed Matches</p>
              <p>Support on Discord</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>5v5 - NA</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>$70 Per Team</p>
              <p>Diamond 1 Cap</p>
              <p>1 M 150LP Allowed</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/LoL/leagues/risen-leagues" id='league-back-button-a'>
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
export default Risen_Dominate;
