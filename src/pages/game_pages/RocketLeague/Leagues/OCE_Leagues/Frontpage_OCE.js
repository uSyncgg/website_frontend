import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_OCE = () => {
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
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1'>Division 1 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$5100 Team Salary cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1'>Division 2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$3100 Team Salary cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <h1 className='Leagueh1'>Division 3 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>$1300 Team Salary Cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues/divisions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/RocketLeague/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_OCE;