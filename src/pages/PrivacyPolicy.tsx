import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInfoCircle, FaShieldAlt, FaLock, FaChartLine } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const observer = useRef<IntersectionObserver | null>(null);

    const sections = [
        { id: 'intro', title: '1. Introduction' },
        { id: 'data-collection', title: '2. Information We Collect' },
        { id: 'data-usage', title: '3. How We Use Your Data' },
        { id: 'protection', title: '4. Data Protection & Security' },
        { id: 'rights', title: '5. Your Rights' },
        { id: 'contact', title: '6. Contact Us' }
    ];

    useEffect(() => {
        // More standard observer options for section highlighting
        const observerOptions = {
            rootMargin: '-10% 0px -60% 0px', // Captures when section is roughly in the top part of the viewport
            threshold: 0
        };

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="legal-page" style={{ overflow: 'visible' }}>
            <div className="container" style={{ overflow: 'visible' }}>
                <header className="legal-header">
                    <motion.span
                        className="legal-tag"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Foundation of Trust
                    </motion.span>
                    <motion.h1
                        className="legal-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Privacy Policy
                    </motion.h1>
                    <div className="legal-meta">
                        <span className="meta-item">Version 2.0</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-item">Last Updated: March 2026</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-item">5 min read</span>
                    </div>
                </header>

                <div className="legal-container">
                    <aside className="legal-sidebar">
                        <div className="sidebar-sticky">
                            <h4 className="sidebar-title">On This Page</h4>
                            <ul className="legal-toc">
                                {sections.map(section => (
                                    <li key={section.id} className="toc-item">
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="legal-content">
                        <section className="legal-highlight-card">
                            <FaInfoCircle className="highlight-icon" />
                            <div className="legal-highlight-text">
                                <strong>Privacy at a Glance:</strong> We only collect information that is absolutely necessary to provide our services. We never share your data for marketing purposes without your explicit consent.
                            </div>
                        </section>

                        <section id="intro" className="legal-section">
                            <h2>1. Introduction</h2>
                            <p>
                                At Fraylon Technologies, we hold your privacy in the highest regard. This Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our website, services, and digital platforms.
                            </p>
                            <p>
                                By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring that your privacy is protected and that we comply with all applicable data protection laws.
                            </p>
                        </section>

                        <section id="data-collection" className="legal-section">
                            <h2>2. Information We Collect</h2>
                            <p>
                                We collect information that helps us provide a better experience for you. This data is collected through direct interactions and automated technologies.
                            </p>
                            <div className="data-grid">
                                <div className="data-card">
                                    <h5>Identity Data</h5>
                                    <p>Name, professional title, and organizational affiliation.</p>
                                </div>
                                <div className="data-card">
                                    <h5>Contact Data</h5>
                                    <p>Email address, phone number, and mailing address.</p>
                                </div>
                                <div className="data-card">
                                    <h5>Technical Data</h5>
                                    <p>IP address, browser type, and usage patterns on our platform.</p>
                                </div>
                                <div className="data-card">
                                    <h5>Communication Data</h5>
                                    <p>Records of your inquiries and feedback through our contact forms.</p>
                                </div>
                            </div>
                        </section>

                        <section id="data-usage" className="legal-section">
                            <h2>3. How We Use Your Data</h2>
                            <p>
                                Your information is used strictly for professional purposes and to enhance your experience with Fraylon Technologies.
                            </p>
                        </section>

                        <section id="protection" className="legal-section">
                            <h2>4. Data Protection & Security</h2>
                            <p>
                                We implement industry-leading security measures to protect your data. This includes end-to-end encryption, regular security audits, and strict access controls.
                            </p>
                            <div className="security-badges">
                                <div className="badge"><FaShieldAlt /> SSL Encrypted</div>
                                <div className="badge"><FaLock /> ISO Certified Standards</div>
                                <div className="badge"><FaChartLine /> 24/7 Monitoring</div>
                            </div>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal data to outside parties except as described in this policy.
                            </p>
                        </section>

                        <section id="rights" className="legal-section">
                            <h2>5. Your Rights</h2>
                            <p>
                                Under the GDPR and other global data protection regulations, you have several rights regarding your personal data:
                            </p>
                            <ul className="styled-list">
                                <li><strong>The Right to Access:</strong> You can request copies of your personal data.</li>
                                <li><strong>The Right to Rectification:</strong> You can request that we correct any inaccurate information.</li>
                                <li><strong>The Right to Erasure:</strong> You can request that we erase your personal data under certain conditions.</li>
                                <li><strong>The Right to Data Portability:</strong> You can request that we transfer the data that we have collected to another organization.</li>
                            </ul>
                        </section>

                        <section id="contact" className="legal-support-section">
                            <div className="support-card">
                                <h3>6. Contact Our Privacy Team</h3>
                                <p>If you have any questions about this Privacy Policy or our treatment of your personal data, please reach out to us:</p>
                                <div className="contact-methods">
                                    <div className="method">
                                        <FaEnvelope className="method-icon" />
                                        <a href="mailto:contact@fraylontech.com" className="method-link">contact@fraylontech.com</a>
                                    </div>
                                    <div className="method" style={{ alignItems: 'flex-start' }}>
                                        <FaPhone className="method-icon" style={{ marginTop: '5px' }} />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <a href="tel:+17048281085" className="method-link" style={{ marginBottom: '4px' }}>+1 (704) 828-1085</a>
                                            <a href="tel:+919381617904" className="method-link">+91 93816 17904</a>
                                        </div>
                                    </div>
                                    <div className="method">
                                        <FaMapMarkerAlt className="method-icon" />
                                        <span>6-477, Sri Ram Nagar Colony, Balaji Nagar, Hyderabad, Telangana - 500087</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
