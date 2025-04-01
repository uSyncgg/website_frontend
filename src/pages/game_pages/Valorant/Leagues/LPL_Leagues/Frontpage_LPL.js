import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_LPL = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/PGxAVgC.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/gold'>
                                    <h1 className='Leagueh1'>Gold Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/gold"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/silver'>
                                    <h1 className='Leagueh1'>Silver Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/silver"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/silver'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/bronze'>
                                    <h1 className='Leagueh1'>Bronze Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/bronze"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Qualified Teams</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/bronze'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/Valorant/leagues/lpl-leagues/open'>
                                    <h1 className='Leagueh1'>Open Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/Valorant/leagues/lpl-leagues/open"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Open</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/Valorant/leagues/lpl-leagues/open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="/games/Valorant/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_LPL;