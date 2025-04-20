// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import "../../../../Info.css";
// Import bootstrap like this on every single CoD League game page
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../../Footer";
import '../../wagers.css';
import useNavHeight from "../../../hooks/NavbarHeight";
// Make sure the name following const is the same as the file name
const EAgent_Wagers = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Live supported cod wagers from Esports Agent. Sign up today and experience the pro league for yourself." />
        </Helmet>
    <div className="total-playground">
      <div className="Header-Img-l codagent-verified-wagers" />
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
            href="https://esportsagent.gg/wagers"
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
              <h2 className="info-title">Fees:</h2>
              <p>Regular Member: 5%</p>
              <p>Prestige Member: 0%</p>
              <p>No Fee & Instant Deposits/Withdrawals</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>24/7 Live Support</p>
              <p>Consistent Rule Updates</p>
              <p>CDL Ruleset with Select GAs</p>
              <p>PC Reset / Monitor Cam Options</p>
              <p>Large Number of Users and Matches Daily</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Restrictions:</h2>
              <p>18+</p>
              <p>Available Worldwide</p>
              <p>US State Restrictions: AZ, MT, and SD</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/call-of-duty/wagers" id='league-back-button-a'>
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
};

// Must export default filename otherwise nothing will show up on the web page!
export default EAgent_Wagers;
