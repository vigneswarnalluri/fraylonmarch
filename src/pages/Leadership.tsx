import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiLinkedin, FiSearch, FiFilter } from 'react-icons/fi';
import { executiveCouncil, globalLeadership } from '../data/leadershipData';
import DomeGallery from '../components/DomeGallery';
import './Leadership.css';

const familyInsights = [
    {
        title: "The Architecture of a Global Family",
        excerpt: "How Fraylon's internal culture drives innovation and resilience across borders.",
        category: "Culture",
        date: "March 2026",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Scaling Roots in the Digital Soil",
        excerpt: "Strategies for organic growth and technological adoption in emerging systems.",
        category: "Strategy",
        date: "Feb 2026",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Future-Proofing the Canopy",
        excerpt: "Investing in the next generation of leadership and technical talent.",
        category: "Talent",
        date: "Jan 2026",
        image: "https://images.pexels.com/photos/7092453/pexels-photo-7092453.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const Leadership = () => {
    return (
        <div className="leadership-page">
            {/* --- Corporate Hero --- */}
            <section className="corporate-hero">
                <div className="container">
                    <motion.div 
                        className="hero-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="corporate-tag">NETWORK LEADERSHIP, GOVERNANCE AND DIVERSITY</span>
                        <h1>Our Leadership.</h1>
                        <p>The Fraylon Network is led by a diverse leadership team, whose vision is to build trust in society and solve important problems.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- Executive Council (CEO/CTO) --- */}
            <section className="council-section">
                <div className="container">
                    <div className="section-title-box">
                        <span className="line-tag">EXECUTIVE COUNCIL</span>
                        <div className="static-filter-bar">
                            <span className="filter-label"><FiFilter /> All Regions</span>
                            <span className="filter-label"><FiSearch /> Search Directory</span>
                        </div>
                    </div>
                    <div className="council-grid">
                        {executiveCouncil.map((member, i) => (
                            <motion.div 
                                key={member.name}
                                className="council-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                            >
                                <div className="member-image-wrapper">
                                    <img src={member.image} alt={member.name} style={{ objectPosition: member.imagePosition || 'top center' }} />
                                    <div className="social-overlay">
                                        <FiLinkedin />
                                    </div>
                                </div>
                                <div className="member-profile">
                                    <span className="member-subtitle">{member.role}</span>
                                    <h3>{member.name}</h3>
                                    <p className="member-bio">{member.shortBio}</p>
                                    <Link to={`/leadership/${member.slug}`} className="read-bio-btn">VIEW FULL PROFILE</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Global Operations Leadership --- */}
            <section className="operations-section">
                <div className="container">
                    <div className="section-title-box">
                        <span className="line-tag">GLOBAL OPERATIONS</span>
                    </div>
                    <div className="operations-grid">
                        {globalLeadership.map((member, i) => (
                            <motion.div 
                                key={member.name}
                                className="leader-profile-row"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                {member.image && (
                                    <div className="leader-row-avatar">
                                        <img src={member.image} alt={member.name} style={{ objectPosition: member.imagePosition || 'top center' }} />
                                    </div>
                                )}
                                <div className="row-content">
                                    <div className="row-header">
                                        <span className="role">{member.role}</span>
                                        <Link to={`/leadership/${member.slug}`} className="name-link">
                                            <h4>{member.name}</h4>
                                        </Link>
                                    </div>
                                    <p>{member.shortBio}</p>
                                </div>
                                <div className="row-action">
                                    <Link to={`/leadership/${member.slug}`} className="row-arrow">
                                        <FiLinkedin className="ln-icon" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Leadership Gallery --- */}
            <section className="leadership-gallery-section" style={{ height: '1000px', backgroundColor: '#ffffff', position: 'relative' }}>
                <div className="container" style={{ position: 'absolute', top: '40px', left: '0', right: '0', zIndex: 10, pointerEvents: 'none' }}>
                    <div className="section-title-box">
                        <span className="line-tag" style={{ color: '#000000', borderColor: 'rgba(0,0,0,0.2)' }}>LEADERSHIP NETWORK IN MOTION</span>
                    </div>
                </div>
                <DomeGallery
                    images={[...executiveCouncil, ...globalLeadership].filter(m => m.image).map(m => ({ src: m.image, alt: m.name, imagePosition: m.imagePosition }))}
                    fit={0.9}
                    minRadius={500}
                    maxVerticalRotationDeg={10}
                    segments={34}
                    dragDampening={2}
                    grayscale
                    overlayBlurColor="#ffffff"
                />
            </section>

            {/* --- MNC Insights --- */}
            <section className="corporate-insights">
                <div className="container">
                    <div className="insights-header">
                        <h2>Strategic Insights</h2>
                        <p>Thought leadership from our global senior analysts.</p>
                    </div>
                    <div className="insights-grid">
                        {familyInsights.map((insight) => (
                            <motion.div 
                                key={insight.title}
                                className="insight-card-mnc"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-top">
                                    <img src={insight.image} alt={insight.title} />
                                    <span className="category-mnc">{insight.category}</span>
                                </div>
                                <div className="card-bottom">
                                    <span className="date">{insight.date}</span>
                                    <h4>{insight.title}</h4>
                                    <p>{insight.excerpt}</p>
                                    <button className="link-arrow">DISCOVER MORE <FiArrowRight /></button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Minimalist Quote --- */}
            <section className="corporate-quote">
                <div className="container">
                    <div className="quote-wrap">
                        <p>"Innovation is the pursuit of building architectures that survive the test of time."</p>
                        <span className="attribution">THE FRAYLON INSTITUTIONAL PHILOSOPHY</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Leadership;
