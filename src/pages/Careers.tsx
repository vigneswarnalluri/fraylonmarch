import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaLightbulb, FaHeart, FaRocket, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Careers.css';

const Careers = () => {
    const jobs = [
        {
            category: 'Engineering',
            roles: [
                { id: 1, title: 'Senior Full Stack Engineer', location: 'Remote (US/EU)', type: 'Full-time' },
                { id: 2, title: 'AI Research Scientist', location: 'London, UK', type: 'Full-time' },
                { id: 3, title: 'DevOps Engineer', location: 'Bangalore, India', type: 'Full-time' }
            ]
        },
        {
            category: 'Product & Design',
            roles: [
                { id: 4, title: 'Lead Product Designer', location: 'New York, NY', type: 'Full-time' },
                { id: 5, title: 'Product Manager, Enterprise', location: 'Remote', type: 'Full-time' }
            ]
        },
        {
            category: 'Sales & Marketing',
            roles: [
                { id: 6, title: 'Enterprise Account Executive', location: 'Singapore', type: 'Full-time' }
            ]
        }
    ];

    return (
        <div className="careers-page container">
            <SEO title="Careers | Join the Fraylon Team | Fraylon Technologies" description="Explore career opportunities at Fraylon Technologies. Join a team of visionaries, builders, and strategists working on next-generation digital transformation and AI." />
            {/* Hero Section */}
            <motion.div
                className="careers-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="careers-title">Build the Future with Fraylon</h1>
                <p className="careers-subtitle">
                    We are a team of visionaries, builders, and strategists working on the cutting edge of AI and digital transformation. Join us in shaping tomorrow.
                </p>
                <a href="#open-positions" className="btn btn-primary">View Open Positions</a>
            </motion.div>

            {/* Culture / Values Section */}
            <div className="culture-section">
                <div className="section-header">
                    <h2 className="section-title">Why Join Us?</h2>
                    <p style={{ color: '#94a3b8', maxWidth: '600px' }}>
                        We don't just offer a job; we offer a platform for you to do the best work of your life.
                    </p>
                </div>

                <div className="values-grid">
                    <motion.div
                        className="value-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <FaGlobeAmericas className="value-icon" />
                        <h3>Global Impact</h3>
                        <p>Work on critical digital infrastructure for leading global enterprises. Your code will touch millions of lives across continents.</p>
                    </motion.div>

                    <motion.div
                        className="value-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaRocket className="value-icon" />
                        <h3>Innovation First</h3>
                        <p>We don't follow trends; we set them. Experiment with the latest in Agentic AI, Quantum Computing, and Sustainable Cloud.</p>
                    </motion.div>

                    <motion.div
                        className="value-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaLightbulb className="value-icon" />
                        <h3>Continuous Learning</h3>
                        <p>Stagnation is the enemy. We provide unlimited budgets for books, courses, and conferences to keep you ahead of the curve.</p>
                    </motion.div>

                    <motion.div
                        className="value-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <FaHeart className="value-icon" />
                        <h3>Wellness & Balance</h3>
                        <p>We believe in sustainable work. Enjoy comprehensive health coverage, flexible remote work policies, and mandatory downtime.</p>
                    </motion.div>
                </div>
            </div>

            {/* Hiring Process Section */}
            <div className="hiring-process container">
                <div className="section-header">
                    <h2 className="section-title">How We Hire</h2>
                    <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                        Our process is designed to be transparent, respectful of your time, and focused on your potential.
                    </p>
                </div>

                <div className="process-steps">
                    <motion.div className="process-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <span className="step-number">01</span>
                        <h4>Application</h4>
                        <p>Submit your profile. We review every application manually—no bots.</p>
                    </motion.div>
                    <motion.div className="process-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <span className="step-number">02</span>
                        <h4>Culture Chat</h4>
                        <p>A 30-min call to discuss your goals and see if our values align.</p>
                    </motion.div>
                    <motion.div className="process-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <span className="step-number">03</span>
                        <h4>Technical Deep Dive</h4>
                        <p>A practical, take-home challenge or system design discussion. No whiteboard haze.</p>
                    </motion.div>
                    <motion.div className="process-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                        <span className="step-number">04</span>
                        <h4>The Offer</h4>
                        <p>We move fast. If it's a match, expect a competitive offer within 48 hours.</p>
                    </motion.div>
                </div>
            </div>

            {/* Open Positions Section */}
            <div id="open-positions" className="positions-section">
                <div className="section-header">
                    <h2 className="section-title">Open Positions</h2>
                    <p style={{ color: '#94a3b8' }}>
                        Ready to make your mark? Check out our current openings below.
                    </p>
                </div>

                {jobs.map((category) => (
                    <div key={category.category} className="job-group">
                        <h3 className="job-category-title">{category.category}</h3>
                        <div className="jobs-list">
                            {category.roles.map((role) => (
                                <motion.div
                                    key={role.id}
                                    className="job-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="job-info">
                                        <h4>{role.title}</h4>
                                        <div className="job-meta">
                                            <span><FaMapMarkerAlt /> {role.location}</span>
                                            <span><FaClock /> {role.type}</span>
                                        </div>
                                    </div>
                                    <button className="apply-btn">Apply Now</button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
