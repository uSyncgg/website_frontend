import Footer from "../../../Footer";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const Problem = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-4 offset-lg-1 black-text">
                            <p>Home &gt; Articles &gt; The Problem With Esports</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">What the Problem</h1>
                            <h1 className="left-center">With Esports is</h1>
                            <div className="stadium-img-faq" />

                            <p className="black-text left-center">
                                Image Credit: World Economic Forum
                            </p>
                            <h3 className="black-text left-center">
                                The Problem With Esports Today
                            </h3>
                            <p className="black-text left-center">
                                Esports has grown into a billion-dollar industry, yet it remains deeply decentralized. Players,
                                coaches, teams, and organizations struggle to find an all-in-one platform to build
                                relationships, find opportunities, and grow their competitive careers. The lack of community
                                and accessibility is one of the biggest issues facing the esports community today. Often, you
                                may find yourself searching things on google such as “how do I join an esports tournament?”
                                or “how do people join esports teams?” or even “how do I sign up for esports?” This is for the
                                lack of accessibility of one solo platform but with uSync, we're here to combine it all.
                            </p>
                            
                            <p className="black-text left-center">
                                Typically, anyone interested in esports is forced to look through multiple websites to find
                                tournaments, leagues, or competitive events that aren't near you or aren't all in one place.
                                Whether you're a player searching for a reliable competition, a team looking for recruits, or a
                                coach scouting talent, the process is very inefficient and takes a lot of time.
                            </p>
                            
                            <p className="black-text left-center">
                                Esports is more compartmentalized than ever. Tournaments are scattered across various
                                websites, each with different formats, rules, and registration processes. This lack of
                                centralization makes it difficult for individuals and organizations to navigate the space
                                efficiently. Instead of fostering collaboration and growth, this fragmentation slows down the
                                industry's progress, making it harder for new and existing participants to engage with the
                                competitive scene which would allow for it to grow.
                            </p>
                            
                            <p className="black-text left-center">
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
                            <div className="map-img" />
                            <div className="black-text left-center">
                                <a href="/LanMap">CLICK HERE FOR OUR LAN MAP</a>
                            </div>
                            <div className="league-article-img" />
                            <div className="black-text left-center">
                                <a href="/leagues">CLICK HERE FOR LEAGUES</a>
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
                            <a href="/more/FAQ/What-We-Provide">
                                <img src="https://i.imgur.com/Fr7yPnN.png" alt="What We Provide" className="we-provide-img"/>
                            </a>
                            
                            <a href="/more/FAQ/How-We-Fix-It">
                                <img src="https://i.imgur.com/Q6NQGsD.png" alt="How We Fix It" className="we-fix-img"/>
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
    )
}

export default Problem;