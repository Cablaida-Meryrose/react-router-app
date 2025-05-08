import React, { useState, useEffect } from 'react';
import Group58 from '../assets/Group 58.png';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 768;

  const styles = {
    section: {
      background: 'linear-gradient(to bottom, #0f172a, #000)',
      color: '#fff',
      padding: isMobile ? '40px 16px' : isTablet ? '60px 24px' : '80px 24px',
      minHeight: 'calc(100vh - 128px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: isMobile ? '20px' : isTablet ? '30px' : '50px',
      maxWidth: '1000px',
      width: '100%',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      transition: 'all 0.3s ease-in-out',
    },
    heading: {
      fontSize: isMobile ? '1.8rem' : isTablet ? '2.2rem' : '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#60a5fa',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    image: {
      width: isMobile ? '100px' : isTablet ? '130px' : '160px',
      height: isMobile ? '100px' : isTablet ? '130px' : '160px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #3b82f6',
      margin: '0 auto 30px',
      display: 'block',
      boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    imageHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 24px rgba(59,130,246,0.6)',
    },
    paragraph: {
      fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem',
      lineHeight: '1.8',
      color: '#e5e7eb',
      textAlign: 'center',
      marginBottom: '40px',
    },
    statsWrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: isMobile ? '20px' : '30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '30px',
    },
    stat: {
      textAlign: 'center',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    statHover: {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 24px rgba(59,130,246,0.4)',
    },
    statValue: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.8rem' : '2rem',
      fontWeight: '600',
      color: '#3b82f6',
    },
    statLabel: {
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#cbd5e1',
    },
  };

  // Track hover states for image and stats
  const [isImageHovered, setImageHovered] = useState(false);
  const [hoveredStatIndex, setHoveredStatIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <img
          src={Group58}
          alt="Profile"
          style={{
            ...styles.image,
            ...(isImageHovered ? styles.imageHover : {}),
          }}
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
        />
        <p style={styles.paragraph}>
          I'm currently a second-year BSIT student at Dalubhasaan ng Lungsod ng Lucena. I’m passionate about building real-world applications that solve problems and add value. I specialize in front-end development using ReactJS and TailwindCSS, and I’m constantly improving my skills with the goal of becoming a full-stack developer. I believe in continuous learning, strong logic, and keeping code clean and readable.
        </p>
        <div style={styles.statsWrapper}>
          {[
            { value: '2', label: 'Years of Experience' },
            { value: '10+', label: 'Completed Projects' },
            { value: '100%', label: 'Commitment to Growth' },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                ...styles.stat,
                ...(hoveredStatIndex === index ? styles.statHover : {}),
              }}
              onMouseEnter={() => setHoveredStatIndex(index)}
              onMouseLeave={() => setHoveredStatIndex(null)}
            >
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
