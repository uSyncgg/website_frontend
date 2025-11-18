import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
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
                {/* Ensure CustomLink/CustomDropLink handle their 'to' prop correctly, it should be 'to' not 'href' for react-router Link */}
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

// Ensure 'href' is actually 'to' for react-router Link
const CustomLink = ({ to, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link id="navbarLink" to={to} {...props}> {/* Changed href to to */}
        {children}
      </Link>
    </li>
  );
};

// Ensure 'href' is actually 'to' for react-router Link
const CustomDropLink = ({ to, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active mNavLink" : "mNavLink"}>
      <Link id="navbarDropLink" to={to} {...props}> {/* Changed href to to */}
        {children}
      </Link>
    </li>
  );
};

const CustomLinkGameDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  // Mouse events for hover
  const handleMouseEnter = () => setShowMenu(true);
  const handleMouseLeave = () => setShowMenu(false);

  // Keyboard events for focus/blur and Enter/Space
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default scroll for spacebar
      setShowMenu(prev => !prev);
    } else if (event.key === 'Escape') {
      setShowMenu(false);
    }
  };

  const handleFocus = () => setShowMenu(true); // Show dropdown on focus
  const handleBlur = (event) => {
    // Only hide if focus moves outside the dropdown area
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowMenu(false);
    }
  };


  return (
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus} // New: handle focus
      onBlur={handleBlur}   // New: handle blur
    >
      {/* 
        Make the span focusable with tabIndex="0" and add keyboard interaction.
        Use role="button" to convey its interactive nature to screen readers.
        Add aria-haspopup and aria-expanded for accessibility.
      */}
      <span 
        className="dropbtn" 
        tabIndex="0" 
        role="button" 
        aria-haspopup="true" 
        aria-expanded={showMenu}
        onKeyDown={handleKeyDown} // New: keyboard interaction
      >
        {title} <i className='fa-solid fa-caret-down'></i>
      </span>
      {showMenu && (
        <ul className="dropdown-games-content">{children}</ul>
      )}
    </li>
  );
};

const CustomLinkMoreDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => setShowMenu(true);
  const handleMouseLeave = () => setShowMenu(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setShowMenu(prev => !prev);
    } else if (event.key === 'Escape') {
      setShowMenu(false);
    }
  };

  const handleFocus = () => setShowMenu(true);
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowMenu(false);
    }
  };

  return (
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <span 
        className="dropbtn" 
        tabIndex="0" 
        role="button" 
        aria-haspopup="true" 
        aria-expanded={showMenu}
        onKeyDown={handleKeyDown}
      >
        {title} <i className='fa-solid fa-caret-down'></i>
      </span>
      {showMenu && (
        <ul className="dropdown-more-content">{children}</ul>
      )}
    </li>
  );
};

const MobileCustomLinkDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(prev => !prev);

  // Keyboard events for focus/blur and Enter/Space
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default scroll for spacebar
      toggleMenu();
    } else if (event.key === 'Escape') {
      setShowMenu(false);
    }
  };
  
  // Mobile dropdowns are usually click-based, so focus/blur might be simpler
  // We'll primarily rely on the onClick and keydown for toggling.
  // The focus styling will still apply to the span.

  return (
    <li className="dropdown-wrapper mNavLink">
      <span 
        className="dropbtn mNavLink" 
        onClick={toggleMenu} 
        tabIndex="0" 
        role="button" 
        aria-haspopup="true" 
        aria-expanded={showMenu}
        onKeyDown={handleKeyDown} // New: keyboard interaction
      >
        {title} <i className='fa-solid fa-caret-down'></i>
      </span>
      {showMenu && (
        <ul className="dropdown-content-mobile">{children}</ul>
      )}
    </li>
  );
};

export default Navbar;
