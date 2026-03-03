import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCompass, FiCpu, FiLayers, FiFileText, FiShield, FiSearch, FiArrowRight } from 'react-icons/fi';
import './Sitemap.css';

const Sitemap = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const siteStructure = [
        {
            title: "Main",
            icon: <FiCompass />,
            description: "Core organization and navigation",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Leadership", path: "/leadership" },
                { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" }
            ]
        },
        {
            title: "Services",
            icon: <FiCpu />,
            description: "Deep technical expertise and delivery",
            links: [
                { name: "No Code Development", path: "/services/no-code" },
                { name: "Custom Development", path: "/services/custom-dev" },
                { name: "Design Services", path: "/services/design" },
                { name: "Marketing Services", path: "/services/marketing" },
                { name: "AI & Data Science", path: "/services/ai-data" },
                { name: "Mobile Development", path: "/services/mobile-app" }
            ]
        },
        {
            title: "Industries",
            icon: <FiLayers />,
            description: "Sector-specific digital transformation",
            links: [
                { name: "Banking & Finance", path: "/ind/banking" },
                { name: "Healthcare", path: "/ind/health" },
                { name: "Manufacturing", path: "/ind/manufacturing" },
                { name: "Retail & E-commerce", path: "/ind/retail" },
                { name: "Energy & Utilities", path: "/ind/energy" }
            ]
        },
        {
            title: "Insights",
            icon: <FiFileText />,
            description: "Thought leadership and case studies",
            links: [
                { name: "All Insights", path: "/insights" },
                { name: "News & Media", path: "/news" },
                { name: "Partners", path: "/partners" },
                { name: "Projects", path: "/projects" }
            ]
        },
        {
            title: "Legal",
            icon: <FiShield />,
            description: "Policies and compliance frameworks",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-use" },
                { name: "Cookie Settings", path: "/cookie-settings" },
                { name: "Sitemap", path: "/sitemap" }
            ]
        }
    ];

    const filteredSections = siteStructure.map(section => ({
        ...section,
        links: section.links.filter(link =>
            link.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.links.length > 0);

    return (
        <div className="sitemap-page">
            <div className="sitemap-bg-decoration">
                <div className="sitemap-circle sitemap-circle-1" />
                <div className="sitemap-circle sitemap-circle-2" />
            </div>

            <div className="container">
                <header className="sitemap-header">
                    <div className="sitemap-header-content">
                        <motion.span
                            className="sitemap-tag"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Central Index
                        </motion.span>
                        <motion.h1
                            className="sitemap-title"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Sitemap
                        </motion.h1>
                        <motion.p
                            className="sitemap-subtitle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Navigate through Fraylon's digital ecosystem with ease. Use the index below to find specific pages and services.
                        </motion.p>
                    </div>

                    <motion.div
                        className="sitemap-search-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Find a page..."
                            className="sitemap-search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                </header>

                <main className="sitemap-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredSections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                className="sitemap-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.05 * idx }}
                                layout
                            >
                                <div className="card-header">
                                    <div className="card-icon">{section.icon}</div>
                                    <div className="card-heading">
                                        <h3>{section.title}</h3>
                                        <p>{section.description}</p>
                                    </div>
                                </div>
                                <ul className="sitemap-link-list">
                                    {section.links.map((link, lIdx) => (
                                        <motion.li
                                            key={link.path}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (lIdx * 0.02) }}
                                        >
                                            <Link to={link.path}>
                                                <span className="link-text">{link.name}</span>
                                                <FiArrowRight className="link-arrow" />
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </main>

                <footer className="sitemap-footer-cta">
                    <div className="cta-content">
                        <h3>Still looking for something?</h3>
                        <p>Our team is ready to help you navigate your digital transformation journey.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Support</Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Sitemap;
