import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import type { IconType } from 'react-icons';
import { FaArrowRight, FaQuoteLeft, FaCertificate, FaPlay, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { SiAmazonwebservices, SiGooglecloud, SiTerraform, SiKubernetes, SiPrometheus, SiDatadog, SiSnowflake, SiDatabricks, SiDbt, SiApacheairflow, SiApachekafka, SiLooker, SiPython, SiPytorch, SiTensorflow, SiHuggingface, SiOpencv, SiNvidia, SiSap, SiOracle, SiTableau, SiCisco, SiAnsible, SiSplunk, SiPaloaltonetworks, SiWireshark, SiFortinet, SiArgo, SiUipath } from 'react-icons/si';
import sentineloneLogo from '../assets/sentinelone.png';
import './Solutions.css';

import { solutionsData } from '../data/solutionsData'; // Import data

const Solutions = () => {
    const { type } = useParams();
    const solution = type ? solutionsData[type] : null;
    const videoRef = useRef<HTMLVideoElement>(null);

    // Map video URLs based on solution type (using reliable placeholder/stock sources)
    const videoMap: Record<string, string> = {
        cloud: "/videos/852423-hd_1920_1080_24fps.mp4",
        data: "/videos/data.mp4",
        ai: "/videos/ai.mp4",
        automation: "/videos/automation.mp4",
        cyber: "/videos/cyber.mp4",
        "supply-chain": "/videos/supply-chain.mp4"
    };

    const currentVideo = type && videoMap[type] ? videoMap[type] : videoMap['cloud'];

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Auto-play prevented (User must interact first):", error);
                    // Minimal fallback: User will have to click play manually if muted autoplay is blocked (rare for muted)
                });
            }
        }
    }, [currentVideo]);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const [activeSection, setActiveSection] = useState<string>('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['tech-stack', 'challenge', 'architecture', 'capabilities', 'detailed-features', 'process', 'case-studies', 'faq'];
            // Trigger point: when the section is approximately 1/3 way up the screen
            const scrollPosition = window.scrollY + (window.innerHeight / 3);

            let current = 'overview';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    if (element.offsetTop <= scrollPosition) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (id === 'overview') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(id);
    };



    // Tech Stack Icon Mapping with Brand Colors
    const techIconMap: Record<string, { icon?: IconType, image?: string, color: string }> = {
        'AWS': { icon: SiAmazonwebservices, color: '#232F3E' },
        'GCP': { icon: SiGooglecloud, color: '#4285F4' },
        'Terraform': { icon: SiTerraform, color: '#7B42BC' },
        'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
        'Prometheus': { icon: SiPrometheus, color: '#E6522C' },
        'Datadog': { icon: SiDatadog, color: '#632CA6' },
        'Snowflake': { icon: SiSnowflake, color: '#29B5E8' },
        'Databricks': { icon: SiDatabricks, color: '#FF3621' },
        'dbt': { icon: SiDbt, color: '#FF694B' },
        'Airflow': { icon: SiApacheairflow, color: '#017CEE' },
        'Kafka': { icon: SiApachekafka, color: '#231F20' },
        'Looker': { icon: SiLooker, color: '#4285F4' },
        'Python': { icon: SiPython, color: '#3776AB' },
        'PyTorch': { icon: SiPytorch, color: '#EE4C2C' },
        'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
        'Hugging Face': { icon: SiHuggingface, color: '#FFD21E' },
        'OpenCV': { icon: SiOpencv, color: '#5C3EE8' },
        'CUDA': { icon: SiNvidia, color: '#76B900' },
        'SAP': { icon: SiSap, color: '#0FAAFF' },
        'SAP S/4HANA': { icon: SiSap, color: '#0FAAFF' },
        'SAP BTP': { icon: SiSap, color: '#0FAAFF' },
        'Oracle': { icon: SiOracle, color: '#F80000' },
        'Oracle OCI': { icon: SiOracle, color: '#F80000' },
        'Tableau': { icon: SiTableau, color: '#E97627' },
        'Cisco': { icon: SiCisco, color: '#1BA0D7' },
        'Ansible': { icon: SiAnsible, color: '#EE0000' },
        'Splunk': { icon: SiSplunk, color: '#FFFFFF' },
        'Okta': { image: 'https://cdn.brandfetch.io/idmCKbU44P/theme/dark/logo.svg', color: '#007DC1' },
        'Palo Alto': { icon: SiPaloaltonetworks, color: '#FA582D' },
        'Wireshark': { icon: SiWireshark, color: '#1679A7' },
        'Fortinet': { icon: SiFortinet, color: '#C0132B' },
        'UiPath': { icon: SiUipath, color: '#FA4616' },
        'Argocd': { icon: SiArgo, color: '#EF7B4D' },
        'Azure': { icon: VscAzure, color: '#0078D4' },

        // Cybersecurity High-Fidelity Logos
        'SentinelOne': { image: sentineloneLogo, color: '#4E07CC' },
        'CrowdStrike': { image: 'https://cdn.brandfetch.io/idIvK12LoO/theme/dark/logo.svg', color: '#FF0000' },
        'Wiz': { image: 'https://cdn.brandfetch.io/idApmKxSg0/theme/dark/logo.svg', color: '#00D7FF' },
        'Zscaler': { image: 'https://cdn.brandfetch.io/idz0j5A6bB/theme/dark/logo.svg', color: '#005BB7' },
    };

    return (
        solution ? (
            <div className="solutions-page container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Hero Section */}
                    <div className="solution-hero-wrapper">
                        <div className="solution-hero-content">
                            <Link to="/solutions" className="solution-breadcrumbs">
                                <FaArrowRight style={{ transform: 'rotate(180deg)', marginRight: '8px', display: 'inline-block' }} />
                                Back to Solutions
                            </Link>
                            <motion.h1
                                className="detail-title"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {solution.title}
                            </motion.h1>
                            <motion.div
                                className="detail-description"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {solution.description}
                            </motion.div>

                            <div className="hero-stats-row">
                                {solution.stats.map((stat, i) => (
                                    <div key={i} className="hero-stat-item">
                                        <span className="hero-stat-value">{stat.value}</span>
                                        <span className="hero-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="video-section hero-video">
                            <div className="video-wrapper">
                                <video
                                    ref={videoRef}
                                    key={currentVideo}
                                    className="solution-video"
                                    src={currentVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    crossOrigin="anonymous"
                                />
                                <div className="video-overlay" onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
                                    <div className="live-badge"> <div className="pulsing-dot"></div> LIVE SYSTEM DEMO</div>
                                    <button className="play-demo-btn">
                                        <FaPlay style={{ fontSize: '0.8em' }} /> Watch Full Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Premium Tab Navigation */}
                    <div className="solution-inner-nav">
                        <nav className="inner-nav-container">
                            <button onClick={() => scrollToSection('overview')} className={`inner-nav-link ${activeSection === 'overview' ? 'active' : ''}`}>Overview</button>
                            <button onClick={() => scrollToSection('tech-stack')} className={`inner-nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`}>Stack</button>
                            <button onClick={() => scrollToSection('challenge')} className={`inner-nav-link ${activeSection === 'challenge' ? 'active' : ''}`}>Challenge</button>
                            <button onClick={() => scrollToSection('architecture')} className={`inner-nav-link ${activeSection === 'architecture' ? 'active' : ''}`}>Blueprint</button>
                            <button onClick={() => scrollToSection('capabilities')} className={`inner-nav-link ${activeSection === 'capabilities' ? 'active' : ''}`}>Capabilities</button>
                            {solution.detailedFeatures && (
                                <button onClick={() => scrollToSection('detailed-features')} className={`inner-nav-link ${activeSection === 'detailed-features' ? 'active' : ''}`}>Modules</button>
                            )}
                            <button onClick={() => scrollToSection('process')} className={`inner-nav-link ${activeSection === 'process' ? 'active' : ''}`}>Process</button>
                            <button onClick={() => scrollToSection('case-studies')} className={`inner-nav-link ${activeSection === 'case-studies' ? 'active' : ''}`}>Results</button>
                            <button onClick={() => scrollToSection('faq')} className={`inner-nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQ</button>
                        </nav>
                    </div>
                    <div id="tech-stack" className="solution-section tech-stack-section">
                        <h2 style={{ fontSize: '1.2rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Orchestrated Technology</h2>
                        <div className="tech-grid">
                            {solution.techStack.map((tech, i) => {
                                const mapEntry = techIconMap[tech] || techIconMap[tech.split(' ')[0]];

                                // Render logic for Image vs Icon
                                if (mapEntry?.image) {
                                    return (
                                        <span key={i} className="tech-tag">
                                            <img
                                                src={mapEntry.image}
                                                alt={tech}
                                                className="tech-logo-img"
                                            />
                                            {tech}
                                        </span>
                                    );
                                }

                                const TechIcon = mapEntry?.icon || FaCertificate;
                                const iconColor = mapEntry?.color || '#fff';

                                return (
                                    <span key={i} className="tech-tag">
                                        <TechIcon className="tech-icon-svg brand-icon" style={{ color: iconColor }} />
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>


                    {/* The Challenge (Real World Scenario) */}
                    <div id="challenge" className="solution-section challenge-section">
                        <h2 className="section-subtitle">The Challenge</h2>
                        <div className="challenge-container">
                            <div className="challenge-card problem">
                                <h3><FaExclamationCircle style={{ color: '#ef4444', marginRight: '10px' }} /> The Problem</h3>
                                <p>{solution.challenge.problem}</p>
                            </div>
                            <div className="challenge-card solution">
                                <h3><FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> The Fix</h3>
                                <p>{solution.challenge.solution}</p>
                            </div>
                            <div className="challenge-outcome">
                                <strong>Result:</strong> {solution.challenge.outcome}
                            </div>
                        </div>
                    </div>

                    {/* Architecture Blueprint */}
                    <div id="architecture" className="solution-section architecture-section">
                        <h2 className="section-subtitle">Reference Architecture</h2>
                        <div className="blueprint-card">
                            <h3>{solution.architecture.title}</h3>
                            <p>{solution.architecture.description}</p>
                            <ul className="blueprint-highlights">
                                {solution.architecture.highlights.map((point, k) => (
                                    <li key={k}><FaCheckCircle style={{ color: 'var(--color-primary)', marginRight: '10px' }} /> {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* Capabilities Section */}
                    <div id="capabilities" className="capabilities-section">
                        <h2 className="section-subtitle">Capabilities</h2>
                        <div className="capabilities-grid">
                            {solution.capabilities.map((cap, idx) => (
                                <motion.div
                                    key={idx}
                                    className="capability-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h4>{cap.title}</h4>
                                    <p>{cap.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* NEW: Detailed Features / Modules Section */}
                    {solution.detailedFeatures && (
                        <div id="detailed-features" className="detailed-features-section solution-section">
                            <h2 className="section-subtitle">Core Modules</h2>
                            <div className="modules-grid">
                                {solution.detailedFeatures.map((feat, idx) => (
                                    <div key={idx} className="module-card">
                                        <div className="module-number-bg">0{idx + 1}</div>
                                        <div className="module-content">
                                            <h3>{feat.title}</h3>
                                            <p>{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Methodology Section */}
                    <div id="process" className="methodology-section">
                        <h2 className="section-subtitle">The Process</h2>
                        <div className="methodology-steps">
                            {solution.methodology.map((step, idx) => (
                                <div key={idx} className="method-step">
                                    <div className="step-indicator">{step.step}</div>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Stories Section */}
                    <div id="case-studies" className="case-studies-section">
                        <h2 className="section-subtitle">Real Impact</h2>
                        <div className="cases-grid">
                            {solution.caseStudies.map((story, idx) => (
                                <motion.div
                                    key={idx}
                                    className="case-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                >
                                    <div className="case-content">
                                        <span className="case-tag">{story.tag}</span>
                                        <h3>{story.title}</h3>
                                        <div className="case-metric">
                                            <span className="metric-value">{story.metric}</span>
                                            <span className="metric-label">{story.label}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div id="faq" className="solution-section faq-section">
                        <h2 className="section-subtitle">Common Questions</h2>
                        <div className="faq-grid">
                            {solution.faq.map((item, i) => (
                                <div key={i} className="faq-item">
                                    <h4>{item.question}</h4>
                                    <p>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div id="comparison" className="comparison-section">
                        <h2 className="section-subtitle">Why Fraylon?</h2>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Key Factor</th>
                                    <th style={{ color: 'var(--color-primary)' }}>Fraylon Approach</th>
                                    <th>Traditional Consulting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {solution.comparison.map((row, i) => (
                                    <tr key={i}>
                                        <td className="feature-col">{row.feature}</td>
                                        <td className="fraylon-col">{row.fraylon}</td>
                                        <td className="others-col">{row.others}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Certifications */}
                    <div className="certifications-bar">
                        {solution.certifications.map((cert, i) => (
                            <div key={i} className="cert-badge">
                                <FaCertificate className="cert-icon" /> {cert}
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="testimonial-section">
                        <FaQuoteLeft className="quote-icon" />
                        <p className="testimonial-text">"{solution.testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <span className="author-name">{solution.testimonial.author}</span>
                            <span className="author-role">{solution.testimonial.role}, {solution.testimonial.company}</span>
                        </div>
                    </div>

                    <motion.div
                        className="detail-cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3>Let's solve this.</h3>
                        <p>
                            No sales fluff. Just a conversation about your architecture and where you want to take it.
                        </p>
                        <Link to="/contact" className="consult-cta-btn">Book an Engineering Consult <FaArrowRight style={{ fontSize: '0.9em' }} /></Link>
                    </motion.div>
                </motion.div>
            </div>
        ) : (
            /* List View */
            <>
                <div className="solutions-header">
                    <h1 className="page-title">Services & Solutions</h1>
                    <p className="page-subtitle">
                        We build systems that matter. From cloud migration to predictive AI, we deliver engineering excellence.
                    </p>
                </div>

                <div className="solutions-grid">
                    {Object.entries(solutionsData).map(([key, data], index) => {
                        const Icon = data.icon;
                        return (
                            <Link to={`/solutions/${key}`} key={key} className="solution-card-link">
                                <motion.div
                                    className="solution-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Icon className="solution-icon" />
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop`} alt={data.title} className="solution-bg-image" />
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </>
        )
    );
};

export default Solutions;
