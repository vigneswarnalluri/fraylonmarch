import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaCode, FaRocket, FaTools, FaLaptopCode, FaServer, FaMobileAlt, FaCloud, FaArrowRight, FaShoppingCart, FaNewspaper, FaBuilding, FaGraduationCap, FaHandHoldingHeart, FaMoneyBillWave, FaHeartbeat, FaTruck, FaHome, FaIndustry, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaWordpress, FaPhp, FaHtml5, FaCss3, FaJs, FaBrain, FaPlus, FaMinus, FaPalette, FaLayerGroup, FaGlobe, FaUserFriends, FaNetworkWired, FaLock, FaPenNib, FaBolt, FaMobile, FaCube, FaFilm, FaRobot, FaChartLine, FaLightbulb, FaShieldAlt, FaColumns, FaCommentDots, FaImage, FaBullhorn, FaSearch, FaHashtag, FaDraftingCompass, FaTree, FaLink, FaMapMarkerAlt } from 'react-icons/fa';
import { SiKubernetes, SiGo, SiPostgresql, SiNextdotjs, SiTailwindcss, SiTypescript, SiGraphql } from 'react-icons/si';

import '../pages/ServiceDetail.css';
import type { ServiceData } from '../data/servicesData';
import SEO from './SEO';

// Map for feature icons
const iconMap: Record<string, ReactNode> = {
    'FaCode': <FaCode />,
    'FaRocket': <FaRocket />,
    'FaTools': <FaTools />,
    'FaCheckCircle': <FaCheckCircle />,
    'FaLaptopCode': <FaLaptopCode />,
    'FaServer': <FaServer />,
    'FaMobileAlt': <FaMobileAlt />,
    'FaCloud': <FaCloud />,
    'FaPalette': <FaPalette />,
    'FaLayerGroup': <FaLayerGroup />,
    'FaShoppingCart': <FaShoppingCart />,
    'FaBullhorn': <FaBullhorn />,
    'FaGlobe': <FaGlobe />,
    'FaUserFriends': <FaUserFriends />,
    'FaShieldAlt': <FaShieldAlt />,
    'FaDatabase': <FaDatabase />,
    'FaNetworkWired': <FaNetworkWired />,
    'FaLock': <FaLock />,
    'FaMobile': <FaMobile />,
    'FaPenNib': <FaPenNib />,
    'FaBolt': <FaBolt />,
    'FaCube': <FaCube />,
    'FaFilm': <FaFilm />,
    'FaRobot': <FaRobot />,
    'FaBrain': <FaBrain />,
    'FaChartLine': <FaChartLine />,
    'FaLightbulb': <FaLightbulb />,
    'FaColumns': <FaColumns />,
    'FaCommentDots': <FaCommentDots />,
    'FaDraftingCompass': <FaDraftingCompass />,
    'FaSearch': <FaSearch />,
    'FaTree': <FaTree />,
    'FaLink': <FaLink />,
    'FaMapMarkerAlt': <FaMapMarkerAlt />,
    'FaHashtag': <FaHashtag />,
    'FaImage': <FaImage />,
    'FaNewspaper': <FaNewspaper />,
    'FaBuilding': <FaBuilding />,
    'FaGraduationCap': <FaGraduationCap />,
    'FaHandHoldingHeart': <FaHandHoldingHeart />,
    'FaMoneyBillWave': <FaMoneyBillWave />,
    'FaHeartbeat': <FaHeartbeat />,
    'FaTruck': <FaTruck />,
    'FaHome': <FaHome />,
    'FaIndustry': <FaIndustry />,
    'FaDocker': <FaDocker />,
    // Add others if needed
};

const getFeatureIcon = (iconInput: string | ReactNode) => {
    // If it's already a component (legacy), return it
    if (typeof iconInput !== 'string') return iconInput;
    // Map string to component
    return iconMap[iconInput] || <FaCheckCircle />;
};

const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return <FaReact />;
    if (t.includes('next')) return <SiNextdotjs />;
    if (t.includes('node')) return <FaNodeJs />;
    if (t.includes('python')) return <FaPython />;
    if (t.includes('cloud') || t.includes('aws')) return <FaAws />;
    if (t.includes('ai') || t.includes('ml')) return <FaBrain />;
    if (t.includes('wordpress')) return <FaWordpress />;
    if (t.includes('php')) return <FaPhp />;
    if (t.includes('sql') || t.includes('mysql')) return <FaDatabase />;
    if (t.includes('html')) return <FaHtml5 />;
    if (t.includes('css')) {
        if (t.includes('tailwind')) return <SiTailwindcss />;
        return <FaCss3 />;
    }
    if (t.includes('java') && !t.includes('script')) return <FaCode />; // Java generic
    if (t.includes('js') || t.includes('javascript')) return <FaJs />;
    if (t.includes('ts') || t.includes('typescript')) return <SiTypescript />;
    if (t.includes('go')) return <SiGo />;
    if (t.includes('kubernetes')) return <SiKubernetes />;
    if (t.includes('postgres')) return <SiPostgresql />;
    if (t.includes('graph')) return <SiGraphql />;
    if (t.includes('docker')) return <FaDocker />;
    return <FaCode />;
};

const ServiceLayout = ({ data }: { data: ServiceData }) => {
    // FAQ State
    const [activeFaq, setActiveFaq] = useState<number | null>(0); // Default open first

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Add Scroll to top on mount (or data change)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="service-page">
            <SEO 
                title={`${data.title} | Services | Fraylon Technologies`}
                description={data.subtitle}
            />
            {/* HERO SECTION */}
            <section className="service-hero">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="service-hero-content"
                >
                    <span className="service-badge">{data.badge}</span>
                    <h1 className="service-title">{data.title}</h1>
                    <p className="service-subtitle">{data.subtitle}</p>
                    <div className="hero-actions">
                        <Link to="/contact">
                            <button className="consulting-btn">
                                Book Consultation
                                <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="service-hero-visual"
                >
                    <img src={data.heroImage} alt={data.title} />
                </motion.div>
            </section>

            {/* STATS BAR */}
            <section className="service-stats-bar">
                {data.stats && data.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* FEATURES SECTION */}
            <section className="service-section">
                <div className="section-header">
                    <h2>Key Capabilities</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Everything you need to succeed, built right in.</p>
                </div>
                <div className="features-grid">
                    {data.features && data.features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{getFeatureIcon(feature.icon)}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENEFITS SECTION (Why Us) */}
            <section className="service-section bg-darker">
                <div className="section-header">
                    <h2>Why Choose Us?</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Tangible business value delivered.</p>
                </div>
                <div className="benefits-grid">
                    {data.benefits && data.benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-number">0{index + 1}</div>
                            <h4>{benefit.title}</h4>
                            <p>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="service-section" style={{ background: 'var(--bg-surface)' }}>
                <div className="section-header">
                    <h2>Our Process</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>A proven workflow for predictable results.</p>
                </div>
                <div className="process-timeline">
                    {data.process && data.process.map((step, index) => (
                        <div key={index} className="process-step">
                            <span className="step-number">{step.step}</span>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURED PROJECTS SECTION */}
            {data.projects && (
                <section className="service-section">
                    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <h2>Featured Projects</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>See how we've helped others succeed.</p>
                        </div>
                        <Link to="/projects" className="view-all-projects-btn">
                            View All Projects <FaArrowRight />
                        </Link>
                    </div>
                    <div className="projects-grid">
                        {data.projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tags && project.tags.map((tag: string, i: number) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                                <Link to="/contact" className="view-project-btn">
                                    <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* TECH STACK */}
            <section className="service-tech-section">
                <div className="section-header center-aligned">
                    <h2>Technology Stack</h2>
                    <p>Engineered with the world's most robust technologies.</p>
                </div>
                <div className="tech-grid">
                    {data.techStack && data.techStack.map((tech: string, index: number) => (
                        <div key={index} className="tech-item">
                            <div className="tech-icon-wrapper">{getTechIcon(tech)}</div>
                            <span className="tech-name">{tech}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION - Redesigned */}
            <section className="service-faq-section">
                <div className="faq-container">
                    <div className="faq-header-side">
                        <span className="faq-label">Support</span>
                        <h2>Frequently Asked<br />Questions</h2>
                        <p>Everything you need to know about our services. Can’t find the answer you’re looking for?</p>
                        <Link to="/contact" className="faq-contact-link">
                            Chat to our team <FaArrowRight />
                        </Link>
                    </div>

                    <div className="faq-list-side">
                        {data.faq && data.faq.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-card ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-card-header">
                                    <h4>{item.q}</h4>
                                    <div className="faq-toggle-icon">
                                        {activeFaq === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="faq-content-wrapper"
                                        >
                                            <div className="faq-answer-inner">
                                                <p>{item.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="service-cta-section">
                <div className="service-cta-content">
                    <h2>Ready to get started?</h2>
                    <p>Transform your business with our {data.title} services today.</p>
                    <Link to="/contact">
                        <button className="consulting-btn">
                            Get a Quote
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceLayout;
