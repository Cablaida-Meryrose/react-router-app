import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import rosas from '../assets/rosas.png';

const NavLinks = ({ isMobile, onClick }) => {
  const paths = ['/', '/about', '/services', '/projects'];
  const names = ['Home', 'About', 'Services', 'Projects'];

  return (
    <div
      style={{
        display: isMobile ? 'block' : 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '15px' : '30px',
        padding: isMobile ? '10px 0' : '0',
      }}
    >
      {paths.map((path, idx) => (
        <NavLink
          key={idx}
          to={path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#00BFFF' : 'white',
            transition: 'color 0.3s',
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: '800',
            display: 'block',
          })}
          onClick={onClick}
          onMouseOver={(e) => (e.target.style.color = '#FFD700')}
          onMouseOut={(e) => (e.target.style.color = '#00BFFF')}
        >
          {names[idx]}
        </NavLink>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); // close menu if resizing up
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <img
            src={rosas}
            alt="Logo"
            style={{
              width: isMobile ? '120px' : '150px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </NavLink>

        {/* Hamburger for Mobile */}
        {isMobile ? (
          <div>
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              ☰
            </button>
            {menuOpen && (
              <div style={{ marginTop: '10px' }}>
                <NavLinks isMobile={true} onClick={() => setMenuOpen(false)} />
              </div>
            )}
          </div>
        ) : (
          // Desktop Navigation
          <div>
            <NavLinks isMobile={false} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
