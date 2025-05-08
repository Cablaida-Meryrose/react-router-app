import React, { useEffect, useState } from 'react';

const services = [
  { icon: "💻", title: "Frontend Development", description: "Crafting elegant interfaces with ReactJS, built for modern web experiences." },
  { icon: "🎨", title: "UI/UX Design", description: "Designing intuitive, user-centered layouts with a touch of creativity and clarity." },
  { icon: "🔗", title: "API Integration", description: "Seamlessly connecting front-end applications with back-end services." },
  { icon: "📱", title: "Responsive Design", description: "Ensuring websites are beautifully functional across all devices." },
  { icon: "🛠️", title: "Debugging & Optimization", description: "Polishing performance and squashing bugs for smooth web interactions." },
  { icon: "🌟", title: "Portfolio Consulting", description: "Helping others build polished online portfolios that represent them well." }
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const styles = {
    section: {
      background: 'linear-gradient(to bottom, #000, #0f172a)',
      color: '#fff',
      padding: '60px 16px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    headingWrapper: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    heading: {
      fontSize: '2.5rem',
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700',
      letterSpacing: '1.2px',
    },
    underline: {
      height: '4px',
      width: '80px',
      margin: '10px auto 0',
      background: '#60a5fa',
      borderRadius: '5px',
      boxShadow: '0 0 10px #60a5fa',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '25px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '30px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 20px rgba(96, 165, 250, 0.4)',
    },
    icon: {
      fontSize: '2.8rem',
      marginBottom: '15px',
      background: 'linear-gradient(to right, #60a5fa, #93c5fd)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#bfdbfe',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      color: '#e2e8f0',
      lineHeight: '1.6',
    }
  };

  return (
    <div style={styles.section} id="services">
      <div style={styles.container}>
        <div style={styles.headingWrapper}>
          <h2 style={styles.heading}>My Services</h2>
          <div style={styles.underline}></div>
        </div>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={e => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, styles.card)}
            >
              <div style={styles.icon}>{service.icon}</div>
              <div style={styles.title}>{service.title}</div>
              <p style={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
