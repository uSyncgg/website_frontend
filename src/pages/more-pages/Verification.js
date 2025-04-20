import '../../Info.css';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';
import './Verification.css';
import useNavHeight from '../hooks/NavbarHeight';

const Verification = () => {
  useNavHeight();
    return (
      <>
          <Helmet>
            <meta name="description" content="Own a league, LAN, or tournament website on uSync - become uSync Verified to promote your event and prove your reputability in the esports scene." />
          </Helmet>
      <div className='verification-container'> 
          <div className="Header-Img-l verification-header-img-container">
              <img
                src="https://i.imgur.com/PCHIHQB.png"
                className="veri-checkmark"
              />
              <img
                src="https://i.imgur.com/0MPIBOK.png"
                className="veri-checkmark"
              />
          </div>
          <div className="Background-mid-veri">
            <div className="verified-features-img">
                <h1 className="verified-title">Verified Features</h1>
                <img
                  src="https://i.imgur.com/eNhKhTI.png"
                  className="Underline-h-verification-2"
                />
            </div>

            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 col-lg-5 offset-lg-1'>
                  <a href='/more/verification/verified-game-selection'>
                    <img
                      src="https://i.imgur.com/NZAEkGt.png"
                      className="verification-sub-img"
                    />
                  </a>
                  <a href="/more/verification/verified-game-selection">
                    <button className="info-button-verification space-bottom-veri">Choose Your Game</button>
                  </a>
                </div> 

                <div className='col-12 col-lg-5'>
                  <a href='https://buy.stripe.com/eVadRz4PY0s31mEcMV' target='_blank'>
                    <img
                      src="https://i.imgur.com/IGLQYqK.png"
                      className="verification-sub-img"
                    />
                  </a>
                  <a href="https://buy.stripe.com/eVadRz4PY0s31mEcMV" target='_blank'>
                    <button className="info-button-verification">Subscribe Now</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="hr-border"></div>
            <br />
            <div className="usync-veri-image">
              <img
                src="https://i.imgur.com/OSMYolc.png"
                className="Checkmark-title-verification-veri"
              />
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification"
              />
            </div>
            <h1 className="info-title-verification">
              uSync Verified providers are some of the most trustworthy
              providers that we feature. These events are not only extremely
              well trusted but have shown a record of exceptional quality in
              their work. We strive to verify as many events as possible so that
              you can bring your organization to the highest level of
              competitive play.
            </h1>
            
            
            
            <div className="hr-border"></div>
            <p id="verification-post-event">
              Looking to post event? Send{" "}
              <a href="/more/eventhost/eventhostrequest" id="verification-post-event-a">
                Event Submission
              </a>
            </p>
          </div>
        <Footer />
      </div>
      </>
    );
}
export default Verification;