import "../../../../Info.css";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../../../Footer";
// Add ANOTHER ../ once archived -------------------------------------------------------------------------------------------------------------------------------------------------------
const Skullz_Arena_BYOC = () => {
  return (
    <div className='total-container'>
    <header id='League-header'>
        <img src="https://i.imgur.com/MewGRdo.png" className='Header-Img' />
        <div className="games-leagues-header-title">
            <h2 id="league-title">Skullz Arena BYOC</h2>
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
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date/Place:</h2>
              <p>May 24 - 27th, 2024</p>
              <p>Atlanta, GA</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Tournaments & Activities</p>
              <p>Weekend of Fun</p>
              <p>Prizes and Lots of Games</p>
              <p>All Proceeds to Make a Wish Georgia</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>*Must Have MomoCon Pass</p>
              <p>BYOC Seat - $45</p>
              <p>BYOC VIP Seat - $75</p>
              <p>Monitor Rental - $30</p>
              <p>Hero System/PC Rental - $150</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
        <a href="/" id='league-back-button-a'> <button className="back-button">Back</button> </a> </div>
        <div className="become-verified"> <h6> Become <a href="/more/verification">Verified</a> </h6> </div> </div> <Footer />
        </div> // CHANGE THE BACK BUTTON TO THE CORRECT GAME (or just to home for conventions AND FOR ARCHIVED) AND DELETE THE BECOME VERIFIED IF IT IS VERIFIED ------------------------------------------------------------------------------
  );
};

export default Skullz_Arena_BYOC;
