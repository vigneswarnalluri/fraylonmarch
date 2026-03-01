import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';

// 1. Google Analytics Configuration
const GA_MEASUREMENT_ID = 'G-HZJFC48148';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] = useState(() => {
    const storedConsent = Cookies.get('cookieConsent');
    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent);
        return { necessary: true, analytics: !!parsed.analytics, marketing: !!parsed.marketing };
      } catch (e) {
        console.error('Error parsing cookie preferences', e);
      }
    }
    return { necessary: true, analytics: false, marketing: false };
  });

  // 2. Helper function to load Google Analytics
  const loadGoogleAnalytics = () => {
    // Prevent loading it twice
    if (document.getElementById('google-analytics-script')) return;

    console.log('Initializing Google Analytics...');

    // Inject the main script
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize the dataLayer
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);
  };

  useEffect(() => {
    const storedConsent = Cookies.get('cookieConsent');

    if (!storedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (preferences.analytics) {
      loadGoogleAnalytics();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    Cookies.set('cookieConsent', JSON.stringify(allAccepted), { expires: 365, secure: true, sameSite: 'Strict' });
    setPreferences(allAccepted);
    setIsVisible(false);

    // 3. Load immediately on accept
    loadGoogleAnalytics();
  };

  const handleSavePreferences = () => {
    Cookies.set('cookieConsent', JSON.stringify(preferences), { expires: 365, secure: true, sameSite: 'Strict' });
    setIsVisible(false);
    setShowSettings(false);

    // 4. Load immediately if approved in settings
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Bottom Banner */}
          {!showSettings && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                backgroundColor: '#ffffff',
                color: 'var(--color-brand-navy)',
                boxShadow: '0 -4px 30px rgba(0,0,0,0.08)',
                padding: '32px 0',
                borderTop: '1px solid rgba(0,0,0,0.05)'
              }}
              className="cookie-banner-full"
            >
              <div className="container cookie-banner-container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1 1 500px' }}>
                  <h4 style={{
                    fontSize: '1.25rem',
                    marginBottom: '12px',
                    color: 'var(--color-brand-navy)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700
                  }}>
                    We value your privacy
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0,
                    maxWidth: '800px'
                  }}>
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>

                <div className="cookie-banner-actions" style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => setShowSettings(true)}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--color-brand-navy)',
                      color: 'var(--color-brand-navy)',
                      padding: '14px 28px',
                      borderRadius: '0',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      letterSpacing: '0.02em',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(27, 43, 68, 0.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    Customize Settings
                  </button>

                  <button
                    onClick={handleAcceptAll}
                    style={{
                      background: 'var(--color-primary)',
                      border: '1px solid var(--color-primary)',
                      color: '#fff',
                      padding: '14px 36px',
                      borderRadius: '0',
                      fontWeight: 700,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 15px rgba(0, 191, 179, 0.2)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary-dark)';
                      e.currentTarget.style.borderColor = 'var(--color-primary-dark)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                    }}
                  >
                    ACCEPT ALL
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Settings Modal */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(4px)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}
            >
              <motion.div
                className="cookie-settings-modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                style={{
                  backgroundColor: '#ffffff',
                  width: '100%',
                  maxWidth: '700px',
                  borderRadius: '0',
                  padding: '40px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  maxHeight: '90vh',
                  overflowY: 'auto'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    color: 'var(--color-brand-navy)',
                    margin: 0
                  }}>
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    style={{ cursor: 'pointer', padding: '8px', fontSize: '1.2rem', color: 'var(--text-muted)' }}
                  >
                    ✕
                  </button>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
                  Manage your cookie preferences below. Essential cookies are always required for the website to function properly.
                </p>

                {/* Preference Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>

                  {/* Necessary */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-brand-navy)' }}>Strictly Necessary</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '400px', lineHeight: '1.5' }}>
                        These cookies are essential for the website to function properly and cannot be disabled.
                      </p>
                    </div>
                    <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Always Active</div>
                  </div>

                  {/* Analytics */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-brand-navy)' }}>Analytics Cookies</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '400px', lineHeight: '1.5' }}>
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously. (Google Analytics)
                      </p>
                    </div>
                    <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: preferences.analytics ? 'var(--color-primary)' : '#ccc',
                        transition: '0.4s',
                        borderRadius: '34px'
                      }}></span>
                      <span style={{
                        position: 'absolute', content: '""', height: '20px', width: '20px', left: '4px', bottom: '4px', backgroundColor: 'white', transition: '0.4s', borderRadius: '50%',
                        transform: preferences.analytics ? 'translateX(22px)' : 'translateX(0)'
                      }}></span>
                    </label>
                  </div>

                  {/* Marketing */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-brand-navy)' }}>Marketing Cookies</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '400px', lineHeight: '1.5' }}>
                        Used to track visitors across websites to display ads that are relevant and engaging.
                      </p>
                    </div>
                    <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: preferences.marketing ? 'var(--color-primary)' : '#ccc',
                        transition: '0.4s',
                        borderRadius: '34px'
                      }}></span>
                      <span style={{
                        position: 'absolute', content: '""', height: '20px', width: '20px', left: '4px', bottom: '4px', backgroundColor: 'white', transition: '0.4s', borderRadius: '50%',
                        transform: preferences.marketing ? 'translateX(22px)' : 'translateX(0)'
                      }}></span>
                    </label>
                  </div>

                </div>

                <div className="cookie-settings-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={handleAcceptAll}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--color-brand-navy)',
                      color: 'var(--color-brand-navy)',
                      padding: '12px 28px',
                      borderRadius: '0',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(27, 43, 68, 0.05)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    ACCEPT ALL
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    style={{
                      background: 'var(--color-primary)',
                      border: '1px solid var(--color-primary)',
                      color: '#fff',
                      padding: '12px 32px',
                      borderRadius: '0',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'Inter, sans-serif',
                      boxShadow: '0 4px 15px rgba(0, 191, 179, 0.2)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-primary-dark)'; e.currentTarget.style.borderColor = 'var(--color-primary-dark)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                  >
                    SAVE PREFERENCES
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
