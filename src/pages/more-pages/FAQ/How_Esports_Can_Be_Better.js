import Footer from "../../../Footer";
import { Helmet } from "react-helmet";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const Better = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <>
            <Helmet>
              <meta name="description" content="How can esports be better? Centralizing a hub for all of esports to unify the community one step at a time." />
            </Helmet>
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-4 offset-lg-1 black-text">
                            <p className="left-center"><a href="/">Home</a> &gt; <a href="/more/articles"> Articles</a>  &gt; How Esports Can Be Better</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">How Esports</h1>
                            <h1 className="left-center">Can Be Better</h1>
                            <div className="esports-img-faq" />

                            <p className="black-text-credit left-center">
                                Image Credit: Live Production
                            </p>
                            <h3 className="black-text left-center">
                                How Esports Can Be Better: Transforming the Community and the Industry
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Esports has come a long way, evolving into a multi-billion-dollar industry with millions of
                                fans worldwide. From League of Legends esports to Valorant esports, the competitive
                                gaming scene is stronger than ever. However, there's still room for growth, both for the
                                community and the industry at large. The biggest challenge lies in unifying esports under a
                                centralized platform that benefits players, teams, and organizations alike. That's where
                                uSync comes in.
                            </p>
                            <h3 className="black-text left-center">
                                A Centralized Hub for Esports Events
                            </h3>
                            <p className="black-text-no-bold left-center">
                                uSync changes the game by offering a centralized esports hub where players and
                                organizations can easily discover and join competitive events. Whether you're a die-hard
                                Rocket League esports player, looking for a solidified Call of Duty league, or trying to keep up
                                with the latest tournaments, uSync has everything.
                            </p>
                            <h3 className="black-text left-center">
                                How uSync Strengthens the Esports Community
                            </h3>
                            <p className="black-text-no-bold left-center">
                                The esports community is built on passion, but it's also filled with barriers that prevent
                                growth. Finding competitive leagues, casual tournaments, or upcoming events shouldn't be
                                an exhausting process.
                            </p>
                            <h3 className="black-text left-center">
                                Through uSync, players can:
                            </h3>
                            <p className="black-text-no-bold left-center">
                                - Discover and join plenty of leagues across top esports games like League of Legends,
                                Valorant, and Counter-Strike 2, and many more.
                            </p>
                            <p className="black-text-no-bold left-center">
                                - Find high-quality upcoming tournaments in one place and plenty of other features.
                            </p>
                            <p className="black-text-no-bold left-center">
                                - A strong community also means creating a smoother path for beginner players to try
                                competitive esports. uSync makes it easier for tournament hosts to attract new players,
                                ensuring that competitions remain active, well-organized, and engaging for all skill types.
                            </p>

                            <h3 className="black-text left-center">
                                How uSync Improves the Esports Industry
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Better Event Visibility - Many competitive platforms lack proper event discovery.
                                uSync helps hosts connect with a larger audience and attract committed players.
                            </p>
                            <h3 className="black-text left-center">
                                Stronger Competitive Structure
                            </h3>
                            <p className="black-text-no-bold left-center">
                                uSync ensures that verified esports events are better organized and more transparent.
                                A Home for Esports Events - Instead of searching through multiple platforms, players
                                can find verified and high-quality hosted events all in one place.
                            </p>
                            <h3 className="black-text left-center">
                                The Future of Esports with uSync
                            </h3>
                            <p className="black-text-no-bold left-center">
                                From helping players join leagues to providing better visibility for tournament hosts, uSync is
                                the missing piece in the esports puzzle. If esports is to reach its full potential, it must be more
                                accessible, streamlined, and community-driven—and uSync is leading that change.
                            </p>
                            <br className="hide-on-mobile" />
                            <p className="black-test-no-bold left-center">
                                Join uSync today and be part of the next evolution of esports.
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
                   <a href="/more/FAQ/How-We-Fix-It">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/Q6NQGsD.png"
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


export default Better;