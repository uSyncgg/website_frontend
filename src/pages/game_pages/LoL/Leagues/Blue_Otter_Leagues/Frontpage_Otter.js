import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Otter = () => {
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
                                <a href='/games/LoL/leagues/blue-otter-leagues/masters'>
                                    <h1 className='Leagueh1'>Masters League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/masters"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>600LP+</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/masters'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/diamond'>
                                    <h1 className='Leagueh1'>Diamond League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/diamond"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 1 cap / One Masters</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/diamond'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/emerald'>
                                    <h1 className='Leagueh1'>Emerald League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/emerald"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Emerald 1 cap / One Diamond 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/emerald'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/plat'>
                                    <h1 className='Leagueh1'>Platinum League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/plat"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap / One Emerald 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/plat'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/gold'>
                                    <h1 className='Leagueh1'>Gold League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/gold"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap / One Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='/games/LoL/leagues/blue-otter-leagues/draft'>
                                    <h1 className='Leagueh1'>Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/LoL/leagues/blue-otter-leagues/draft"><img src="https://i.imgur.com/RaTizzw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 4 - Diamond 1</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/LoL/leagues/blue-otter-leagues/draft'>
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

export default Frontpage_Otter;