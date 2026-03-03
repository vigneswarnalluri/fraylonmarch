import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiShield, FiActivity, FiTarget, FiLock } from 'react-icons/fi';
import Cookies from 'js-cookie';
import './CookieSettings.css';

const CookieSettings = () => {
    const [analytics, setAnalytics] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [showSaved, setShowSaved] = useState(false);

    useEffect(() => {
        const storedConsent = Cookies.get('cookieConsent');
        if (storedConsent) {
            try {
                const parsed = JSON.parse(storedConsent);
                setAnalytics(!!parsed.analytics);
                setMarketing(!!parsed.marketing);
            } catch (e) {
                console.error('Error parsing cookie preferences', e);
            }
        }
    }, []);

    const saveToCookies = (prefs: { necessary: boolean, analytics: boolean, marketing: boolean }) => {
        Cookies.set('cookieConsent', JSON.stringify(prefs), { expires: 365, secure: true, sameSite: 'Strict' });

        // Dispatch event if we want the banner to hide immediately in some cases, 
        // though usually navigation to this page means the banner is already hidden or will be.
        window.dispatchEvent(new Event('cookieConsentUpdated'));

        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 3000);
    };

    const handleSave = () => {
        saveToCookies({ necessary: true, analytics, marketing });
    };

    const handleAcceptAll = () => {
        setAnalytics(true);
        setMarketing(true);
        saveToCookies({ necessary: true, analytics: true, marketing: true });
    };

    return (
        <div className="legal-page cookie-settings-page">
            {/* Success Toast */}
            <AnimatePresence>
                {showSaved && (
                    <motion.div
                        className="cookie-toast"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <FiCheck className="toast-icon" />
                        <span>Preferences saved successfully!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container">
                <header className="legal-header">
                    <motion.span
                        className="legal-tag"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Trust & Transparency
                    </motion.span>
                    <motion.h1
                        className="legal-title"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Cookie Preference Center
                    </motion.h1>
                    <motion.p
                        className="legal-updated"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Customize how we use cookies to improve your experience.
                    </motion.p>
                </header>

                <main className="legal-content">
                    <div className="settings-card">
                        <div className="settings-intro">
                            <h3>Consent Management</h3>
                            <p>
                                When you visit our website, we may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to.
                            </p>
                        </div>

                        <div className="cookie-group-list">
                            {/* Essential */}
                            <div className="cookie-item essential">
                                <div className="cookie-item-icon">
                                    <FiShield />
                                </div>
                                <div className="cookie-item-info">
                                    <div className="item-header">
                                        <h4>Strictly Necessary Cookies</h4>
                                        <span className="status-label always-active">Required</span>
                                    </div>
                                    <p>These cookies are necessary for the website to function and cannot be switched off. They handle core features like security, network management, and accessibility.</p>
                                </div>
                                <div className="cookie-item-action">
                                    <div className="lock-icon"><FiLock /></div>
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className={`cookie-item ${analytics ? 'active' : ''}`}>
                                <div className="cookie-item-icon">
                                    <FiActivity />
                                </div>
                                <div className="cookie-item-info">
                                    <div className="item-header">
                                        <h4>Performance & Analytics</h4>
                                        <span className={`status-label ${analytics ? 'on' : 'off'}`}>
                                            {analytics ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. Data is aggregated and stays anonymous.</p>
                                </div>
                                <div className="cookie-item-action">
                                    <button
                                        className={`switch-btn ${analytics ? 'on' : ''}`}
                                        onClick={() => setAnalytics(!analytics)}
                                        aria-label="Toggle Analytics Cookies"
                                    >
                                        <span className="switch-slider"></span>
                                    </button>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div className={`cookie-item ${marketing ? 'active' : ''}`}>
                                <div className="cookie-item-icon">
                                    <FiTarget />
                                </div>
                                <div className="cookie-item-info">
                                    <div className="item-header">
                                        <h4>Targeting & Marketing</h4>
                                        <span className={`status-label ${marketing ? 'on' : 'off'}`}>
                                            {marketing ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <p>These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.</p>
                                </div>
                                <div className="cookie-item-action">
                                    <button
                                        className={`switch-btn ${marketing ? 'on' : ''}`}
                                        onClick={() => setMarketing(!marketing)}
                                        aria-label="Toggle Marketing Cookies"
                                    >
                                        <span className="switch-slider"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="settings-actions">
                            <button className="btn btn-outline" onClick={handleSave}>Save My Preferences</button>
                            <button className="btn btn-primary" onClick={handleAcceptAll}>Accept All Cookies</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CookieSettings;
