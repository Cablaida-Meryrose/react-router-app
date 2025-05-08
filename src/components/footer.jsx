import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <style>
                {`
                    @media (max-width: 768px) {
                        .footer-container {
                            flex-direction: column !important;
                            text-align: center;
                            gap: 16px !important;
                        }

                        .social-icons {
                            justify-content: center;
                            flex-wrap: wrap;
                            gap: 16px !important;
                        }

                        .footer-links {
                            flex-direction: column;
                            gap: 8px !important;
                        }
                    }
                `}
            </style>

            <footer style={{ backgroundColor: 'black', color: 'white', padding: '15px 0', fontFamily: 'sans-serif' }}>
                {/* Divider */}
                <div
                    className="footer-container"
                    style={{
                        borderTop: '1px solid #1E3A8A',
                        paddingTop: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    {/* Copyright */}
                    <p style={{ color: '#B0E0E6', fontSize: '0.875rem' }}>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="social-icons" style={{ display: 'flex', gap: '12px', fontSize: '1.5rem' }}>
                        <a
                            href="https://www.facebook.com/share/18cG81U6Uw/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                            style={{ color: '#00BFFF', transition: 'color 0.3s' }}
                            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                            onMouseOut={(e) => (e.target.style.color = '#00BFFF')}
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://github.com/Cablaida-Meryrose"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            style={{ color: '#00BFFF', transition: 'color 0.3s' }}
                            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                            onMouseOut={(e) => (e.target.style.color = '#00BFFF')}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/cabz_mrei?igsh=OGhiN2w1dDlnZXBs"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            style={{ color: '#00BFFF', transition: 'color 0.3s' }}
                            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                            onMouseOut={(e) => (e.target.style.color = '#00BFFF')}
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div
                        className="footer-links"
                        style={{
                            display: 'flex',
                            gap: '16px',
                            fontSize: '0.8rem',
                        }}
                    >
                        <a
                            href="#"
                            style={{
                                color: '#ADD8E6',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                            onMouseOut={(e) => (e.target.style.color = '#ADD8E6')}
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            style={{
                                color: '#ADD8E6',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                            onMouseOut={(e) => (e.target.style.color = '#ADD8E6')}
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
