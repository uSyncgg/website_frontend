// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import "../../../../Info.css";
// Import bootstrap like this on every single CoD League game page
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../../Footer";
import useNavHeight from "../../../hooks/NavbarHeight";
import '../../head-to-head.css';
// Make sure the name following const is the same as the file name
const FACEITCS2 = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="Compete in the #1 place for free Counter-Strike 2 match ladders - FACEIT. CLimb the ladder and earn rewards / prizes." />
        </Helmet>
        <div className="total-playground">
      <div className="Header-Img-l faceit-verified-h2h-banner">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">FACEIT</h1>
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
            href="https://www.faceit.com/en/game/cs2"
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
              <p>Free Match Finder</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Various Different Ladders</p>
              <p>FACEIT Points Based on Placing</p>
              <p>Points Can Be Used in The Shop</p>
              <p>Large Number of Users</p>
              <p>Live Website Support</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Restrictions:</h2>
              <p>Available Worldwide</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/CS2/head-to-head">
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
export default FACEITCS2;
