import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const path = window.location.pathname;
  // If you are adding something to the navbar simply add a <CustomLink href="custompath">Page name</CustomLink> to the ul tag
  return (
        <nav className="nav">
          <a href="/" className="site-title">
              <img src="https://i.imgur.com/F5lNU1H.png" alt="uSync logo" />
          </a>
          <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'}></i>
          </div>
          <div className={click ? 'mobile-menu' : 'hide-mobile'}>
            <ul className='mobile-menu-ul'>
                <CustomLink className="cLink-mobile" to="/">Home</CustomLink>
                <MobileCustomLinkDropdown className="cLinkDropdown-mobile" title="Games">
                    <CustomDropLink className='cLinkText-mobile' to="/games/call-of-duty">Call of Duty</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/halo">Halo</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/LoL">League of Legends</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/RocketLeague">Rocket League</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/Valorant">Valorant</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/warzone">Warzone</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/games/CS2">Counter-Strike 2</CustomDropLink>
                </MobileCustomLinkDropdown>
                <CustomLink className="cLink-mobile" to="/Comingsoon">Coming Soon</CustomLink>
                <MobileCustomLinkDropdown className="cLinkDropdown-mobile" title="More">
                    <CustomDropLink className='cLinkText-mobile' to="/more/verification">Verification</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/more/eventhost">Event Host</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/more/contactus">Contact Us</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' to="/more/FAQ">FAQ</CustomDropLink>
                </MobileCustomLinkDropdown>
            </ul>
          </div>
          <ul className='webpage-ul'>
              <CustomLink className="cLink" to="/">Home</CustomLink>
              <CustomLinkGameDropdown className="cLinkDropdown" title="Games">
                  <CustomDropLink className='cLinkText' to="/games/call-of-duty">Call of Duty</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/halo">Halo</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/LoL">League of Legends</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/RocketLeague">Rocket League</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/Valorant">Valorant</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/warzone">Warzone</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/games/CS2">Counter-Strike 2</CustomDropLink>
              </CustomLinkGameDropdown>
              <CustomLink className="cLink" to="/Comingsoon">Coming Soon</CustomLink>
              <CustomLinkMoreDropdown className="cLinkDropdown" title="More">
                  <CustomDropLink className='cLinkText' to="/more/verification">Verification</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/more/eventhost">Event Host</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/more/contactus">Contact Us</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/playground">Playground</CustomDropLink>
                  <CustomDropLink className='cLinkText' to="/more/playground-two">Playground Two</CustomDropLink>
              </CustomLinkMoreDropdown>
          </ul>
        </nav>
  );
};

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <Link id="navbarLink" href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

const CustomDropLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active mNavLink" : "mNavLink"}>
      <Link id="navbarDropLink" href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

const CustomLinkGameDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropbtn">{title} <i className='fa-solid fa-caret-down'></i></span>
      {showMenu && (
        <ul className="dropdown-games-content">{children}</ul>
      )}
    </li>
  );
};

const CustomLinkMoreDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropbtn">{title} <i className='fa-solid fa-caret-down'></i></span>
      {showMenu && (
        <ul className="dropdown-more-content">{children}</ul>
      )}
    </li>
  );
};

const MobileCustomLinkDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <li className="dropdown-wrapper mNavLink">
      <span className="dropbtn mNavLink" onClick={toggleMenu}>
        {title} <i className='fa-solid fa-caret-down'></i>
      </span>
      {showMenu && (
        <ul className="dropdown-content-mobile">{children}</ul>
      )}
    </li>
  );
};


export default Navbar;