import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import SEO from '../components/SEO';
import './Insights.css';

const Insights = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(insightsData.map(item => item.category))];

    // Filter items (excluding the very first one which is featured, unless filtering changes)
    const featuredInsight = insightsData[0];

    const filteredInsights = insightsData.filter(item => {
        if (activeCategory === 'All') return item.id !== featuredInsight.id;
        return item.category === activeCategory;
    });

    return (
        <div className="insights-page container">
            <SEO title="Insights & Thought Leadership | Fraylon Technologies" description="Explore Fraylon's latest research, perspectives, and analysis on technology and business strategy trends shaping the future of global industries." />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="insights-header"
            >
                <h1 className="insights-title">Insights & Perspectives</h1>
                <p className="insights-description">
                    Explore our latest research, thinking, and analysis on the trends and technologies shaping the future of global business.
                </p>
            </motion.div>

            {/* Featured Insight Section (Only show on 'All' view) */}
            {activeCategory === 'All' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="featured-insight"
                >
                    <div className="featured-image-container">
                        <img src={featuredInsight.image} alt={featuredInsight.title} />
                    </div>
                    <div className="featured-content">
                        <span className="insight-category">{featuredInsight.category}</span>
                        <h2>{featuredInsight.title}</h2>
                        <p>{featuredInsight.excerpt}</p>
                        <div className="featured-meta">
                            <span>{featuredInsight.author}</span>
                            <span className="separator">•</span>
                            <span>{featuredInsight.date}</span>
                        </div>
                        <Link to={`/insights/${featuredInsight.id}`} className="featured-link">Read Feature <FaArrowRight /></Link>
                    </div>
                </motion.div>
            )}

            {/* Filter Bar */}
            <div className="insights-filter-bar">
                <div className="categories-list">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Insights Grid */}
            <div className="insights-grid">
                {filteredInsights.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="insight-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="insight-image-container">
                            <img src={item.image} alt={item.title} className="insight-image" />
                        </div>
                        <div className="insight-content">
                            <span className="insight-category">{item.category}</span>
                            <h3 className="insight-card-title">{item.title}</h3>
                            <p className="insight-excerpt">{item.excerpt}</p>
                            <Link to={`/insights/${item.id}`} className="insight-link">Read Article <FaArrowRight /></Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredInsights.length === 0 && (
                <div className="no-results">
                    <h3>No insights found for this category.</h3>
                </div>
            )}
        </div>
    );
};

export default Insights;
