import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

import './Industries.css';

import { industriesData } from '../data/industriesData';

const Industries = () => {
    const { type } = useParams();
    const industry = type ? industriesData[type] : null;

    return (
        <div className="industries-page container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {industry ? (
                    <div className="industry-detail-container">
                        <SEO 
                            title={`${industry.title} | Industry Expertise | Fraylon Technologies`}
                            description={industry.description}
                        />
                        {/* Hero Section */}
                        <div className="industry-hero">
                            <Link to="/industries" className="industry-breadcrumbs">← All Industries</Link>
                            <div className="industry-hero-content">
                                <motion.div
                                    className="industry-hero-text"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h1>{industry.title}</h1>
                                    <p className="industry-hero-desc">{industry.description}</p>
                                    <Link to="/contact" className="btn btn-primary">Speak to an Expert</Link>
                                </motion.div>
                                <motion.div
                                    className="industry-hero-icon"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <industry.icon />
                                </motion.div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="industry-stats-row">
                            {industry.stats.map((stat, i) => (
                                <div key={i} className="industry-stat-item">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Challenges & Solutions Grid */}
                        <div className="industry-content-grid">
                            <div className="industry-section">
                                <h2>Key Challenges</h2>
                                <div className="card-grid">
                                    {industry.challenges.map((item, i) => (
                                        <div key={i} className="content-card challenge">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="industry-section">
                                <h2>Our Solutions</h2>
                                <div className="card-grid">
                                    {industry.solutions.map((item, i) => (
                                        <div key={i} className="content-card solution">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="industry-cta-section">
                            <h3>Ready to transform your business?</h3>
                            <p>Let's build the future of {industry.title} together.</p>
                            <Link to="/contact" className="btn btn-outline">Schedule Consultation</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* List View */}
                        <SEO 
                            title="Industry Expertise & Digital Solutions | Fraylon Technologies"
                            description="Discover Fraylon's deep sector expertise across financial services, healthcare, logistics, manufacturing, automotive, energy, and telecom."
                        />
                        <div className="industries-header">
                            <h1 className="industries-title">Industries We Serve</h1>
                            <p className="industries-subtitle">
                                Deep domain expertise tailored to the unique challenges of your sector.
                            </p>
                        </div>

                        <div className="industries-grid">
                            {Object.entries(industriesData).map(([key, data], index) => {
                                const Icon = data.icon;
                                return (
                                    <Link to={`/ind/${key}`} key={key} className="industry-card-link">
                                        <motion.div
                                            className="industry-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="industry-icon-box">
                                                <Icon className="industry-icon" />
                                            </div>
                                            <div className="industry-card-content">
                                                <h3>{data.title}</h3>
                                                <p>{data.description}</p>
                                            </div>
                                            <img src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop`} alt={data.title} className="industry-bg-image" />
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default Industries;
