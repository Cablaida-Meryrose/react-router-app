import React from 'react';
import Group35 from '../assets/Group 35.png';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 128px)',
        background: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          justifyItems: 'center',
          maxWidth: '640px',
          width: '100%',
          padding: '2rem',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        {/* Profile Image with Hover Effect */}
        <img
          src={Group35}
          alt="Mery Rose Cablaida"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '6px solid #93c5fd',
            boxShadow: '0 0 30px rgba(147, 197, 253, 0.6)',
            marginBottom: '1.5rem',
            transition: 'all 0.3s ease-in-out',  // Smooth transition
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 0 50px rgba(147, 197, 253, 0.8)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 30px rgba(147, 197, 253, 0.6)';
          }}
        />

        {/* Name Section */}
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            lineHeight: '1.3',
            marginBottom: '1rem',
            color: '#ffffff',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          }}
        >
          I'm{' '}
          <span
            style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: '2.5rem',
              background: 'linear-gradient(to right, #ff7ee5, #6b80f3, #8a63e6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
            }}
          >
            Mery Rose Cablaida
          </span>
          ,<br /> Aspiring Full-Stack Developer
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.1rem',
            color: '#dbeafe',
            fontWeight: '300',
            marginBottom: '2rem',
          }}
        >
          Passionate about clean backend code, creative logic, and tech with heart.
        </p>

        {/* Glassmorphic Hire Me Button */}
        <NavLink to="/contact">
          <button
            style={{
              padding: '0.75rem 2.5rem',
              borderRadius: '999px',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'rgba(96, 165, 250, 0.15)',
              border: '1px solid #93c5fd',
              color: '#ffffff',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 4px 20px rgba(147, 197, 253, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 25px #3b82f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1.0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(147, 197, 253, 0.3)';
            }}
          >
            💎 Hire Me!
          </button>
        </NavLink>
      </div>

      {/* Keyframes for fade-in */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
