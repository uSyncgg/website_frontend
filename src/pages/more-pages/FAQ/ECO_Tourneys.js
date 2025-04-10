import Footer from "../../../Footer";
import useNavHeight from "../../hooks/NavbarHeight";
import '../FAQ.css';
import './Article.css';

const ECO_Tourneys = () => {
    const navHeight = useNavHeight() + 1;
    return (
        <div>
            <div className="total-container-FAQ-white">
                <div className="container-fluid" style={{ paddingTop: `${navHeight}rem` }}>
                    <div className="row">
                        <div className="col-12 col-lg-4 offset-lg-1 black-text">
                            <p>Home &gt; Articles &gt; ECO Tourneys</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-1 black-text">
                            <h1 className="left-center">ECO Tourneys</h1>
                            <div className="eco-img-faq" />

                            <h3 className="black-text left-center">
                                What are ECO Tourneys?
                            </h3>
                            <p className="black-text left-center">
                                Eco Tourneys are Free-to-$1 online tournaments that are platformed by uSync. 
                                These Eco Tourneys are tournaments from multiple sites who host these events so you 
                                can play for ultimately no risk. Eco Tourneys are here to make it easier for the 
                                player base to grow and for competitions to excel.
                            </p>
                            
                            <h3 className="black-text left-center">
                                Why are ECO Tourneys important?
                            </h3>
                            <p className="black-text left-center">
                                Eco Tourneys are important for multiple reasons. Eco Tourneys provide a platform where 
                                players can access high-competition events for low-risk. Another reason is because Eco 
                                Tourneys are a way for all players to connect and play against one another while having 
                                a great time with your friends. Eco Tourneys promote a safe and non-risky platform so you 
                                can find the right competition and enjoy your time playing. Without Eco Tourneys, it would 
                                be hard for individuals to enjoy a place of high-competition with low-risk but also make it 
                                harder for new players to join and get involved with Esports and competitions. We platform 
                                Eco Tourneys because we believe this tournament-type is what competitive gaming is all 
                                about. With the loss of GameBattles and UMGOnline, it's been harder and harder to find a 
                                competition without having to put in tons of money. We take pride in this tournament-type 
                                and we hope that more players, through time, see the value in it. 
                            </p>

                            <h3 className="black-text left-center">
                                How To Make Money In Esports
                            </h3>
                            <p className="black-text left-center">
                                Eco Tourneys are about making money with low-risk events. These tournaments are the best for 
                                competing and earning money while not having to worry about putting too much money in. With sites 
                                like Checkmate Gaming, Esports Agent, and others-The way of making money online has changed.. 
                                If you are passionate about Esports and competitive gaming but don't have enough cash to join the 
                                high roller tournaments then Eco Tourneys are the way to go. Making money in Esports has never been 
                                easier now that uSync platforms the right Free-to-$1 tournaments all in one spot. So, if you ask 
                                yourself “How can I make money gaming?” or “How can I earn money in Esports?” We've got you covered. 
                                Join an Eco Tourney today. 
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
    );
}

export default ECO_Tourneys;
