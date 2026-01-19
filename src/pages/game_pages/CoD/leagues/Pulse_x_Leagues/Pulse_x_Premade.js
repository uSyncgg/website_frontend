// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import { Helmet } from "react-helmet";
import '../../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../../Footer';
import '../../../head-to-head.css';
import useNavHeight from '../../../../hooks/NavbarHeight';
// Make sure the name following const is the same as the file name
const Pulse_x_Premade = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
  {/* Basic SEO */}
  <meta
    name="description"
    content="Pulse X Premade Division is the competitive arm of the Pulse X CoD League. Build your squad or sign up solo and compete in BO7-ready series with playoffs and prize support."
  />
  <link rel="canonical" href="https://usync.gg/games/CoD/leagues/pulse-x-premade" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph (Facebook/Discord) */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="uSync" />
  <meta property="og:title" content="Pulse X Premade Division – uSync" />
  <meta
    property="og:description"
    content="Pulse X Premade Division is the very competitive arm of the Pulse X CoD league. Grab your best teammates or sign up solo and compete for a huge prize pool!."
  />
  <meta property="og:url" content="https://usync.gg/games/CoD/leagues/pulse-x-premade" />
  <meta property="og:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pulse X Premade Division – uSync" />
  <meta
    name="twitter:description"
    content="Assemble your team or sign up solo for the Pulse X Premade Division. Competitive BO7 4v4 series, playoffs, and prizes."
  />
  <meta name="twitter:image" content="https://i.imgur.com/A0AhUZp.jpeg" />
</Helmet>

          <div className="total-playground">
      <div className="Header-Img-l pulse-x-league-verified-banner">
      <div className="games-leagues-header-title-verified">
          <h1 id="league-title">Pulse X Premade Division</h1>
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
            href="https://discord.com/invite/pulsexleague"
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
              <p>Premade Teams</p>
              <p>$800 - $1,000 Prize Pool (TBD)</p>
              <p>Crossplay (Xbox, Playstation 4 & 5, and PC)</p>
              <p>Live Streamed Matches with Casters and Media Coverage</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>4v4 - NA/EU (NA Based)</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
              <p>$10 per Captain, $5 per player, $25 per team</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="/games/call-of-duty/leagues/pulse-x-leagues" id='league-back-button-a'>
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
export default Pulse_x_Premade;
