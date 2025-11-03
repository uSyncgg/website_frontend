import Footer from "../../../Footer";
import { Helmet } from "react-helmet";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const Fix = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <>
            <Helmet>
              <meta name="description" content="uSync is unifying the entire esports landscape. Find out how you can be apart of this ever growing opportunity." />
            </Helmet>
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-3 offset-lg-1 black-text">
                            <p className="left-center"><a href="/">Home</a> &gt;<a href="/more/articles"> Articles</a> &gt; How We Fix It</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">How uSync Fixes</h1>
                            <h1 className="left-center">The Problem With Esports</h1>
                            <div className="controller-img-faq" />

                            <p className="black-text-credit left-center">
                                Image Credit: World Economic Forum
                            </p>
                            <p className="black-text-no-bold left-center">
                                The esports industry has long suffered from fragmentation, making it challenging for
                                players, teams, and organizations to navigate the competitive landscape. At uSync, we
                                have developed a game-changing platform that unites the esports community and
                                provides the space needed for long-term success.
                            </p>
                            <h3 className="black-text left-center">
                                Unifying the Esports Landscape
                            </h3>
                            <p className="black-text-no-bold left-center">
                                The biggest issue in esports today is the lack of a centralized hub. Instead of users being
                                forced to search through multiple sites to find the right tournaments, leagues, or
                                head-to-head matches, uSync combines it all into one platform. By integrating every key
                                aspect of competitive gaming, we ensure that players, teams, and coaches can easily find
                                opportunities that match their needs. We provide you with the best of both worlds in terms
                                of searching for and verifying your next league, LAN, tournament, or more.
                            </p>
                            <h3 className="black-text left-center">
                                Reducing Search Time
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Before uSync, finding the right competition required hours of searching across multiple
                                websites, Discord servers, and social media posts. If you've ever typed "where to find local
                                esports tournaments" or "how to join a LAN and Esports League", you understand the
                                struggle. Our platform cuts down search time significantly, allowing users to discover and
                                join esports events effortlessly.
                            </p>
                            <h3 className="black-text left-center">
                                Supporting All Levels of Competition
                            </h3>
                            <p className="black-text-no-bold left-center">
                                From beginner or amateur players looking to hone their skills to esports organizations
                                seeking professional-level events, uSync provides every level of competition. We offer
                                structured leagues, casual head-to-heads, and secure wagers ensuring that players and
                                teams of all skill levels have a place to grow and compete.
                            </p>
                            <h3 className="black-text left-center">
                                Helping You Find the Best LANs and Events
                            </h3>
                            <p className="black-text-no-bold left-center">
                                For players searching for "LANs near me", "local gaming tournaments", or "how to compete in
                                esports", uSync offers an easy-to-use platform that connects players to the best local and
                                online events. We make LAN event discovery seamless and competition entry effortless,
                                ensuring that every esports player can find the right opportunity to showcase their skills.
                            </p>
                            <h3 className="black-text left-center">
                                The Future of Esports is Here
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Esports is evolving, and uSync is leading the charge. Our mission is to eliminate the
                                disorganization of the industry, build a strong competitive environment, and create a
                                centralized esports hub that caters to players, teams, coaches, and organizations alike.
                                With our platform and commitment to community building, uSync is setting a new standard
                                for how esports should operate.
                            </p>
                            <p className="black-text-no-bold left-center">
                                By bringing everything under one roof, we make esports simpler, faster, and more
                                accessible than ever before. If you've been searching for LAN events, competitive
                                tournaments, or reliable esports networking, look no further—join uSync today and be part
                                of the revolution in centralized esports competition.
                            </p>
                        </div>

                        <div className="col-12 col-lg-3 move-right-little">
                            <div className="map-img">
                                <div className="bright-text left-center">
                                    <a href="/LanMap">CLICK HERE FOR OUR LAN MAP</a>
                                </div>
                            </div>

                            <div className="league-article-img">
                                <div className="bright-text left-center">
                                    <a href="/leagues">CLICK HERE FOR LEAGUES</a>
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-3 offset-lg-1">
                            <h3 className="black-text left-center">
                                OTHER ARTICLES
                            </h3>
                        </div>
                    </div>

            {/* <div className="container"> */}
               <div className="row justify-content-center">
                 {" "}
                 {/* add justify-content-center class to center the columns */}
                 <div className="col-lg-3 space-on-bottom problem-with-esports-img" id="bubblel">
                   <a href="/more/FAQ/The-Problem-With-Esports">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/vBqSUhI.png"
                      alt="img"
                    />
                  </a>
                 </div>
                 <div className="col-lg-3 space-on-bottom we-provide-img" id="bubble">
                   <a href="/more/FAQ/What-We-Provide">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/Fr7yPnN.png"
                      alt="img"
                    />
                  </a>
                 </div>
                  <div className="col-lg-3 space-on-bottom join-esports-img" id="bubblelb">
                   <a href="/more/FAQ/How-to-Join-an-Esports-League">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/zS2wj8d.png"
                      alt="img"
                    />
                  </a>
                 </div>
                 <div className="col-lg-3 esports-better-img" id="bubblerb">
                   <a href="/more/FAQ/How-Esports-Can-Be-Better">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/DEB6G8p.png"
                      alt="img"
                    />
                  </a>
                 </div>
               </div>
               <div className="row justify-content-center games-row-2">
                
                 
               </div>
             </div>
           </div>
                {/* </div> */}
            <Footer />
        </div>
        </>
    )
}

export default Fix;