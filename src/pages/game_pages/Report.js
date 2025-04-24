import './CoD/Cod.css';
import { Helmet } from "react-helmet";
import Footer from '../../Footer';
import useNavHeight from '../hooks/NavbarHeight';

const Report = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Notice your league, LAN, wager, or XP not featured or have the incorrect information on uSync - report a problem and we will fix it for you." />
          </Helmet>
      <div className="report-container">
        {/* <header id="League-header"> */}
          {/* <img src="https://i.imgur.com/PoCqBT9.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Report a Problem</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header> */}

        <div className='Header-Img-l report-header-img'>
          <div className="games-leagues-header-title">
            <h1 id="league-title">Report a Problem</h1>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </div>

        <div className="Background-leagues">
          <iframe
            className='google-form'
            src="https://docs.google.com/forms/d/e/1FAIpQLScQS0BmGcMtiv4WXLCJcfFJx_uF7Ks1K28-29o-upGAUhQAEA/viewform?embedded=true"
            width="640"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <p className="hr-report" />
        <p className="report-link" id="verification-post-event">
          Looking to post an event?{" "}
          <a id="verification-post-event-a" href="/more/eventhost">
            Learn more
          </a>
        </p>
        <Footer />
      </div>
      </>
    );
}
export default Report;