import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiLayers, FiZap, FiFeather, FiSearch, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import './ServicesOverview.css';

interface ServiceItem {
    id: string;
    name: string;
    description: string;
}

interface ServiceCategory {
    title: string;
    icon: React.ReactNode;
    desc: string;
    services: ServiceItem[];
}

const ServicesOverview = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories: ServiceCategory[] = [
        {
            title: "Software Engineering",
            icon: <FiCpu />,
            desc: "Custom development, robust web applications, and mobile apps built to scale.",
            services: [
                { id: 'software-dev', name: 'Software Development', description: 'Bespoke software solutions engineered to solve complex business challenges.' },
                { id: 'web-app-dev', name: 'Web Application Development', description: 'Scalable web apps built with modern frontend and backend frameworks.' },
                { id: 'custom-cms', name: 'Custom Website & CMS', description: 'Customized web solutions and content management systems built from scratch.' },
                { id: 'portals', name: 'Enterprise Portals & Dashboard', description: 'Secure internal portals, data dashboards, and systems integration.' },
                { id: 'ecommerce', name: 'eCommerce Website Dev', description: 'High-converting online store experiences tailored to complex catalog needs.' },
                { id: 'native-app', name: 'Native Mobile App', description: 'Platform-native iOS and Android applications built for high performance.' },
                { id: 'hybrid-app', name: 'Hybrid Mobile App', description: 'Cross-platform mobile apps built with React Native and Flutter.' },
                { id: 'mvp-development', name: 'MVP Development', description: 'Rapid, lightweight initial builds to validate your product in market.' },
                { id: 'prototyping', name: 'Rapid Prototyping', description: 'Interactive visual models to test UX concepts before coding.' }
            ]
        },
        {
            title: "Low Code & Platforms",
            icon: <FiLayers />,
            desc: "Rapid visual development and enterprise commerce platforms.",
            services: [
                { id: 'wordpress', name: 'WordPress Development', description: 'Scalable, secure, and optimized WordPress platforms for enterprises.' },
                { id: 'webflow', name: 'Webflow Development', description: 'Premium marketing websites designed and developed with pixel-perfection.' },
                { id: 'wix', name: 'Wix Development', description: 'Agile visual design and functional build using Wix Studio & Velo.' },
                { id: 'shopify', name: 'Shopify Development', description: 'Custom DTC storefront configurations and Shopify Plus scaling.' },
                { id: 'magento', name: 'Magento Development', description: 'Enterprise-grade open-source e-commerce solutions for millions of SKUs.' },
                { id: 'bubble', name: 'Bubble.io Development', description: 'Full-stack visual web application programming without code debt.' },
                { id: 'framer', name: 'Framer Development', description: 'Award-winning animations and designs published directly to the web.' },
                { id: 'dora', name: 'Dora Development', description: 'Immersive, interactive 3D and WebGL layouts using no-code timelines.' },
                { id: 'studio-ai', name: 'Studio AI Development', description: 'Intelligent design-to-code interfaces leveraging generative styling.' }
            ]
        },
        {
            title: "AI & Innovation",
            icon: <FiZap />,
            desc: "Future-ready intelligence, enterprise strategy, and tech consulting.",
            services: [
                { id: 'digital-transformation', name: 'Digital Transformation', description: 'Reimagining business workflows using cloud, automation, and data.' },
                { id: 'ai-integration', name: 'AI Integration & Strategy', description: 'Connecting LLMs and intelligent data analytics into legacy infrastructure.' },
                { id: 'ai-agents', name: 'AI Agents Development', description: 'Deploying autonomous agentic models to handle operations.' },
                { id: 'nlp', name: 'Natural Language Processing', description: 'Advanced text analysis, translation, and chat agents.' },
                { id: 'tech-consulting', name: 'Technology Consulting', description: 'Architectural planning, system audits, and feasibility analysis.' },
                { id: 'staff-augmentation', name: 'IT Staff Augmentation', description: 'Scaling your engineering squad instantly with vetted global talent.' },
                { id: 'maintenance', name: 'Maintenance & Support', description: '24/7 server monitoring, performance patching, and SLA security.' }
            ]
        },
        {
            title: "Design & Marketing",
            icon: <FiFeather />,
            desc: "Stunning brand designs and data-driven marketing campaigns.",
            services: [
                { id: 'ui-ux', name: 'UI/UX & Product Design', description: 'User research, wireframing, and interactive interface design systems.' },
                { id: 'branding', name: 'Branding & Visual Identity', description: 'Logos, guidelines, brand books, and strategic market positioning.' },
                { id: 'graphic-design', name: 'Graphic Design', description: 'Premium marketing collaterals, visual assets, and vector arts.' },
                { id: 'inbound-marketing', name: 'Inbound Marketing', description: 'Funnels, content assets, and nurture sequences for high-quality leads.' },
                { id: 'seo', name: 'SEO Services', description: 'Search audits, speed optimizations, keywords maps, and rank indexing.' },
                { id: 'social-media', name: 'Social Media & Paid Ads', description: 'Vibrant campaigns, ad setups, and analytics dashboards across socials.' }
            ]
        }
    ];

    const filteredCategories = categories.map(cat => ({
        ...cat,
        services: cat.services.filter(srv =>
            srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            srv.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.services.length > 0);

    return (
        <div className="services-overview-page">
            <SEO 
                title="Our Services & Capabilities | Fraylon Technologies" 
                description="Explore Fraylon's end-to-end digital capabilities including custom software engineering, AI agents, low-code design, branding, and strategic consulting."
            />

            <div className="services-bg-decoration">
                <div className="services-circle services-circle-1" />
                <div className="services-circle services-circle-2" />
            </div>

            <div className="container">
                <header className="services-overview-header">
                    <div className="services-header-content">
                        <motion.span
                            className="services-tag"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h1
                            className="services-title"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            Digital Capabilities
                        </motion.h1>
                        <motion.p
                            className="services-subtitle"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            We deliver structured, high-performance solutions at the intersection of custom software engineering, low-code platforms, AI integration, and visual design.
                        </motion.p>
                    </div>

                    <motion.div
                        className="services-search-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search our services..."
                            className="services-search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                </header>

                <main className="services-categories-list">
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category, catIdx) => (
                            <motion.section 
                                key={category.title}
                                className="category-section"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: 0.05 * catIdx, duration: 0.6 }}
                                layout
                            >
                                <div className="category-sidebar">
                                    <div className="category-icon-wrapper">{category.icon}</div>
                                    <h2 className="category-title-text">{category.title}</h2>
                                    <p className="category-desc-text">{category.desc}</p>
                                </div>

                                <div className="services-cards-grid">
                                    {category.services.map((service, srvIdx) => (
                                        <motion.div
                                            key={service.id}
                                            className="service-overview-card"
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (srvIdx * 0.03), duration: 0.4 }}
                                            layout
                                        >
                                            <Link to={`/services/${service.id}`} className="service-card-anchor">
                                                <div className="card-top">
                                                    <h3>{service.name}</h3>
                                                    <FiArrowRight className="card-arrow" />
                                                </div>
                                                <p className="card-desc">{service.description}</p>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </AnimatePresence>
                </main>

                <footer className="services-footer-cta">
                    <div className="cta-content">
                        <h3>Not sure what solution you need?</h3>
                        <p>Book a free 15-minute consultation to discuss your product architecture and digital strategy with our engineering team.</p>
                        <Link to="/contact" className="btn btn-primary cta-btn">Book Free Consult</Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ServicesOverview;
