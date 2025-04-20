import '../../Info.css';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';
import useNavHeight from '../hooks/NavbarHeight';

const Contactus = () => {
  useNavHeight();
    return ( 
      <>
          <Helmet>
            <meta name="description" content="Learn more about what uSync does and who the team is. Contact uSync today to work with us and become apart of the esports family." />
          </Helmet>
      <div>
        <div className='Header-Img-l lans-img'>
            <div className="games-leagues-header-title">
              <h1 id="league-title">Find Us</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </div>

        <div id="league-body1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 col-lg-3 no-force-width">
                <a
                  href="https://twitter.com/uSyncGG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/p0wIHEq.png"
                    className="contact-socials"
                  />
                </a>
              </div>
              <div className="col-6 col-lg-3 no-force-width">
                <a
                  href="https://www.instagram.com/usyncgg/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/YOav7r1.png"
                    className="contact-socials"
                  />
                </a>
              </div>
              <div className="col-6 col-lg-3 no-force-width">
                <a
                  href="https://www.youtube.com/@usyncGG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/BgGzaKS.png"
                    className="contact-socials"
                  />
                </a>
              </div>
              <div className="col-6 col-lg-3 no-force-width">
                <a
                  href="https://www.twitch.tv/usyncgg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/ds8ZvJJ.png"
                    className="contact-socials"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="Background-mid-contact">
            <h1 className="info-title-contactus">
              At uSync we strive to bring all of the tournaments, leagues, LANs,
              and more to one easy and accessible place. You won't have to waste
              your time going from site to site or endlessly scrolling on
              Twitter/Discord just to find competition. By utilizing the
              supported events on our website, you have access to all of the
              esports competitions in one simple place. We are the game hub of
              competitive titles across all of esports!
            </h1>
            <div className="hr-border"></div>
            
            <div className="contact-us-about-us">
              <h1 className="event-title-contactus2">Hosting Events?</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-event2"
              />
            </div>

            {/* <p class="hr-border" /> */}

            <div className='container info-title-contactus'> 
              <div className='row'>
                <div className='col-12 col-lg-3'>
                  <a
                    href="mailto:usyncgg@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://imgur.com/za685rg.png"
                      className="img-fluid contact-email"
                    />
                  </a>
                  <h4 className="hide-on-mobile">Email us!</h4>
                </div>
                <div className='col-12 col-lg-9'>
                      {/* <h1 className="info-title-contactus"> */}
                        <p className="report-link" id="verification-post-event">
                          We support plenty of different events/websites but may miss a few from time to time in our search to support all games. 
                          If you are interested in working with us, click {" "}
                          <a id="verification-post-event-a" href="/more/eventhost">
                            HERE
                          </a>
                        </p>
                      {/* </h1> */}
                </div>
              </div>
            </div>

            <div className="hr-border shorter-top-increased"></div>

            <div className="contact-us-about-us">
              <h1 className="event-title-contactus2">About Us</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-event2"
              />
            </div>
            <h1 className="info-title-contactus2">
            Our team has played competitive esports in both the amateur and collegiate level for years. uSync was founded after noticing that esports is 
            extremely disorganized and in some circumstances impossible to find information without knowing the right people. Our vision is to solve this by 
            allowing all events to be shown in one place, so everyone can participate in as many events as they desire!
            </h1>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-4">
                  <a href="https://www.linkedin.com/in/jake-bruscino/" target="_blank">
                  <img
                    src="https://i.imgur.com/ZbCuZKi.png"
                    className="about-us-image"
                  /></a>
                  <h1 className="cofounder-title">Jake Bruscino</h1>
                  <h1 className="cofounder-subtitle">CEO / Co-Founder</h1>
                </div>
                <div className="col-12 col-lg-4 less-space-right-left">
                <a href="https://www.linkedin.com/in/matthew-o-connor-a9b444228/" target="_blank">
                <img
                    src="https://i.imgur.com/gGXFOdn.png"
                    className="about-us-image"
                  /></a>
                  <h1 className="cofounder-title">Matthew O'Connor</h1>
                  <h1 className="cofounder-subtitle">CTO / Co-Founder</h1>
                </div>
                <div className="col-12 col-lg-4">
                <a href="https://www.linkedin.com/in/mason-wiley-b539bb304/" target="_blank">
                <img
                    src="https://i.imgur.com/t0vqLB4.png"
                    className="about-us-image"
                  /></a>
                  <h1 className="cofounder-title">Mason Wiley</h1>
                  <h1 className="cofounder-subtitle">CSO / Co-Founder</h1>
                </div>
                <div className="col-12 col-lg-4">
                <a href="https://www.linkedin.com/in/tonegmz/" target="_blank">
                <img
                    src="https://i.imgur.com/AX1uMWJ.png"
                    className="about-us-image"
                  /></a>
                  <h1 className="cofounder-title">Tony Gomez</h1>
                  <h1 className="cofounder-subtitle">Head of Marketing</h1>
                </div>

              </div>
            </div>
            <div className="hr-border space-on-bottom-double"></div>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
}
export default Contactus;