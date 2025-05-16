import '../CoD/Cod.css'
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';
const CS2_Wagers = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Wagers for Counter-Strike 2 players looking to make money gaming. Play for $ and showcase your earnings." />
            </Helmet>
        <div>
            <div className='Header-Img-l cs2-wagers-header'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Head-to-Head</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/wagers/dubbzcs2'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Dubbz</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/wagers/dubbzcs2"><img src="https://i.imgur.com/cgPHyyf.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/wagers/dubbzcs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/CS2/wagers/showdowngaming_cs2'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Showdown Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/wagers/showdowngaming_cs2"><img src="https://i.imgur.com/1UTQLkh.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/wagers/showdowngaming_cs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 mx-auto space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/CS2/wagers/gamersaloon_cs2'>
                                    <h1 className='Leagueh1 hide-on-mobile'>GamerSaloon</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/CS2/wagers/gamersaloon_cs2"><img src="https://i.imgur.com/MFqfurA.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/CS2/wagers/gamersaloon_cs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default CS2_Wagers;