// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import "../../../../Info.css";
import { Helmet } from "react-helmet";
// Import bootstrap like this on every single CoD League game page
import '../../head-to-head.css';
import useNavHeight from "../../../hooks/NavbarHeight";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../../Footer";
// Make sure the name following const is the same as the file name
const College_Hub = () => {
  useNavHeight();
  return (
    <>
        <Helmet>
          <meta name="description" content="College Hub is a Valorant scrim match finder for United States college students. Play scrim matches against other schools to hone your skills and become the best." />
        </Helmet>
        <div className='total-container'>
        <div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">College Valorant Hub Scrims</h1>
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
            href="https://discord.com/invite/Vq5qu9szQU"
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
              <p>Free Scrim Finder</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Collegiate School Scrim Finder</p>
              <p>Manually Schedule Matches & Times</p>
              <p>Semi-Large Number of Users</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Restrictions:</h2>
              <p>USA Only</p>
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
            Become <a href="/more/verification">Verified</a>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

// Must export default filename otherwise nothing will show up on the web page!
export default College_Hub;
