import { motion } from 'framer-motion';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
import { FiArrowRight, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './FamilyTree.css';

// Reusing image imports from Leadership if available
import ramTejaImg from '../assets/images/ram.png'; // Using existing paths
import vigneswarImg from '../assets/images/vigneswar-nalluri.jpg';

const FamilyTree = () => {
    const executiveTeam = [
        {
            name: "Ram Teja Chalamalapalli",
            role: "Chief Executive Officer",
            image: ramTejaImg,
            bio: "Visionary leader driving global digital transformation and enterprise growth through modern innovation."
        },
        {
            name: "Vigneswar Nalluri",
            role: "Chief Technology Officer",
            image: vigneswarImg,
            bio: "Pioneering AI architect focused on building scalable, future-ready infrastructure for the modern enterprise."
        },
        {
            name: "Sarah Chen",
            role: "Chief Marketing Officer",
            image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Strategic brand builder focused on narrative-led growth and global market penetration."
        },
        {
            name: "Marcus Thorne",
            role: "Chief Human Resources Officer",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Architect of Fraylon's unique culture, fostering global talent and organizational excellence."
        }
    ];

    const steeringCommittee = [
        { name: "Dr. Aris Vlahos", role: "Global Board Chair", region: "Athens, Greece" },
        { name: "Yuki Tanaka", role: "Specialized Advisor", region: "Tokyo, Japan" },
        { name: "David Henderson", role: "Independent Director", region: "London, UK" },
        { name: "Ines Moretti", role: "Sustainability Lead", region: "Milan, Italy" }
    ];

    const familyInsights = [
        {
            title: "The Agentic Era: Our Family's Vision",
            author: "Ram Teja Chalamalapalli",
            date: "March 2026",
            link: "/insights/1"
        },
        {
            title: "Scaling Humanity in a Digital World",
            author: "Marcus Thorne",
            date: "February 2026",
            link: "/insights/17"
        }
    ];

    return (
        <div className="family-tree-page">
            {/* Hero Section */}
            <section className="family-hero">
                <div className="container">
                    <motion.span 
                        className="hero-tag"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        THE FRAYLON GENEALOGY
                    </motion.span>
                    <motion.h1 
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Connected by Purpose. <br /> Driven by Family.
                    </motion.h1>
                    <motion.p 
                        className="hero-lead"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        We aren't just a corporation; we are a global family tree of innovators, architects, and visionaries rooted in shared values.
                    </motion.p>
                </div>
            </section>

            {/* Tree Structure - Executive Team */}
            <section className="tree-section">
                <div className="container">
                    <div className="section-header">
                        <FiUsers className="section-icon" />
                        <h2>The Executive Roots</h2>
                        <p>Our core leadership team guiding the global trunk toward uncharted digital territories.</p>
                    </div>

                    <div className="executive-leaves">
                        {executiveTeam.map((leader, index) => (
                            <motion.div 
                                key={leader.name}
                                className="member-leaf"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="leaf-image">
                                    <img src={leader.image} alt={leader.name} />
                                    <div className="leaf-overlay">
                                        <a href="#"><FaLinkedinIn /></a>
                                    </div>
                                </div>
                                <div className="leaf-info">
                                    <h3>{leader.name}</h3>
                                    <span className="leaf-role">{leader.role}</span>
                                    <p>{leader.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steering Committee Section */}
            <section className="committee-section">
                <div className="container">
                    <div className="committee-layout">
                        <div className="committee-text">
                            <FiAward className="section-icon" />
                            <h2>Global Board & <br /> Steering Committee</h2>
                            <p>An international assembly of advisors ensuring Fraylon remains a beacon of ethics and strategic excellence across every frontier.</p>
                        </div>
                        <div className="committee-grid">
                            {steeringCommittee.map((member, idx) => (
                                <motion.div 
                                    key={idx}
                                    className="committee-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="card-top">
                                        <FiGlobe className="geo-icon" />
                                        <span>{member.region}</span>
                                    </div>
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Insights - Thought Leadership */}
            <section className="family-insights">
                <div className="container">
                    <div className="insights-header">
                        <h2>Family Insights</h2>
                        <p>Voices from the roots to the branches, exploring the intersection of life and technology.</p>
                    </div>

                    <div className="insights-row">
                        {familyInsights.map((blog, idx) => (
                            <motion.div 
                                key={idx}
                                className="insight-blog-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <div className="blog-content">
                                    <span className="blog-date">{blog.date}</span>
                                    <h3>{blog.title}</h3>
                                    <p>By {blog.author}</p>
                                    <Link to={blog.link} className="read-more">
                                        Read Essay <FiArrowRight />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Philosophy Quote */}
            <section className="tree-philosophy">
                <div className="container">
                    <motion.div 
                        className="philosophy-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaQuoteLeft className="quote-icon-large" />
                        <h2>
                            A tree is only as strong as its roots. At Fraylon, our roots are our people, and our canopy is the future we build together.
                        </h2>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FamilyTree;
