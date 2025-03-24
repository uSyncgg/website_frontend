import 'bootstrap/dist/css/bootstrap.css';
import './playground.css';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)


function Playground() {

  const location = window.location.pathname;  

  const handleGamesButtonClick = () => {
    window.location.href = "/games";
  }

  const handleLansButtonClick = () => {
    window.location.href = "/lans";
  }
  
  const handleLeaguesButtonClick = () => {
    window.location.href = "/leagues";
  }

  const handleTournamentsButtonClick = () => {
    window.location.href = "/tournaments";
  }

  const handleHomeClick = () => {
    window.location.href = "/";
  }

  const handleComingSoonButtonClick = () => {
    window.location.href = "/Comingsoon";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><img src="https://i.imgur.com/F5lNU1H.png" alt="uSync Logo" id="usync-nav-logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className="collapse navbar-collapse navbar-total-container" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className={`nav-item ${location === '/' ? 'item-active' : ''}`}>
            <a className="nav-link" href="/">Home</a>
          </li> */}
          <li className={`nav-item dropdown ${location.includes('/Tournaments') ? 'title-active' : ''}`}>
            <button className="nav-button" onClick={handleHomeClick}>
                Home
            </button>
          </li>
          <li className={`nav-item dropdown ${(location.startsWith('/games') && !location.includes('/leagues') && !location.includes('/Tournaments') && !location.includes('/lans'))? 'title-active' : ''}`}>
            {/* <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Games
            </a> */}
            <button id='games-button' className="nav-button" onClick={handleGamesButtonClick}>
              Games
            </button>
            {/* <div className="dropdown-menu bg-dark">
              <a className={`dropdown-item ${location === '/games/call-of-duty' ? 'item-active' : ''}`} href="/games/call-of-duty">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone' ? 'item-active' : ''}`} href="/games/warzone">Warzone</a>
              <a className={`dropdown-item ${location === '/games/halo' ? 'item-active' : ''}`} href="/games/halo">Halo</a>
              <a className={`dropdown-item ${location === '/games/LoL' ? 'item-active' : ''}`} href="/games/LoL">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague' ? 'item-active' : ''}`} href="/games/RocketLeague">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant' ? 'item-active' : ''}`} href="/games/Valorant">Valorant</a>
              <a className={`dropdown-item ${location === '/games/CS2' ? 'item-active' : ''}`} href="/games/CS2">Counter-Strike 2</a>
            </div> */}
          </li>
          <li className={`nav-item dropdown ${location.includes('/leagues') ? 'title-active' : ''}`}>
            <button className="nav-button" onClick={handleLeaguesButtonClick}>
              Leagues ⏷
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/games/call-of-duty/leagues' ? 'item-active' : ''}`} href="/games/call-of-duty/leagues">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone/leagues' ? 'item-active' : ''}`} href="/games/warzone/leagues">Warzone</a>
              <a className={`dropdown-item ${location === '/games/halo/leagues' ? 'item-active' : ''}`} href="/games/halo/leagues">Halo</a>
              <a className={`dropdown-item ${location === '/games/LoL/leagues' ? 'item-active' : ''}`} href="/games/LoL/leagues">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague/leagues' ? 'item-active' : ''}`} href="/games/RocketLeague/leagues">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant/leagues' ? 'item-active' : ''}`} href="/games/Valorant/leagues">Valorant</a>
              <a className={`dropdown-item ${location === '/games/CS2/leagues' ? 'item-active' : ''}`} href="/games/CS2/leagues">Counter-Strike 2</a>
            </div>
          </li>
          <li className={`nav-item dropdown ${location.includes('/lans') ? 'title-active' : ''}`}>
            <button className="nav-button" onClick={handleLansButtonClick}>
              LANs ⏷
            </button>
            <div className="dropdown-menu bg-dark">
              <a className={`dropdown-item ${location === '/games/call-of-duty/lans' ? 'item-active' : ''}`} href="/games/call-of-duty/lans">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone/lans' ? 'item-active' : ''}`} href="/games/warzone/lans">Warzone</a>
              <a className={`dropdown-item ${location === '/games/halo/lans' ? 'item-active' : ''}`} href="/games/halo/lans">Halo</a>
              <a className={`dropdown-item ${location === '/games/LoL/lans' ? 'item-active' : ''}`} href="/games/LoL/lans">League of Legends</a>
              {/*<a className={`dropdown-item ${location === '/games/RocketLeague/lans' ? 'item-active' : ''}`} href="/games/RocketLeague/lans">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant/lans' ? 'item-active' : ''}`} href="/games/Valorant/lans">Valorant</a>*/}
            </div>
          </li>
          <li className={`nav-item dropdown ${location.includes('/Tournaments') ? 'title-active' : ''}`}>
            <button className="nav-button" onClick={handleTournamentsButtonClick}>
              Tournaments
            </button>
              {/*<a className={`dropdown-item ${location === '/games/warzone' ? 'item-active' : ''}`} href="/games/warzone">Warzone</a>
              <a className={`dropdown-item ${location === '/games/LoL' ? 'item-active' : ''}`} href="/games/LoL">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/halo' ? 'item-active' : ''}`} href="/games/halo">Halo</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague' ? 'item-active' : ''}`} href="/games/RocketLeague">Rocket League</a>
  <a className={`dropdown-item ${location === '/games/Valorant' ? 'item-active' : ''}`} href="/games/Valorant">Valorant</a> */}
          </li>
          <li className={`nav-item dropdown ${location.startsWith('/more') ? 'title-active' : ''}`}>
            <button className="nav-button" href="#" id="navbarDropdownMenuLink">
              More ⏷
            </button>
            <div className="dropdown-menu bg-dark more-dropdown-container" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/more/verification' ? 'item-active' : ''}`} href="/more/verification">Verification</a>
              <a className={`dropdown-item ${location === '/more/eventhost' ? 'item-active' : ''}`} href="/more/eventhost">Post Your Event</a>
              <a className={`dropdown-item ${location === '/more/contactus' ? 'item-active' : ''}`} href="/more/contactus">Contact Us</a>
              <a className={`dropdown-item ${location === '/more/FAQ' ? 'item-active' : ''}`} href="/more/FAQ">FAQs</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Playground;