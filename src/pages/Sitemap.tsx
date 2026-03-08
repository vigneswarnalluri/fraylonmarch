import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiLayers, FiFileText, FiSearch, FiArrowRight, FiActivity, FiBriefcase, FiZap, FiGrid, FiFeather } from 'react-icons/fi';
import './Sitemap.css';

const Sitemap = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const siteStructure = [
        {
            title: "Company",
            icon: <FiBriefcase />,
            description: "Core organization and leadership",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Leadership", path: "/leadership" },
                { name: "Careers", path: "/careers" },
                { name: "Strategic Partners", path: "/partners" },
                { name: "News & Media", path: "/news" },
                { name: "Contact Us", path: "/contact" }
            ]
        },
        {
            title: "Software Engineering",
            icon: <FiCpu />,
            description: "Custom development and platform expertise",
            links: [
                { name: "Software Development", path: "/services/software-dev" },
                { name: "Web Application Development", path: "/services/web-app-dev" },
                { name: "Custom Website & CMS", path: "/services/custom-cms" },
                { name: "Enterprise Portals & Dashboard", path: "/services/portals" },
                { name: "eCommerce Website Dev", path: "/services/ecommerce" },
                { name: "MVP Development", path: "/services/mvp-development" },
                { name: "Rapid Prototyping", path: "/services/prototyping" },
                { name: "Native Mobile App", path: "/services/native-app" },
                { name: "Hybrid Mobile App", path: "/services/hybrid-app" }
            ]
        },
        {
            title: "Low Code & Platforms",
            icon: <FiLayers />,
            description: "Specialized platform solutions",
            links: [
                { name: "WordPress Development", path: "/services/wordpress" },
                { name: "Webflow Development", path: "/services/webflow" },
                { name: "Wix Development", path: "/services/wix" },
                { name: "Shopify Development", path: "/services/shopify" },
                { name: "Magento Development", path: "/services/magento" },
                { name: "Bubble.io Development", path: "/services/bubble" },
                { name: "Framer Development", path: "/services/framer" },
                { name: "Dora Development", path: "/services/dora" },
                { name: "Studio AI Development", path: "/services/studio-ai" }
            ]
        },
        {
            title: "AI & Innovation",
            icon: <FiZap />,
            description: "Future-ready intelligence and strategy",
            links: [
                { name: "Digital Transformation", path: "/services/digital-transformation" },
                { name: "AI Integration & Strategy", path: "/services/ai-integration" },
                { name: "AI Agents Development", path: "/services/ai-agents" },
                { name: "Natural Language Processing", path: "/services/nlp" },
                { name: "Technology Consulting", path: "/services/tech-consulting" },
                { name: "IT Staff Augmentation", path: "/services/staff-augmentation" },
                { name: "Maintenance & Support", path: "/services/maintenance" }
            ]
        },
        {
            title: "Design & Marketing",
            icon: <FiFeather />,
            description: "Visual identity and digital growth",
            links: [
                { name: "UI/UX & Product Design", path: "/services/ui-ux" },
                { name: "Branding & Visual Identity", path: "/services/branding" },
                { name: "Graphic Design", path: "/services/graphic-design" },
                { name: "Inbound Marketing", path: "/services/inbound-marketing" },
                { name: "SEO Services", path: "/services/seo" },
                { name: "Social Media & Paid Ads", path: "/services/social-media" }
            ]
        },
        {
            title: "Enterprise Solutions",
            icon: <FiActivity />,
            description: "Industrial scale systems and security",
            links: [
                { name: "Cloud Transformation", path: "/solutions/cloud" },
                { name: "Data & Analytics", path: "/solutions/data" },
                { name: "Intelligent Automation", path: "/solutions/automation" },
                { name: "SAP S/4HANA", path: "/solutions/sap" },
                { name: "Oracle Cloud", path: "/solutions/oracle" },
                { name: "Smart Supply Chain", path: "/solutions/supply-chain" },
                { name: "Cybersecurity", path: "/solutions/cyber" },
                { name: "Cloud Security", path: "/solutions/cloud-sec" }
            ]
        },
        {
            title: "Industries",
            icon: <FiGrid />,
            description: "Sector-specific expertise",
            links: [
                { name: "Banking & Finance", path: "/ind/banking" },
                { name: "Insurance", path: "/ind/insurance" },
                { name: "Payments & Fintech", path: "/ind/payments" },
                { name: "Retail & Consumer Goods", path: "/ind/retail" },
                { name: "Healthcare & Life Sciences", path: "/ind/health" },
                { name: "Industrial Manufacturing", path: "/ind/manufacturing" },
                { name: "Energy & Utilities", path: "/ind/energy" },
                { name: "Telecommunications", path: "/ind/telecom" },
                { name: "Public Sector", path: "/ind/public" }
            ]
        },
        {
            title: "Resources & Legal",
            icon: <FiFileText />,
            description: "Policies and thought leadership",
            links: [
                { name: "Insights Hub", path: "/insights" },
                { name: "Projects Portfolio", path: "/projects" },
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
