import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaClock, FaUser, FaArrowRight, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { insightsData } from '../data/insightsData';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import './InsightDetail.css';
import './Insights.css'; // Import for shared card styles

const InsightDetail = () => {
    const { id } = useParams();
    const insight = insightsData.find(item => item.id === Number(id));

    if (!insight) {
        return <NotFound />;
    }

    return (
        <div className="insight-detail-page">
            <SEO title={`${insight.title} | Insights | Fraylon Technologies`} description={insight.excerpt} />
            <div className="insight-hero" style={{ backgroundImage: `url(${insight.image})` }}>
                <div className="insight-hero-overlay"></div>
                <div className="container insight-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/insights" className="back-link-hero"><FaArrowLeft /> All Insights</Link>
                        <span className="insight-category-badge">{insight.category}</span>
                        <h1 className="insight-title-hero">{insight.title}</h1>
                        <div className="insight-meta">
                            <span><FaUser /> {insight.author}</span>
                            <span><FaCalendar /> {insight.date}</span>
                            <span><FaClock /> {insight.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container insight-body-container">
                <div className="insight-grid-layout">
                    {/* Main Content Column */}
                    <div className="insight-main-column">
                        <motion.div
                            className="insight-content-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            dangerouslySetInnerHTML={{ __html: insight.content || '' }}
                        />

                        {/* Newsletter CTA */}
                        <div className="insight-newsletter-signup">
                            <h3>Stay Ahead of the Curve</h3>
                            <p>Get exclusive insights on {insight.category} delivered directly to your inbox.</p>
                            <div className="newsletter-form-row">
                                <input type="email" placeholder="Enter your work email" />
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                            <small>No spam. Unsubscribe anytime.</small>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="insight-sidebar">
                        <div className="sidebar-widget key-takeaways">
                            <h4>Key Takeaways</h4>
                            <ul>
                                {insight.keyTakeaways?.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget author-widget">
                            <h4>About the Author</h4>
                            <div className="author-profile">
                                <img src={insight.authorImage} alt={insight.author} className="author-img" />
                                <div className="author-info">
                                    <span className="author-name">{insight.author}</span>
                                    <span className="author-role">{insight.authorRole}</span>
                                </div>
                            </div>
                            <p className="author-bio">{insight.authorBio}</p>
                        </div>

                        <div className="sidebar-widget share-widget">
                            <h4>Share Insight</h4>
                            <div className="share-buttons">
                                <button className="share-btn twitter"><FaTwitter /> X / Twitter</button>
                                <button className="share-btn linkedin"><FaLinkedinIn /> LinkedIn</button>
                                <button className="share-btn email"><FaEnvelope /> Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container related-insights-section">
                <h3 className="related-title">Read Next</h3>
                <div className="insights-grid">
                    {insightsData.filter(item => item.id !== insight.id).slice(0, 3).map((item) => (
                        <div key={item.id} className="insight-card">
                            <div className="insight-image-container">
                                <img src={item.image} alt={item.title} className="insight-image" />
                            </div>
                            <div className="insight-content">
                                <span className="insight-category">{item.category}</span>
                                <h3 className="insight-card-title" style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                                <Link to={`/insights/${item.id}`} className="insight-link">Read Article <FaArrowRight /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsightDetail;
