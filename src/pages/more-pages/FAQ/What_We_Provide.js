import Footer from "../../../Footer";
import { Helmet } from "react-helmet";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const Provide = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <>
            <Helmet>
              <meta name="description" content="uSync is a one-stop hub for all esports events across the globe. Find tournaments, LANs, leagues, and much more all in one place." />
            </Helmet>
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-4 offset-lg-1 black-text">
                            <p className="left-center">Home &gt; Articles &gt; What uSync Provides For Esports</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">What uSync Provides</h1>
                            <h1 className="left-center">For Esports</h1>
                            <div className="player-img-faq" />

                            <p className="black-text-credit left-center">
                                Image Credit: ViewSonic
                            </p>

                            <h3 className="black-text left-center">
                                What We Provide
                            </h3>
                            <p className="black-text-no-bold left-center">
                                At uSync, we are revolutionizing the way the esports community connects, competes, and thrives. We
                                provide a one-stop hub for everything esports, eliminating the need for players, teams, coaches, and
                                organizations to search across multiple platforms. Our platform simplifies the entire esports
                                ecosystem by concentrating tournaments, events, and competitions all into one place.
                            </p>

                            <h3 className="black-text left-center">
                                Platforming Tournaments
                            </h3>
                            <p className="black-text-no-bold left-center">
                                uSync offers a fully integrated tournament hosting system, featuring leagues, LANs, online
                                tournaments, and wagers. If you've ever searched for "how to find local LAN tournaments" or "where to
                                compete in esports", uSync makes it easy to discover and participate in these well looked for
                                competitive events. Say goodbye to endless Google searches—uSync provides a smart, searchable
                                platform for ongoing and upcoming events all in one space.
                            </p>

                            <h3 className="black-text left-center">
                                Verified Hosting and Secure Competition
                            </h3>
                            <p className="black-text-no-bold left-center">
                                Unlike other platforms, uSync provides a safe, verified environment for esports competition. At uSync,
                                we have a variety of verified hosts you can trust to complete fair payouts, fair rules, unbiased admins,
                                and overall a safe to play environment for those that want to improve their skill.
                            </p>

                            <h3 className="black-text left-center">
                                Helping You Find LANs Near You
                            </h3>
                            <p className="black-text-no-bold left-center">
                                For anyone typing "LANs near me", "local call of duty tournaments", or "how to join a LAN event" into
                                google, uSync is the answer you are looking for. Instead of bouncing between different event websites
                                and social media pages, our platform consolidates all major esports events into one
                                easy-to-navigate system.
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
                            
                            <br className="hide-on-mobile" />
                            <p className="black-text-no-bold left-center">
                                By providing a tuned, all-in-one solution, uSync is setting a new standard for accessibility and
                                engagement in esports. We are committed to bridging the gaps in the industry, ensuring that players,
                                teams, and professionals connect, compete, and grow like never before.
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

                    <div className="row">
                        <div className="col-12 col-lg-10 offset-1 slight-left bottom-space-faq">
                            <a href="/more/FAQ/How-We-Fix-It">
                                <img src="https://i.imgur.com/Q6NQGsD.png" alt="How We Fix It" className="we-fix-img"/>
                            </a>
                            
                            <a href="/more/FAQ/The-Problem-With-Esports">
                                <img src="https://i.imgur.com/vBqSUhI.png" alt="The Problem With Esports" className="problem-with-esports-img"/>
                            </a>

                            <a href="/more/FAQ/How-Esports-Can-Be-Better">
                                <img src="https://i.imgur.com/DEB6G8p.png" alt="How Esports Can Be Better" className="esports-better-img"/>
                            </a>

                            <a href="/more/FAQ/How-to-Join-an-Esports-League">
                                <img src="https://i.imgur.com/zS2wj8d.png" alt="Joining An Esports League" className="join-esports-img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Provide;