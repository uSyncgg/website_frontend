import "../../../Info.css";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const Gamers_For_Giving_2025 = () => {
  return (
    <div className='total-container'>
    <header id='League-header'>
        <img src="https://i.imgur.com/MewGRdo.png" className='Header-Img' />
        <div className="games-leagues-header-title">
            <h2 id="league-title">Gamers For Giving 2025</h2>
            <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
        </div>
    </header>
      <div className="background-mid">
        <div className="Background-mid-top">
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
            href="https://gamersforgiving.org/" // COMMENT OUT join button once archived ------------------------------------------------------------------------------------------------------------
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
              <h2 className="info-title">Date/Place:</h2>
              <p>April 11 - 13th, 2025</p>
              <p>Ypsilanti, MI</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Various Different Game Titles</p>
              <p>Fundraiser for Gamers Outreach</p>
              <p>Massive Event</p>
              <p>Can Attend Online</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$45 - General Ticket</p>
              <p>$90 - Enhanced Ticket</p>
              <p>$300 - Premium Ticket</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to lans for conventions) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED ------------------------------------------------------------------------------
  );
};

export default Gamers_For_Giving_2025;
