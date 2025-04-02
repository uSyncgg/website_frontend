import React, { useState, useEffect, useRef } from 'react';

const ResponsiveStickyElement = ({ children, className, mobileBreakpoint = 768 }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const elementRef = useRef(null);
  const wrapperRef = useRef(null);
  const triggerPositionRef = useRef(0);
  const [elementWidth, setElementWidth] = useState(0);

  // Check if we're on desktop and update on resize
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.innerWidth >= mobileBreakpoint;
      setIsDesktop(newIsDesktop);
    };

    // Initial check
    checkScreenSize();

    // Set up resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [mobileBreakpoint]);

  // Handle scroll behavior
  useEffect(() => {
    if (!elementRef.current || !wrapperRef.current) return;

    // Store the initial position and width
    const setInitialPosition = () => {
      if (elementRef.current && wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        triggerPositionRef.current = rect.top + window.scrollY;
        setElementWidth(rect.width);
      }
    };

    setInitialPosition();

    const handleScroll = () => {
      if (!isDesktop || !elementRef.current) return;
      
      setIsSticky(window.scrollY > triggerPositionRef.current);
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setInitialPosition);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setInitialPosition);
    };
  }, [isDesktop]);

  // Styling for the sticky element
  const stickyStyle = isSticky && isDesktop ? {
    position: 'fixed',
    top: 0,
    width: `${elementWidth}px`, // Use the original width
    // Don't change the left position, let it stay where it was
  } : {};

  return (
    <div ref={wrapperRef} className={`sticky-wrapper ${className}`} style={{ position: 'relative' }}>
      <div 
        ref={elementRef}
        className={`sticky-element ${isSticky && isDesktop ? 'is-sticky' : ''}`}
        style={stickyStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default ResponsiveStickyElement;