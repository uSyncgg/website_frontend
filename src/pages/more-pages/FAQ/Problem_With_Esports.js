import Footer from "../../../Footer";
import { Helmet } from "react-helmet";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const Problem = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <>
            <Helmet>
              <meta name="description" content="The current problem with esports today and what uSync.gg is doing to combat this major issue plaguing the industry." />
            </Helmet>
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-4 offset-lg-1 black-text">
                            <p className="left-center"><a href="/">Home</a> &gt; <a href="/more/articles"> Articles</a>  &gt; The Problem With Esports</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">What the Problem</h1>
                            <h1 className="left-center">With Esports is</h1>
                            <div className="stadium-img-faq" />

                            <p className="black-text-credit left-center">
                                Image Credit: World Economic Forum
                            </p>
                            <h3 className="black-text left-center">
                                The Problem With Esports Today
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Esports has grown into a billion-dollar industry, yet it remains deeply decentralized. Players,
                                coaches, teams, and organizations struggle to find an all-in-one platform to build
                                relationships, find opportunities, and grow their competitive careers. The lack of community
                                and accessibility is one of the biggest issues facing the esports community today. Often, you
                                may find yourself searching things on google such as “how do I join an esports tournament?”
                                or “how do people join esports teams?” or even “how do I sign up for esports?” This is for the
                                lack of accessibility of one solo platform but with uSync, we're here to combine it all.
                            </p>
                            
                            <p className="black-text-no-bold left-center">
                                Typically, anyone interested in esports is forced to look through multiple websites to find
                                tournaments, leagues, or competitive events that aren't near you or aren't all in one place.
                                Whether you're a player searching for a reliable competition, a team looking for recruits, or a
                                coach scouting talent, the process is very inefficient and takes a lot of time.
                            </p>
                            
                            <p className="black-text-no-bold left-center">
                                Esports is more compartmentalized than ever. Tournaments are scattered across various
                                websites, each with different formats, rules, and registration processes. This lack of
                                centralization makes it difficult for individuals and organizations to navigate the space
                                efficiently. Instead of fostering collaboration and growth, this fragmentation slows down the
                                industry's progress, making it harder for new and existing participants to engage with the
                                competitive scene which would allow for it to grow.
                            </p>
                            
                            <p className="black-text-no-bold left-center">
                                If you've ever found yourself searching for "LANs near me," or “upcoming LANs near me,” or
                                just plainly struggling to locate local esports tournaments, you're not alone. This is where
                                uSync comes in. Recognizing these problems, uSync has developed a unified esports
                                platform designed to streamline the competitive experience for everyone involved. We offer a
                                solution that brings together leagues, LANs, online tournaments, wagers, and head-to-head
                                competitions all in one place, saving users time and effort while fostering a true esports
                                community. You'll never have to search for LANs near you or have to worry about searching
                                for esports events across multiple sites. We Sync so uSync!
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
                   <a href="/more/FAQ/How-Esports-Can-Be-Better">
                    <img
                      className="blockimg2 img-fluid d-block mx-auto"
                      src="https://i.imgur.com/DEB6G8p.png"
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

export default Problem;