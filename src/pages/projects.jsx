import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaReact } from 'react-icons/fa';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const customDescriptions = {
        'Advanced-API-Usage-SearchBar': 'A project demonstrating advanced API integration and UI rendering techniques.',
        'ASSIGNMENT1': 'My first assignment, covering basic frontend concepts and layout practices.',
        'ASSIGNMENT-2': 'The second assignment focusing on component-based design and interactivity.',
        'enrollmentform': 'An interactive form for student enrollment with validation and user-friendly design.',
        'Finals_On_PELEC_204': 'My final project for PELEC204, showcasing everything I’ve learned in the course.',
        'Netlify-ni-Mery': 'A deployment-ready project hosted on Netlify, demonstrating production practices.',
        'state-Management': 'A demo app exploring different state management techniques in React.',
    };

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setTimeout(async () => {
                    const response = await axios.get('https://api.github.com/users/Cablaida-Meryrose/repos');
                    const filteredRepos = response.data.filter(repo => repo.name !== 'AllAboutMeow');
                    setRepos(filteredRepos);
                    setLoading(false);
                }, 1500);
            } catch (error) {
                console.error('Failed to fetch repos:', error);
                setLoading(false);
            }
        };

        fetchRepos();

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Responsive adjustments
    const isSmall = windowWidth <= 684;
    const isMobile = windowWidth <= 480;

    const styles = {
        section: {
            background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
            color: '#fff',
            padding: '60px 20px',
            minHeight: 'calc(100vh - 128px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        container: {
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
        },
        heading: {
            fontSize: isMobile ? '2rem' : '2.8rem',
            textAlign: 'center',
            marginBottom: '10px',
            color: '#93c5fd',
            fontWeight: '700',
        },
        underline: {
            height: '4px',
            width: '90px',
            margin: '10px auto 40px',
            background: '#60a5fa',
            borderRadius: '6px',
            boxShadow: '0 0 12px #60a5fa',
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        card: {
            background: '#1e293b',
            padding: isMobile ? '10px' : isSmall ? '12px' : '25px',
            borderRadius: '24px',
            border: '1px solid #60a5fa55',
            boxShadow: '0 10px 30px rgba(96, 165, 250, 0.15)',
            transition: 'all 0.3s ease',
            width: '100%',
            height: isMobile ? '150px' : isSmall ? '160px' : '120px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            position: 'relative',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
        },
        icon: {
            background: '#60a5fa',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            marginRight: '10px',
            boxShadow: '0 4px 12px rgba(96,165,250,0.4)',
        },
        title: {
            fontSize: isMobile ? '1rem' : isSmall ? '1.1rem' : '1.3rem',
            fontWeight: '600',
            color: '#cbd5e1',
            marginRight: '20px',
            flex: 1,
        },
        description: {
            fontSize: isMobile ? '0.6rem' : isSmall ? '0.8rem' : '1rem',
            color: '#e2e8f0',
            lineHeight: '1.5',
            marginRight: '20px',
            flex: 1,
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            display: 'inline-block',
            marginTop: '14px',
            padding: '8px 14px',
            fontSize: isMobile ? '0.6rem' : isSmall ? '0.75rem' : '0.875rem',
            borderRadius: '30px',
            textDecoration: 'none',
            color: '#fff',
            transition: 'all 0.3s ease',
            marginBottom: '10px',
            cursor: 'pointer',
        },
        repoButton: {
            background: '#60a5fa',
        },
        siteButton: {
            background: '#93c5fd',
        },
        loadingSpinner: {
            width: '3rem',
            height: '3rem',
            border: '4px solid #60a5fa',
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: 'auto',
        },
        verticalBar: {
            borderLeft: '2px solid #60a5fa',
            height: '80%',
            margin: '0 10px',
        },
    };

    return (
        <div style={styles.section} id="projects">
            <div style={styles.container}>
                <h2 style={styles.heading}>My Projects</h2>
                <div style={styles.underline}></div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div style={styles.loadingSpinner}></div>
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {repos.map((repo) => (
                            <div key={repo.id} style={styles.card}>
                                <div style={styles.icon}>
                                    <FaReact />
                                </div>
                                <h3 style={styles.title}>{repo.name}</h3>
                                <div style={styles.verticalBar}></div>
                                <p style={styles.description}>
                                    {repo.description || customDescriptions[repo.name] || 'No description provided.'}
                                </p>
                                <div style={styles.verticalBar}></div>
                                <div style={styles.buttonContainer}>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ ...styles.button, ...styles.repoButton }}
                                    >
                                        View Repo
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ ...styles.button, ...styles.siteButton }}
                                        >
                                            View Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
