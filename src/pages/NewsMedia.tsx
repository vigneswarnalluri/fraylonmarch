import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const articles = [
    {
        title: "Fraylon Named Top Digital Innovator 2025",
        date: "October 15, 2025",
        category: "Awards",
        excerpt: "We are honored to be recognized for our contribution to enterprise cloud transformation.",
        image: "https://images.pexels.com/photos/7005047/pexels-photo-7005047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "The Future of AI Agents in Enterprise",
        date: "September 22, 2025",
        category: "Thought Leadership",
        excerpt: "How generative AI agents are reshaping workforce productivity and decision making.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Global Expansion: New Office in Singapore",
        date: "August 10, 2025",
        category: "Company News",
        excerpt: "Expanding our footprint in the APAC region to better serve our Asian markets.",
        image: "https://images.pexels.com/photos/7709212/pexels-photo-7709212.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Sustainable Tech: Our Commitment to Net Zero",
        date: "July 05, 2025",
        category: "ESG",
        excerpt: "Strategies for reducing digital carbon footprints in large-scale software systems.",
        image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const NewsMedia = () => {
    return (
        <div className="page-news" style={{ paddingTop: '120px', paddingBottom: '100px', background: '#f8f9fa' }}>
            <SEO title="News & Press | Fraylon Updates | Fraylon Technologies" description="Keep up with the latest press releases, company news, and milestones of Fraylon Technologies globally." />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', color: '#0f172a' }}>News & Insights</h1>
                    <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Latest updates, press releases, and thought leadership from Fraylon.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {articles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.3s' }}
                            whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <span style={{
                                    position: 'absolute', top: '20px', left: '20px',
                                    background: '#0f172a', color: '#fff', padding: '5px 12px',
                                    borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold'
                                }}>
                                    {item.category}
                                </span>
                            </div>
                            <div style={{ padding: '30px' }}>
                                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{item.date}</span>
                                <h3 style={{ margin: '15px 0', fontSize: '1.4rem', color: '#0f172a' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.excerpt}</p>
                                <Link to="/contact" style={{ color: '#00c6a5', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '10px', display: 'inline-block', textDecoration: 'none' }}>
                                    Read Story &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsMedia;
