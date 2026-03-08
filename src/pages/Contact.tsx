import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        inquiryType: 'General submission',
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        organization: '',
        jobTitle: '',
        message: '',
        privacyAcknowledgement: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        { id: 'services', title: 'Services Enquiry', icon: <FaCheckCircle /> },
        { id: 'general', title: 'General Submission', icon: <FaCheckCircle /> },
        { id: 'careers', title: 'Alumni & Careers', icon: <FaCheckCircle /> },
        { id: 'media', title: 'Media Inquiry', icon: <FaCheckCircle /> },
        { id: 'partnership', title: 'Partnership', icon: <FaCheckCircle /> },
        { id: 'other', title: 'Other Inquiries', icon: <FaCheckCircle /> }
    ];

    const handleCategoryClick = (category: any) => {
        setActiveCategory(category.id);
        setFormData(prev => ({ ...prev, inquiryType: category.title }));

        // Optional: Smooth scroll to form on mobile/small screens
        const formSection = document.querySelector('.contact-form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacyAcknowledgement) {
            alert("Please acknowledge the privacy statement.");
            return;
        }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            inquiryType: 'General submission',
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            organization: '',
            jobTitle: '',
            message: '',
            privacyAcknowledgement: false
        });
    };

    return (
        <div className="contact-page">
            {/* 1. Bold Infosys-inspired Hero */}
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-display-title">How can we <br /><span className="text-secondary-highlight">help you?</span></h1>
                        <p className="hero-subtext">Connect with our global engineering teams and specialists.</p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Enquiry Categories Grid */}
            <section className="enquiry-grid-section">
                <div className="container">
                    <div className="category-grid">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                className={`category-card ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(cat)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="card-accent-bar"></div>
                                <h3>{cat.title}</h3>
                                <FaCheckCircle className="card-check" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Professional Form (Visible if a category is selected or always visible as secondary) */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-layout-wrapper">
                        <div className="form-header-inline">
                            <h2>Submit an inquiry</h2>
                            <p>Required fields are marked with an asterisk (*)</p>
                        </div>

                        <div className="form-container-glass">
                            {isSubmitted ? (
                                <div className="form-success">
                                    <div className="success-check"><FaCheckCircle /></div>
                                    <h2>Submission received</h2>
                                    <p>An engineer from our team will review your request and contact you shortly.</p>
                                    <button className="btn-return" onClick={() => setIsSubmitted(false)}>Send another message</button>
                                </div>
                            ) : (
                                <form className="professional-form" onSubmit={handleSubmit}>
                                    <div className="form-grid">
                                        <div className="field-wrapper full-width">
                                            <label>Inquiry type *</label>
                                            <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
                                                <option value="General submission">General submission</option>
                                                <option value="Alumni inquiry">Alumni inquiry</option>
                                                <option value="Industry inquiry - Automotive">Industry inquiry - Automotive</option>
                                                <option value="Industry inquiry - Energy">Industry inquiry - Energy</option>
                                                <option value="Industry inquiry - Financial services">Industry inquiry - Financial services</option>
                                                <option value="Industry inquiry - Food, drink, consumer goods and retail">Industry inquiry - Food, drink, consumer goods and retail</option>
                                                <option value="Industry inquiry - Government and public sector">Industry inquiry - Government and public sector</option>
                                                <option value="Industry inquiry - Healthcare">Industry inquiry - Healthcare</option>
                                                <option value="Industry inquiry - Industrial manufacturing">Industry inquiry - Industrial manufacturing</option>
                                                <option value="Industry inquiry - Infrastructure">Industry inquiry - Infrastructure</option>
                                                <option value="Industry inquiry - Life sciences">Industry inquiry - Life sciences</option>
                                                <option value="Industry inquiry - Private equity">Industry inquiry - Private equity</option>
                                                <option value="Industry inquiry - Real estate">Industry inquiry - Real estate</option>
                                                <option value="Industry inquiry - Technology, telecommunication and media">Industry inquiry - Technology, telecommunication and media</option>
                                                <option value="Industry inquiry - Transport and leisure">Industry inquiry - Transport and leisure</option>
                                                <option value="People inquiry">People inquiry</option>
                                                <option value="Preference Center">Preference Center</option>
                                                <option value="Report issue with the site">Report issue with the site</option>
                                                <option value="Service inquiry - Private Enterprise">Service inquiry - Private Enterprise</option>
                                                <option value="Services inquiry - Advisory">Services inquiry - Advisory</option>
                                            </select>
                                        </div>

                                        <div className="field-wrapper">
                                            <label>First Name *</label>
                                            <input name="firstName" type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                                        </div>
                                        <div className="field-wrapper">
                                            <label>Last Name *</label>
                                            <input name="lastName" type="text" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
                                        </div>
                                        <div className="field-wrapper">
                                            <label>Work Email *</label>
                                            <input name="email" type="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="field-wrapper">
                                            <label>Country / Region *</label>
                                            <select name="country" value={formData.country} onChange={handleChange} required>
                                                <option value="">Select country</option>
                                                <option value="India">India</option>
                                                <option value="United States">United States</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Singapore">Singapore</option>
                                            </select>
                                        </div>
                                        <div className="field-wrapper">
                                            <label>Company / Organization *</label>
                                            <input name="organization" type="text" placeholder="Organization" value={formData.organization} onChange={handleChange} required />
                                        </div>
                                        <div className="field-wrapper">
                                            <label>Job title *</label>
                                            <input name="jobTitle" type="text" placeholder="e.g. CTO" value={formData.jobTitle} onChange={handleChange} required />
                                        </div>

                                        <div className="field-wrapper full-width">
                                            <label>Message (up to 2500 characters) *</label>
                                            <textarea name="message" rows={5} maxLength={2500} placeholder="How can we help?" value={formData.message} onChange={handleChange} required></textarea>
                                        </div>

                                        <div className="field-wrapper full-width checkbox-wrapper">
                                            <input name="privacyAcknowledgement" type="checkbox" id="privacyAcknowledgement" checked={formData.privacyAcknowledgement} onChange={handleChange} required />
                                            <label htmlFor="privacyAcknowledgement">
                                                I acknowledge that I have read and understood the <a href="/privacy" className="inline-link">online privacy statement</a>.
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-footer">
                                        <button className="submit-action" disabled={isSubmitting}>
                                            {isSubmitting ? 'Processing...' : 'Submit Message'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Global Presence Dark Section */}
            <section className="global-reach-dark">
                <div className="container">
                    <div className="reach-header">
                        <h2>Global Presence</h2>
                        <div className="accent-line"></div>
                    </div>
                    <div className="office-grid">
                        <div className="office-card">
                            <h4>India</h4>
                            <p>Engineering Square, Tech Hub<br />Hyderabad, Telangana</p>
                        </div>
                        <div className="office-card">
                            <h4>Americas</h4>
                            <p>Silicon Valley Center<br />San Jose, CA</p>
                        </div>
                        <div className="office-card">
                            <h4>Europe</h4>
                            <p>London Innovation Lab<br />United Kingdom</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
