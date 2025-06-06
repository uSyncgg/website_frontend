import './Cod.css'
import { Helmet } from "react-helmet";
import Footer from '../../../Footer';
import useNavHeight from '../../hooks/NavbarHeight';

const Cod_Wagers = () => {
    useNavHeight();
    return (
        <>
            <Helmet>
              <meta name="description" content="Wagers for Call of Duty from every website out there. Find the best website to play Call of Duty wagers." />
            </Helmet>
        <div>
            {/* <header id='League-header'>
                <img src="https://i.imgur.com/wvSwn4l.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Wagers</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header> */}

            <div className='Header-Img-l cod-wagers-header-img'>
                <div className="games-leagues-header-title">
                    <h1 id="league-title">Wagers</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </div>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/cmg'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/eagent'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Esports Agent</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/eagent"><img src="https://i.imgur.com/mued0Qd.png" className='league-img' /></a>
                                    <a href="/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/eagent'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />


                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/oneup'>
                                    <h1 className='Leagueh1 hide-on-mobile'>One Up (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/oneup"><img src="https://i.imgur.com/wkSz5Le.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/oneup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/dropin'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/dropin"><img src="https://i.imgur.com/Onot7tG.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/dropin'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                        
                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/1v1me'>
                                    <h1 className='Leagueh1 hide-on-mobile'>1v1 Me (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/1v1me"><img src="https://i.imgur.com/BFNJpgg.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/1v1me'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/dubbz'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Dubbz</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/dubbz"><img src="https://i.imgur.com/cgPHyyf.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/dubbz'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    <div className='col-12 col-lg-6 space-on-bottom-mobile'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/the-esports-hub'>
                                    <h1 className='Leagueh1 hide-on-mobile'>The Esports Hub</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/the-esports-hub"><img src="https://i.imgur.com/2t8zzc5.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/the-esports-hub'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 bottom-card'>
                            <div className='league'>
                                <a href='/games/call-of-duty/wagers/ewagers'>
                                    <h1 className='Leagueh1 hide-on-mobile'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="/games/call-of-duty/wagers/ewagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='/games/call-of-duty/wagers/ewagers'>
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

export default Cod_Wagers;