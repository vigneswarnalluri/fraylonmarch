import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [activePath, setActivePath] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        inquiryType: 'Engineering & Strategy',
        name: '',
        email: '',
        organization: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const pathways = [
        { id: 'eng', title: 'Engineering & Strategy', num: '01', desc: 'Scale your technical capacity with our elite engineering squads.' },
        { id: 'ai', title: 'AI & Data Intelligence', num: '02', desc: 'Deploy autonomous agents and predictive models into your core stack.' },
        { id: 'design', title: 'Product & UX Design', num: '03', desc: 'Transform complex workflows into intuitive digital experiences.' },
        { id: 'partner', title: 'Strategic Partnerships', num: '04', desc: 'Collaborate on market-moving initiatives and ecosystem growth.' },
        { id: 'careers', title: 'Alumni & Careers', num: '05', desc: 'Join our team of visionary engineers or reconnect with the network.' },
        { id: 'media', title: 'Media & Press', num: '06', desc: 'Inquiries regarding press kits, interviews, and brand assets.' },
        { id: 'growth', title: 'Digital Transformation', num: '07', desc: 'Modernize legacy infrastructure and migrate to secure cloud stacks.' },
        { id: 'general', title: 'General Submission', num: '08', desc: 'For all other inquiries not covered by our primary pathways.' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) {
        return (
            <div className="contact-page">
                <section className="form-success-immersive">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <FaCheckCircle className="success-giant-icon" />
                        <h1 className="hero-display-title">Transmission <br />RECIEVED</h1>
                        <p className="hero-manifesto">Your request has been routed to our solution architects. Expect a response within one business cycle.</p>
                        <button className="btn-return" onClick={() => setIsSubmitted(false)} style={{ border: '2px solid white', color: 'white' }}>Return to Home</button>
                    </motion.div>
                </section>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* 1. Cinematic Hero */}
            <section className="contact-hero">
                <div className="hero-visual-bg"></div>
                <div className="hero-content-immersive">
                    <motion.h1 
                        className="hero-display-title"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="title-line">Let's build</span>
                        <span className="title-line outline-text">The Future.</span>
                    </motion.h1>
                    <motion.p 
                        className="hero-manifesto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Fraylon is where visionary ideas meet elite engineering. We don't just solve problems; we architect digital dominance.
                    </motion.p>
                </div>
            </section>

            {/* 2. Path Selection */}
            <section className="paths-section">
                <div className="container">
                    <span className="section-tag">/ Choose your pathway</span>
                    <div className="path-list">
                        {pathways.map((path, idx) => (
                            <motion.div 
                                key={path.id}
                                className={`path-item ${activePath === path.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActivePath(path.id);
                                    setFormData(prev => ({ ...prev, inquiryType: path.title }));
                                    // Smooth scroll to form after selection
                                    setTimeout(() => {
                                        const formSection = document.getElementById('form');
                                        if (formSection) {
                                            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }, 400);
                                }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="path-main">
                                    <span className="path-num">{path.num}</span>
                                    <h3 className="path-title">{path.title}</h3>
                                </div>
                                <p className="path-desc">{path.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Grand Form */}
            <section className="contact-form-section" id="form">
                <div className="container">
                    <div className="form-split">
                        <div className="form-intro">
                            <h2>Submit <br />Inquiry.</h2>
                            <p>Direct communication with our global hubs. Every message is reviewed by a Senior Partner.</p>
                            {activePath && (
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="selected-badge"
                                    key={activePath}
                                >
                                    {formData.inquiryType}
                                </motion.div>
                            )}
                        </div>
                        <div className="form-area">
                            <form className="minimal-form" onSubmit={handleSubmit}>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Your Name" 
                                            className="minimal-input" 
                                            required 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="name@company.com" 
                                            className="minimal-input" 
                                            required 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Organization</label>
                                    <input 
                                        type="text" 
                                        placeholder="Company Name" 
                                        className="minimal-input" 
                                        value={formData.organization}
                                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                                    />
                                </div>

                                <div className="input-group full-width">
                                    <label>Message</label>
                                    <textarea 
                                        rows={3} 
                                        placeholder="Briefly describe your challenge..." 
                                        className="minimal-textarea" 
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-huge" disabled={isSubmitting}>
                                    <span>
                                        {isSubmitting 
                                            ? 'Processing...' 
                                            : (['eng', 'ai', 'design', 'growth'].includes(activePath || '') 
                                                ? 'Initiate Project' 
                                                : 'Submit Inquiry')}
                                    </span>
                                    <FaArrowRight />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Flagship Headquarters */}
            <section className="global-network">
                <div className="container">
                    <div className="hq-flagship-container">
                        <div className="hq-visual-side">
                            <iframe 
                                title="Fraylon Hyderabad HQ"
                                className="hq-image"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                loading="lazy" 
                                allowFullScreen 
                                src="https://maps.google.com/maps?q=H%20No:%206-477,%20Sri%20Ram%20Nagar%20Colony,%20Balaji%20Nagar,%20Hyderabad,%20Telangana%20-%20500087&output=embed"
                            ></iframe>
                            <div className="hq-visual-overlay"></div>
                        </div>
                        <div className="hq-info-side">
                            <span className="section-tag" style={{ textAlign: 'left', marginBottom: '20px' }}>/ Strategic Hub</span>
                            <h3>Flagship <br />Headquarters.</h3>
                            
                            <div className="hq-detail-block">
                                <h4 className="hub-city">Hyderabad</h4>
                                <p className="hub-address">6-477, Sri Ram Nagar Colony<br />Balaji Nagar, Hyderabad, Telangana - 500087</p>
                                <a href="mailto:india.hq@fraylon.com" className="hub-contact">
                                    india.hq@fraylon.com <FiArrowUpRight />
                                </a>
                            </div>

                            <div className="hq-highlights">
                                <div className="highlight-item">
                                    <span className="h-label">Capabilities</span>
                                    <span className="h-value">Core Engineering, AI R&D</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="h-label">Operations</span>
                                    <span className="h-value">24/7 Global Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '40px 0', textAlign: 'center', opacity: '0.3', fontSize: '0.8rem' }}>
                FRAYLON TECHNOLOGIES © 2026 — ALL RIGHTS RESERVED
            </footer>
        </div>
    );
};

export default Contact;


