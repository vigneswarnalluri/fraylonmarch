import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiChevronRight, FiGlobe, FiMapPin } from 'react-icons/fi';
import { allLeaders } from '../data/leadershipData';
import './LeaderProfile.css';

const LeaderProfile: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const leader = allLeaders.find(l => l.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!leader) {
        return <Navigate to="/leadership" replace />;
    }

    return (
        <div className="leader-profile-page">
            {/* --- Elite Hero Section (Cinematic Editorial) --- */}
            <section className="profile-hero">
                <div className="container hero-container">
                    <div className="hero-layout">
                        <motion.div 
                            className="hero-text"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="leader-role-tag">{leader.role}</span>
                            <h1 className="leader-name-heading">
                                {leader.name.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {word} {i === 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h1>
                            <p className="leader-org-detail">Fraylon Technologies International Limited</p>
                            
                            <p className="leader-intro-para">{leader.shortBio}</p>
                            
                            <div className="leader-contact-links">
                                {leader.contact && (
                                    <a href={`mailto:${leader.contact}`} className="contact-link">
                                        CONTACT
                                    </a>
                                )}
                                {leader.linkedIn && (
                                    <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FiLinkedin />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-image-box"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="portrait-frame">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name} 
                                    style={{ objectPosition: leader.imagePosition || 'top center' }}
                                />
                                <div className="portrait-overlay"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Main Biography & Expertise --- */}
            <section className="profile-content-section">
                <div className="container">
                    <div className="bio-grid">
                        <motion.div 
                            className="main-bio"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {leader.fullBio.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </motion.div>
                        
                        <div className="sidebar-info">
                            <motion.div 
                                className="info-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h5><FiGlobe /> Global Jurisdiction</h5>
                                <p>Worldwide Strategic Operations</p>
                            </motion.div>
                            
                            <motion.div 
                                className="info-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h5><FiMapPin /> Base of Operation</h5>
                                <p>{leader.location || "Fraylon Global HQ"}</p>
                            </motion.div>
                            
                            <motion.div 
                                className="info-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h5>Principal Expertise</h5>
                                <ul>
                                    <li>Enterprise Digital Architecture</li>
                                    <li>AI Governance & Strategy</li>
                                    <li>Institutional Diversification</li>
                                    <li>Global Supply Chain Resilience</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="profile-cta">
                <div className="container">
                    <div className="cta-box">
                        <h3>Consult with {leader.name.split(' ')[0]}</h3>
                        <p>Discuss institutional roadmaps, strategic joint-ventures, or digital transformation frameworks with Fraylon’s top-tier leadership.</p>
                        <Link to="/contact" className="btn-mnc">Inquire Globally <FiChevronRight /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeaderProfile;
