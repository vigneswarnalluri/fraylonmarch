import { motion } from 'framer-motion';
import { FaArrowRight, FaAws, FaSalesforce } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';
import {
    SiGooglecloud, SiSap, SiOracle, SiAdobe,
    SiSnowflake, SiDatabricks, SiAtlassian,
    SiSlack, SiHubspot, SiFigma, SiVercel
} from 'react-icons/si';
import SEO from '../components/SEO';
import './Partners.css';

const Partners = () => {
    const partners = [
        { name: "Microsoft", icon: BsMicrosoft, color: "#00A4EF", desc: "Empowering enterprise transformation with Azure cloud." },
        { name: "AWS", icon: FaAws, color: "#FF9900", desc: "Scalable infrastructure for mission-critical apps." },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4", desc: "Data analytics and AI innovations on global scale." },
        { name: "Salesforce", icon: FaSalesforce, color: "#00A1E0", desc: "Customer relationship management driving sales growth." },
        { name: "SAP", icon: SiSap, color: "#0FAAFF", desc: "Intelligent enterprise resource planning operations." },
        { name: "Oracle", icon: SiOracle, color: "#C74634", desc: "Database prowess meets modern cloud infrastructure." },
        { name: "IBM", icon: null, color: "#0530ad", desc: "Hybrid cloud and AI solutions for complex industries." },
        { name: "Adobe", icon: SiAdobe, color: "#FF0000", desc: "Digital experience and creative cloud workflows." },
        { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8", desc: "The data cloud for unified data warehousing." },
        { name: "Databricks", icon: SiDatabricks, color: "#FF3621", desc: "Lakehouse architecture for data and AI." },
        { name: "ServiceNow", icon: null, color: "#81B5A1", desc: "Digital workflows enabling modern enterprise operations." },
        { name: "Atlassian", icon: SiAtlassian, color: "#0052CC", desc: "Agile tools for software development and collaboration." },
        { name: "Slack", icon: SiSlack, color: "#4A154B", desc: "Channel-based messaging platform for enterprise teams." },
        { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", desc: "Inbound marketing, sales, and service software." },
        { name: "Figma", icon: SiFigma, color: "#F24E1E", desc: "Collaborative interface design for product teams." },
        { name: "Vercel", icon: SiVercel, color: "#000000", desc: "Frontend cloud for deploying the next web." }
    ];

    return (
        <div className="partners-page">
            <SEO title="Strategic Partners | Fraylon Ecosystem | Fraylon Technologies" description="Discover Fraylon's strategic partners and integrations across cloud, databases, and workflow systems including Microsoft Azure, AWS, Google Cloud, Salesforce, and SAP." />
            <div className="container">
                {/* Hero Section */}
                <div className="partners-hero">
                    <motion.span
                        className="partners-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Ecosystem Excellence
                    </motion.span>
                    <motion.h1
                        className="partners-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Strategic Partners
                    </motion.h1>
                    <motion.p
                        className="partners-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        We collaborate with the world's leading technology providers to deliver best-in-class solutions for our clients.
                        Together, we solve the most complex challenges in the digital era.
                    </motion.p>
                </div>

                {/* Partners Grid */}
                <div className="partners-grid-wrapper">
                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="partner-item"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="partner-icon-wrapper" style={{ color: partner.color }}>
                                    {partner.icon ?
                                        <partner.icon /> :
                                        <span className="partner-logo-text">{partner.name}</span>
                                    }
                                </div>
                                <div className="partner-hover-info">
                                    <h4 className="partner-hover-title">{partner.name}</h4>
                                    <p className="partner-hover-desc">{partner.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section (Full Width) */}
            <section className="partners-cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content-wrapper"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-header">
                            <h2 className="cta-title">Ready to Partner?</h2>
                        </div>
                        <div className="cta-body">
                            <p className="cta-text">
                                Join our ecosystem of innovators. Let's combine our strengths to build the future of enterprise technology together.
                            </p>
                            <button className="btn-cta">
                                Apply Now <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Partners;

