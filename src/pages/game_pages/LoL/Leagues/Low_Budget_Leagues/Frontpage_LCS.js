import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_LCS = () => {
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
                                <a href='/games/LoL/leagues/low-budget-leagues/executive'>
                                    <h1 className='Leagueh1'>Executive League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/low-budget-leagues/executive"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond AVG</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/low-budget-leagues/executive'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/low-budget-leagues/financial'>
                                    <h1 className='Leagueh1'>Financial League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/low-budget-leagues/financial"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Emerald AVG / Two Diamond 3s</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/low-budget-leagues/financial'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/low-budget-leagues/commercial'>
                                    <h1 className='Leagueh1'>Commercial League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/low-budget-leagues/commercial"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum AVG / One Emerald 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/low-budget-leagues/commercial'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/low-budget-leagues/economy'>
                                    <h1 className='Leagueh1'>Economy League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/low-budget-leagues/economy"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold AVG / One Platinum 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/low-budget-leagues/economy'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="/games/LoL/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_LCS;