import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import Group59 from '../assets/Group 59.png';


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const Contacts = () => {
    const isMobile = useIsMobile();

    const cardStyle = {
        backgroundColor: '#0f172a',
        borderRadius: '1.25rem',
        padding: isMobile ? '1.5rem' : '2rem',
        border: '1px solid #60a5fa',
        boxShadow: '0 8px 30px rgba(96, 165, 250, 0.2)',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '500',
        fontSize: '0.875rem',
        color: '#bfdbfe',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        backgroundColor: '#1f2937',
        border: '1px solid #4b5563',
        color: '#fff',
        fontSize: '0.875rem',
    };

    return (
        <section id="contact" style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 1rem' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#7dd3fc',
                    marginBottom: '3rem'
                }}>
                    Contacts
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {/* Contact Info */}
                    <div style={cardStyle}>
                        <h3 style={{
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #60a5fa, #2563eb)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '2rem'
                        }}>
                            Let’s Talk
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: '1.5rem',
                            flexWrap: 'wrap',
                        }}>
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    color: '#bfdbfe',
                                    lineHeight: '1.8',
                                    fontSize: '1rem',
                                    marginBottom: '1rem',
                                    marginLeft: isMobile ? '0' : '2rem',
                                    width: '80%'
                                }}>
                                    I'm always eager to collaborate on innovative projects, meaningful partnerships, or creative ventures. If you have an idea, opportunity, or simply want to connect—let’s start something great together.
                                </p>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    fontSize: '0.95rem',
                                    marginTop: '2rem',
                                    marginLeft: isMobile ? '0' : '2rem'
                                }}>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <FaEnvelope style={{ color: '#60a5fa', marginRight: '0.75rem' }} />
                                        <a href="mailto:cablaida.meryrose.dll@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                                            cablaida.meryrose.dll@gmail.com
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <FaPhone style={{ color: '#60a5fa', marginRight: '0.75rem' }} />
                                        <span>+63 9812458714</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaMapMarkedAlt style={{ color: '#60a5fa', marginRight: '0.75rem' }} />
                                        <span>Brgy. Ibas, Tayabas City, Quezon, Philippines</span>
                                    </li>
                                </ul>
                            </div>

                            <img
                                src={Group59}
                                alt="Collaboration"
                                style={{
                                    width: isMobile ? '100%' : '300px',
                                    height: isMobile ? 'auto' : '400px',
                                    borderRadius: '1rem',
                                    objectFit: 'cover',
                                    border: '2px solid #60a5fa',
                                    boxShadow: '0 4px 20px rgba(96, 165, 250, 0.4)',
                                    marginLeft: isMobile ? '0' : '-100px',
                                    alignSelf: isMobile ? 'center' : 'flex-start',
                                }}
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={cardStyle}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={labelStyle}>Your Name</label>
                                <input type="text" placeholder="Enter Your Name" style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="email" style={labelStyle}>Email</label>
                                <input type="email" placeholder="Enter Your Email" style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="message" style={labelStyle}>Message</label>
                                <textarea rows="5" placeholder="Enter Your Message" style={{ ...inputStyle, resize: 'none' }} />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    background: 'linear-gradient(to right, #60a5fa, #2563eb)',
                                    color: '#fff',
                                    padding: '0.75rem 2.5rem',
                                    borderRadius: '9999px',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    alignSelf: 'start',
                                    transition: 'transform 0.3s',
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
