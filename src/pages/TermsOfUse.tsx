import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaExclamationCircle, FaGlobe, FaBriefcase, FaBalanceScale } from 'react-icons/fa';
import './TermsOfUse.css';

const TermsOfUse = () => {
    const [activeSection, setActiveSection] = useState('acceptance');
    const observer = useRef<IntersectionObserver | null>(null);

    const sections = [
        { id: 'acceptance', title: '1. Acceptance of Terms' },
        { id: 'intellectual-property', title: '2. Intellectual Property' },
        { id: 'license', title: '3. Use License' },
        { id: 'liability', title: '4. Limitations of Liability' },
        { id: 'governing-law', title: '5. Governing Law' }
    ];

    useEffect(() => {
        // Use IntersectionObserver for more reliable scroll spy
        const observerOptions = {
            rootMargin: '-10% 0px -60% 0px', // Trigger when section arrives at the top viewport area
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
                        Rules of Engagement
                    </motion.span>
                    <motion.h1
                        className="legal-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Terms of Use
                    </motion.h1>
                    <div className="legal-meta">
                        <span className="meta-item">Version 1.4</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-item">Last Updated: March 2026</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-item">4 min read</span>
                    </div>
                </header>

                <div className="legal-container">
                    <aside className="legal-sidebar">
                        <div className="sidebar-sticky">
                            <h4 className="sidebar-title">Sections</h4>
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
                        <section className="legal-summary-grid">
                            <div className="summary-item">
                                <FaGlobe className="summary-icon" />
                                <h5>Global Usage</h5>
                                <p>Standard terms for international engagement.</p>
                            </div>
                            <div className="summary-item">
                                <FaBriefcase className="summary-icon" />
                                <h5>Professional Scope</h5>
                                <p>Defining our service boundaries and liabilities.</p>
                            </div>
                            <div className="summary-item">
                                <FaBalanceScale className="summary-icon" />
                                <h5>Legal Compliance</h5>
                                <p>Governed by international business standards.</p>
                            </div>
                        </section>

                        <section id="acceptance" className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <div className="alert-box">
                                <FaExclamationCircle className="alert-icon" />
                                <p>By accessing Fraylon Technologies' digital platforms, you acknowledge that you have read, understood, and agreed to be legally bound by these terms.</p>
                            </div>
                            <p>
                                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Fraylon Technologies ("we", "us", or "our"), concerning your access to and use of our website.
                            </p>
                        </section>

                        <section id="intellectual-property" className="legal-section">
                            <h2>2. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and software, is the property of Fraylon Technologies and is protected by international copyright laws.
                            </p>
                            <p>
                                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Fraylon Technologies.
                            </p>
                        </section>

                        <section id="license" className="legal-section">
                            <h2>3. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials on Fraylon Technologies' website for personal, non-commercial transitory viewing only.
                            </p>
                            <ul className="check-list">
                                <li>Modify or copy the materials for commercial use.</li>
                                <li>Use the materials for any public display.</li>
                                <li>Attempt to decompile or reverse engineer any software.</li>
                                <li>Remove any copyright or other proprietary notations.</li>
                            </ul>
                        </section>

                        <section id="liability" className="legal-section">
                            <h2>4. Limitations of Liability</h2>
                            <p>
                                Fraylon Technologies shall not be held liable for any damages arising out of the use or inability to use the materials on our website, even if Fraylon Technologies has been notified of the possibility of such damage.
                            </p>
                        </section>

                        <section id="governing-law" className="legal-section">
                            <h2>5. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts located in India.
                            </p>
                        </section>

                        <div className="terms-actions">
                            <p>Have questions about these terms?</p>
                            <a href="mailto:contact@fraylontech.com" className="btn btn-primary">Contact Us</a>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
