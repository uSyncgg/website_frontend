import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Frontline = () => {
    return (
        <div>
            <header id='League-header'>
            <img src="https://i.imgur.com/UDHxFWg.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/champ'>
                                    <h1 className='Leagueh1'>Champ League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/champ"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1700+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/champ'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/vanguard'>
                                    <h1 className='Leagueh1'>Vanguard League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/vanguard"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1500-1699 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/vanguard'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/challenger'>
                                    <h1 className='Leagueh1'>Challenger League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/challenger"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1300 - 1499 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/RocketLeague/leagues/frontline-leagues/prospect'>
                                    <h1 className='Leagueh1'>Prospect League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/RocketLeague/leagues/frontline-leagues/prospect"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>1299 MMR and Lower</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/RocketLeague/leagues/frontline-leagues/prospect'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/RocketLeague/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_Frontline;