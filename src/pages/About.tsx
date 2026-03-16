import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import './About.css';

const MotionLink = motion(Link);

const About = () => {
    return (
        <div className="about-page">
            <SEO 
                title="About Us | Fraylon Technologies" 
                description="We are Fraylon. Architects of the Digital Future combining strategic foresight with deep technical expertise."
                url="https://fraylontech.com/about"
            />
            <div className="container">
                {/* --- Hero Section --- */}
                <div className="about-hero">
                    <motion.span
                        className="about-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Who We Are
                    </motion.span>
                    <motion.h1
                        className="about-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        We are Fraylon.<br /> Architects of the Digital Future.
                    </motion.h1>
                    <motion.p
                        className="about-lead"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        A global consultancy combining strategic foresight with deep technical expertise to build the enterprises of tomorrow.
                    </motion.p>
                </div>

                {/* --- Story Section --- */}
                <div className="about-story">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="story-heading">Engineering the next era of digital.</h2>
                        <p className="story-text">
                            Founded in 2025, Fraylon began with a simple belief: that technology should not just support business, but drive it. What started as a vision for the next generation of digital infrastructure has rapidly evolved into a strategic partner for forward-thinking enterprises.
                        </p>
                        <p className="story-text">
                            We don't just write code; we solve complex problems for the modern age. From cloud-native systems to pioneering autonomous AI agents, our work sits at the intersection of robust engineering and visionary strategy.
                        </p>
                        <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-primary)' }}>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', fontStyle: 'italic', color: 'var(--color-brand-black)' }}>
                                "Our mission is to empower organizations to navigate the digital age with confidence and agility."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="story-image-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Fraylon Team Collaboration"
                            className="story-img"
                        />
                    </motion.div>
                </div>

                {/* --- Stats Section --- */}
                <div className="about-stats">
                    <motion.div className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="stat-number">2025</span>
                        <span className="stat-label">Year Founded</span>
                    </motion.div>
                    <motion.div className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <span className="stat-number">40+</span>
                        <span className="stat-label">Successful Projects</span>
                    </motion.div>
                    <motion.div className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <span className="stat-number">2</span>
                        <span className="stat-label">Strategic Hubs</span>
                    </motion.div>
                    <motion.div className="stat-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <span className="stat-number">80+</span>
                        <span className="stat-label">Specialized Experts</span>
                    </motion.div>
                </div>
            </div>

            {/* --- Values Section --- */}
            <div className="values-section">
                <div className="container">
                    <div className="values-header">
                        <span className="about-tag">Our Core Principles</span>
                        <h2 className="story-heading">Driven by values, defined by results.</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <FaLightbulb className="value-icon" />
                            <h3>Innovation First</h3>
                            <p>We believe in challenging the status quo. We don't just follow trends; we set them by experimenting with emerging technologies.</p>
                        </div>
                        <div className="value-card">
                            <FaShieldAlt className="value-icon" />
                            <h3>Radical Integrity</h3>
                            <p>Trust is our currency. We are transparent in our processes, honest in our advice, and accountable for our results.</p>
                        </div>
                        <div className="value-card">
                            <FaUsers className="value-icon" />
                            <h3>Client Obsession</h3>
                            <p>We measure our success by the success of our clients. We embed ourselves in your teams to truly understand your challenges.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Original CTA Section --- */}
            <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <img
                        src="https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1"
                        alt="Future City"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.8)' }}></div>
                </div>

                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
                    <h2 style={{ fontSize: '4rem', color: '#fff', marginBottom: '30px', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                        Ready to Shape <br /> the Future?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '50px', lineHeight: '1.6' }}>
                        Join a team that challenges the status quo. Discover your next career breakthrough at Fraylon.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <MotionLink
                            to="/careers"
                            className="btn"
                            whileTap={{ scale: 0.98 }}
                            style={{
                                background: '#00c6a5',
                                color: '#0f172a',
                                padding: '18px 45px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                borderRadius: '0',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            View Open Positions
                        </MotionLink>
                        <MotionLink
                            to="/leadership"
                            className="btn-outline"
                            whileTap={{ scale: 0.98 }}
                            style={{
                                borderColor: '#fff',
                                color: '#fff',
                                padding: '16px 45px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: '1px solid #fff',
                                background: 'transparent',
                                borderRadius: '0',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            Meet Leadership
                        </MotionLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
