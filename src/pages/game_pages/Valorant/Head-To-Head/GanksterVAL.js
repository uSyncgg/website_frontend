// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Import bootstrap like this on every single CoD League game page
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../../Footer";
import useNavHeight from "../../../hooks/NavbarHeight";
import '../../head-to-head.css';
// Make sure the name following const is the same as the file name
const GanksterVAL = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="GanksterGG Valorant matches. Join today with the top provider for Valorant scrim and practice matches to ensure that your team is well prepared." />
        </Helmet>
      <div className="total-playground">
      <div className="Header-Img-l gankster-verified-h2h">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Gankster</h1>
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
            href="https://valorant.gankster.gg/login?session=yes"
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
              <p>Free Scrim Matches</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Find Most Competitive Scrims</p>
              <p>Large Number of Users and Scrims Daily</p>
              <p>Analyze Matches</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Restrictions:</h2>
              <p>Available Worldwide</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/games/Valorant/head-to-head">
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
export default GanksterVAL;
