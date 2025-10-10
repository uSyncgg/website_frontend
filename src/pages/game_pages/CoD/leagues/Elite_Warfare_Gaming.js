// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';
import '../../head-to-head.css';
import useNavHeight from '../../../hooks/NavbarHeight';
// Make sure the name following const is the same as the file name
const Elite_Warfare_Gaming = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Elite Warfare Gaming League is a Call of Duty league for those looking to play against others in their same skill level. Sign up today!" />
          </Helmet>
          <div className='total-container'>
        <div className="Header-Img-l not-verified-banner-img-lans"> 
        <div className="games-leagues-header-title">
          <h1 id="league-title">Elite Warfare Gaming League</h1>
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
            href="https://discord.gg/HN2mKEvb7K"
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
              <p>Annual Spring and Fall Seasons (Estimated)</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>70/30% Prize Pool Split</p>
              <p>4v4 CDL Ruleset Based on Divisions</p>
              <p>Group A: T150 Pro Point Players / NO T250 Ranked Players</p>
              <p>Group B: Crim 3 Ranked Peak / No Pro Point Players  / No top U18 Players (Via S7 U18 League)</p>
              <p>Group C: Diamond 3 Ranked Peak / No Pro Point Players / No Challengers Cup Participants / $50 Earnings Limit On COD Agent/CMGs / No top U18 Players (Via S7 U18 League)</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>4v4 - NA</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>Group A: $50 Team Pass</p>
              <p>Group B: $40 Team Pass</p>
              <p>Group C: $30 Team Pass</p>
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
export default Elite_Warfare_Gaming;