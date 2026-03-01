import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWordpress, FaWix, FaShopify, FaMagento, FaCode, FaBrain, FaTools,
  FaLaptopCode, FaColumns, FaShoppingCart, FaBullhorn, FaSearch,
  FaHashtag, FaRocket, FaDraftingCompass, FaUserFriends, FaLightbulb, FaGlobe,
  FaPenNib, FaPalette, FaImage, FaMobile, FaLayerGroup, FaRobot, FaPaintBrush,
  FaCommentDots, FaCloud, FaDatabase, FaCogs, FaTruck, FaUsers, FaShieldAlt,
  FaNetworkWired, FaLock, FaBalanceScale, FaUniversity, FaUmbrella, FaCreditCard,
  FaChartLine, FaStore, FaHeartbeat, FaDna, FaPlane, FaIndustry, FaCar, FaBolt,
  FaFlask, FaBroadcastTower, FaFilm, FaMicrochip, FaLandmark, FaComment,
  FaInfoCircle, FaUserTie, FaHandshake, FaNewspaper,
  FaChevronRight, FaLinkedin, FaFacebook, FaInstagram, FaPlus, FaMinus, FaChevronLeft
} from 'react-icons/fa';
import { SiWebflow, SiFramer, SiSap, SiOracle } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivePanel, setMobileActivePanel] = useState<string>('main');
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth > 991) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setMobileActivePanel('main');
      setMobileSubExpanded(null);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderSubAccordion = (id: string, title: string, links: { to: string, label: string }[]) => {
    const isExpanded = mobileSubExpanded === id;
    return (
      <div className="mobile-sub-accordion">
        <div className={`mobile-sub-accordion-header ${isExpanded ? 'expanded' : ''}`} onClick={() => setMobileSubExpanded(isExpanded ? null : id)}>
          <span>{title}</span>
          {isExpanded ? <FaMinus className="sub-acc-icon" /> : <FaPlus className="sub-acc-icon" />}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div className="mobile-sub-accordion-body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
              {links.map((link, idx) => (
                <Link key={idx} to={link.to} onClick={closeMenu}>{link.label}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-icon" />
        FRAYLON
      </Link>

      <div className="nav-links desktop-only">

        {/* SERVICES MEGA MENU */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'services' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Services</span>
          <div className={`mega-menu ${activeMenu === 'services' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>
            <div className="mega-content-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>

              {/* Service Column 1 */}
              <div className="mega-col">
                <h4>No Code Development</h4>
                <Link to="/services/wordpress"><FaWordpress /> WordPress Development</Link>
                <Link to="/services/webflow"><SiWebflow /> Webflow Development</Link>
                <Link to="/services/wix"><FaWix /> Wix Development</Link>
                <Link to="/services/shopify"><FaShopify /> Shopify Development</Link>
                <Link to="/services/magento"><FaMagento /> Magento Development</Link>
                <Link to="/services/bubble"><FaComment /> Bubble.io Development</Link>
                <Link to="/services/framer"><SiFramer /> Framer Development</Link>
                <Link to="/services/dora"><FaPaintBrush /> Dora Development</Link>
                <Link to="/services/studio-ai"><FaRobot /> Studio AI Development</Link>

                <h4 style={{ marginTop: '20px' }}>IT Solutions</h4>
                <Link to="/services/digital-transformation"><FaCloud /> Digital Transformation</Link>
                <Link to="/services/staff-augmentation"><FaUserFriends /> IT Staff Augmentation</Link>
                <Link to="/services/tech-consulting"><FaLightbulb /> Technology Consulting</Link>
                <Link to="/services/maintenance"><FaTools /> Maintenance & Support</Link>
              </div>

              {/* Service Column 2 */}
              <div className="mega-col">
                <h4>Custom Development</h4>
                <Link to="/services/software-dev"><FaCode /> Software Development</Link>
                <Link to="/services/web-app-dev"><FaGlobe /> Web Application Development</Link>
                <Link to="/services/custom-cms"><FaLaptopCode /> Custom Website & CMS</Link>
                <Link to="/services/portals"><FaColumns /> Enterprise Portals & Dashboard</Link>
                <Link to="/services/ecommerce"><FaShoppingCart /> eCommerce Website Dev</Link>

                <h4 style={{ marginTop: '20px' }}>AI & Data Science</h4>
                <Link to="/services/ai-integration"><FaBrain /> AI Integration & Strategy</Link>
                <Link to="/services/ai-agents"><FaRobot /> AI Agents Development</Link>
                <Link to="/services/nlp"><FaCommentDots /> Natural Language Processing</Link>
              </div>

              {/* Service Column 3 */}
              <div className="mega-col">
                <h4>Design Services</h4>
                <Link to="/services/ui-ux"><FaPenNib /> UI/UX & Product Design</Link>
                <Link to="/services/branding"><FaPalette /> Branding & Visual Identity</Link>
                <Link to="/services/graphic-design"><FaImage /> Graphic Design</Link>

                <h4 style={{ marginTop: '20px' }}>Mobile App Development</h4>
                <Link to="/services/native-app"><FaMobile /> Native Mobile App</Link>
                <Link to="/services/hybrid-app"><FaLayerGroup /> Hybrid Mobile App</Link>
              </div>

              {/* Service Column 4 + Highlight */}
              <div className="mega-col">
                <h4>Marketing Services</h4>
                <Link to="/services/inbound-marketing"><FaBullhorn /> Inbound Marketing</Link>
                <Link to="/services/seo"><FaSearch /> SEO Services</Link>
                <Link to="/services/social-media"><FaHashtag /> Social Media & Paid Ads</Link>

                <h4 style={{ marginTop: '20px' }}>Zero To One</h4>
                <Link to="/services/mvp-development"><FaRocket /> MVP Development</Link>
                <Link to="/services/prototyping"><FaDraftingCompass /> Rapid Prototyping</Link>

                <div className="nav-highlight-card">
                  <div className="highlight-image">
                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consultation" />
                  </div>
                  <div className="highlight-content">
                    <h5>Not sure what you need?</h5>
                    <p>Book a free 15-min engineering consult to discuss your architecture.</p>
                    <Link to="/contact" className="highlight-link">Book Consult <span style={{ marginLeft: '4px' }}>→</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTIONS MEGA MENU (Core + Industries) */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('solutions')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'solutions' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Solutions</span>
          <div className={`mega-menu ${activeMenu === 'solutions' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>

            {/* CORE SOLUTIONS SECTION */}
            <div className="mega-section-header">Core Solutions</div>
            <div className="mega-content-grid" style={{ marginBottom: '50px' }}>
              <div className="mega-col">
                <h4>Digital Core</h4>
                <Link to="/solutions/cloud"><FaCloud /> Cloud Transformation</Link>
                <Link to="/solutions/data"><FaDatabase /> Data & Analytics</Link>
                <Link to="/solutions/ai"><FaBrain /> Artificial Intelligence</Link>
                <Link to="/solutions/automation"><FaCogs /> Intelligent Automation</Link>
              </div>
              <div className="mega-col">
                <h4>Enterprise</h4>
                <Link to="/solutions/sap"><SiSap /> SAP S/4HANA</Link>
                <Link to="/solutions/oracle"><SiOracle /> Oracle Cloud</Link>
                <Link to="/solutions/supply-chain"><FaTruck /> Smart Supply Chain</Link>
                <Link to="/solutions/hr"><FaUsers /> HR Transformation</Link>
              </div>
              <div className="mega-col">
                <h4>Security & Infra</h4>
                <Link to="/solutions/cyber"><FaShieldAlt /> Cybersecurity</Link>
                <Link to="/solutions/network"><FaNetworkWired /> Network Modernization</Link>
                <Link to="/solutions/cloud-sec"><FaLock /> Cloud Security</Link>
                <Link to="/solutions/grc"><FaBalanceScale /> Governance & Risk</Link>
              </div>
              {/* Featured Card */}
              <div className="mega-featured">
                <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" alt="Featured Solution" />
                <div className="mega-featured-text">
                  <h5>Agentic AI is Here</h5>
                  <p>Discover our new autonomous enterprise platform.</p>
                </div>
              </div>
            </div>

            {/* INDUSTRIES SECTION */}
            <div className="mega-section-header">Industries</div>
            <div className="mega-content-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>

              <div className="mega-col">
                <h4>Financial Services</h4>
                <Link to="/ind/banking"><FaUniversity /> Banking & Capital Markets</Link>
                <Link to="/ind/insurance"><FaUmbrella /> Insurance</Link>
                <Link to="/ind/payments"><FaCreditCard /> Payments & Fintech</Link>
                <Link to="/ind/wealth"><FaChartLine /> Wealth Management</Link>
              </div>

              <div className="mega-col">
                <h4>Consumer & Health</h4>
                <Link to="/ind/retail"><FaStore /> Retail & Consumer Goods</Link>
                <Link to="/ind/health"><FaHeartbeat /> Healthcare Payers & Providers</Link>
                <Link to="/ind/life-sci"><FaDna /> Life Sciences</Link>
                <Link to="/ind/travel"><FaPlane /> Travel, Transport & Logistics</Link>
              </div>

              <div className="mega-col">
                <h4>Industrial & Energy</h4>
                <Link to="/ind/manufacturing"><FaIndustry /> Industrial Manufacturing</Link>
                <Link to="/ind/auto"><FaCar /> Automotive</Link>
                <Link to="/ind/energy"><FaBolt /> Energy, Resources & Utilities</Link>
                <Link to="/ind/chem"><FaFlask /> Chemicals & Agriculture</Link>
              </div>

              <div className="mega-col">
                <h4>TMT & Public</h4>
                <Link to="/ind/telecom"><FaBroadcastTower /> Telecommunications</Link>
                <Link to="/ind/media"><FaFilm /> Media & Entertainment</Link>
                <Link to="/ind/hitech"><FaMicrochip /> High Tech & Semiconductors</Link>
                <Link to="/ind/public"><FaLandmark /> Public Sector & Education</Link>
              </div>
            </div>

          </div>
        </div>

        {/* COMPANY MEGA MENU */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'company' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Company</span>
          <div className={`mega-menu ${activeMenu === 'company' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>
            <div className="mega-content-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr' }}>

              <div className="mega-col">
                <h4>Who We Are</h4>
                <Link to="/about"><FaInfoCircle /> About Fraylon</Link>
                <Link to="/leadership"><FaUserTie /> Leadership Team</Link>
                <Link to="/partners"><FaHandshake /> Strategic Partners</Link>
                <Link to="/news"><FaNewspaper /> News & Media</Link>
              </div>

              <div className="mega-col">
                {/* Spacer or additional links if needed */}
              </div>

              <div className="mega-col">
                {/* Spacer */}
              </div>

              {/* Featured Card */}
              <div className="mega-featured">
                <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Team" />
                <div className="mega-featured-text">
                  <h5>Join the Vision</h5>
                  <p>Explore career opportunities and become part of our journey.</p>
                  <Link to="/careers" style={{ color: '#fff', marginTop: '10px', textDecoration: 'underline' }}>View Careers</Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Link to="/insights" className="nav-link" onClick={closeMenu}>Insights</Link>
        <Link to="/careers" className="nav-link" onClick={closeMenu}>Careers</Link>
      </div>

      <div className="nav-actions">
        <Link to="/contact" className="desktop-only"><button className="nav-cta">Contact Us</button></Link>
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="burger-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-menu-topbar">
              {mobileActivePanel !== 'main' ? (
                <button className="mobile-back-btn" onClick={() => { setMobileActivePanel('main'); setMobileSubExpanded(null); }}>
                  <FaChevronLeft style={{ marginRight: '8px', fontSize: '0.8rem' }} /> Back
                </button>
              ) : (
                <div style={{ width: '20px' }}></div>
              )}
              <div className="mobile-topbar-right">
                {/* 
                 Close button logic has been entirely merged into the main navbar 
                 so that it rests above the overlay with z-index.
                 */}
              </div>
            </div>

            <div className="mobile-menu-content-wrapper">
              <AnimatePresence mode="wait">
                {mobileActivePanel === 'main' && (
                  <motion.div
                    key="main"
                    className="mobile-menu-content"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mobile-accordion">
                      <div className="mobile-accordion-header" onClick={() => setMobileActivePanel('services')}>
                        <span>What we do</span>
                        <FaChevronRight className="mobile-chevron" />
                      </div>
                    </div>
                    <div className="mobile-accordion">
                      <div className="mobile-accordion-header" onClick={() => setMobileActivePanel('solutions')}>
                        <span>Solutions & Industries</span>
                        <FaChevronRight className="mobile-chevron" />
                      </div>
                    </div>
                    <div className="mobile-accordion">
                      <div className="mobile-accordion-header" onClick={() => setMobileActivePanel('company')}>
                        <span>Who we are</span>
                        <FaChevronRight className="mobile-chevron" />
                      </div>
                    </div>
                    <div className="mobile-accordion">
                      <Link to="/insights" className="mobile-accordion-header" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                        <span>Insights</span>
                        <FaChevronRight className="mobile-chevron" />
                      </Link>
                    </div>
                    <div className="mobile-accordion">
                      <Link to="/careers" className="mobile-accordion-header" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                        <span>Careers</span>
                        <FaChevronRight className="mobile-chevron" />
                      </Link>
                    </div>

                    <div className="mobile-menu-spacer"></div>

                    <div className="mobile-secondary-links">
                      <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                      <Link to="/careers" onClick={closeMenu}>Careers</Link>
                      <Link to="/about" onClick={closeMenu}>Locations</Link>
                    </div>

                    <div className="mobile-social-icons">
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                  </motion.div>
                )}

                {mobileActivePanel === 'services' && (
                  <motion.div
                    key="services"
                    className="mobile-menu-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mobile-panel-header-section">
                      <h2>Services</h2>
                      <p>Fraylon helps clients create long-term value for all stakeholders. Enabled by data and technology, our services and solutions provide trust through assurance and help clients transform, grow and operate.</p>
                      <Link to="/services/digital-transformation" onClick={closeMenu} className="mobile-explore-btn">Explore</Link>
                    </div>

                    <div className="mobile-sub-accordion-list">
                      {renderSubAccordion('nocode', 'No Code Development', [
                        { to: '/services/wordpress', label: 'WordPress Development' },
                        { to: '/services/webflow', label: 'Webflow Development' },
                        { to: '/services/wix', label: 'Wix Development' },
                        { to: '/services/shopify', label: 'Shopify Development' },
                        { to: '/services/magento', label: 'Magento Development' },
                        { to: '/services/bubble', label: 'Bubble.io Development' },
                        { to: '/services/framer', label: 'Framer Development' },
                        { to: '/services/dora', label: 'Dora Development' },
                        { to: '/services/studio-ai', label: 'Studio AI Development' }
                      ])}
                      {renderSubAccordion('custom', 'Custom Development', [
                        { to: '/services/software-dev', label: 'Software Development' },
                        { to: '/services/web-app-dev', label: 'Web Application Development' },
                        { to: '/services/custom-cms', label: 'Custom Website & CMS' },
                        { to: '/services/portals', label: 'Enterprise Portals & Dashboard' },
                        { to: '/services/ecommerce', label: 'eCommerce Website Dev' }
                      ])}
                      {renderSubAccordion('itsolutions', 'IT Solutions', [
                        { to: '/services/digital-transformation', label: 'Digital Transformation' },
                        { to: '/services/staff-augmentation', label: 'IT Staff Augmentation' },
                        { to: '/services/tech-consulting', label: 'Technology Consulting' },
                        { to: '/services/maintenance', label: 'Maintenance & Support' }
                      ])}
                      {renderSubAccordion('ai', 'AI & Data Science', [
                        { to: '/services/ai-integration', label: 'AI Integration & Strategy' },
                        { to: '/services/ai-agents', label: 'AI Agents Development' },
                        { to: '/services/nlp', label: 'Natural Language Processing' }
                      ])}
                      {renderSubAccordion('design', 'Design Services', [
                        { to: '/services/ui-ux', label: 'UI/UX & Product Design' },
                        { to: '/services/branding', label: 'Branding & Visual Identity' },
                        { to: '/services/graphic-design', label: 'Graphic Design' }
                      ])}
                      {renderSubAccordion('mobile', 'Mobile App Development', [
                        { to: '/services/native-app', label: 'Native Mobile App' },
                        { to: '/services/hybrid-app', label: 'Hybrid Mobile App' }
                      ])}
                      {renderSubAccordion('marketing', 'Marketing Services', [
                        { to: '/services/inbound-marketing', label: 'Inbound Marketing' },
                        { to: '/services/seo', label: 'SEO Services' },
                        { to: '/services/social-media', label: 'Social Media & Paid Ads' }
                      ])}
                      {renderSubAccordion('zero', 'Zero To One', [
                        { to: '/services/mvp-development', label: 'MVP Development' },
                        { to: '/services/prototyping', label: 'Rapid Prototyping' }
                      ])}
                    </div>
                  </motion.div>
                )}

                {mobileActivePanel === 'solutions' && (
                  <motion.div
                    key="solutions"
                    className="mobile-menu-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mobile-panel-header-section">
                      <h2>Solutions</h2>
                      <p>Modernizing core systems with scalable microservices and cloud-native architectures for the future-proof enterprise.</p>
                      <Link to="/solutions/cloud" onClick={closeMenu} className="mobile-explore-btn">Explore</Link>
                    </div>

                    <div className="mobile-sub-accordion-list">
                      {renderSubAccordion('core', 'Core Solutions', [
                        { to: '/solutions/cloud', label: 'Cloud Transformation' },
                        { to: '/solutions/data', label: 'Data & Analytics' },
                        { to: '/solutions/ai', label: 'Artificial Intelligence' },
                        { to: '/solutions/automation', label: 'Intelligent Automation' }
                      ])}
                      {renderSubAccordion('enterprise', 'Enterprise', [
                        { to: '/solutions/sap', label: 'SAP S/4HANA' },
                        { to: '/solutions/oracle', label: 'Oracle Cloud' },
                        { to: '/solutions/supply-chain', label: 'Smart Supply Chain' },
                        { to: '/solutions/hr', label: 'HR Transformation' }
                      ])}
                      {renderSubAccordion('security', 'Security & Infra', [
                        { to: '/solutions/cyber', label: 'Cybersecurity' },
                        { to: '/solutions/network', label: 'Network Modernization' },
                        { to: '/solutions/cloud-sec', label: 'Cloud Security' },
                        { to: '/solutions/grc', label: 'Governance & Risk' }
                      ])}

                      <div style={{ marginTop: '30px', marginBottom: '10px', paddingLeft: '10px' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700 }}>Industries</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '5px' }}>Tailored solutions for your sector.</p>
                      </div>

                      {renderSubAccordion('ind1', 'Financial Services', [
                        { to: '/ind/banking', label: 'Banking & Capital Markets' },
                        { to: '/ind/insurance', label: 'Insurance' },
                        { to: '/ind/payments', label: 'Payments & Fintech' },
                        { to: '/ind/wealth', label: 'Wealth Management' }
                      ])}
                      {renderSubAccordion('ind2', 'Consumer & Health', [
                        { to: '/ind/retail', label: 'Retail & Consumer Goods' },
                        { to: '/ind/health', label: 'Healthcare Payers' },
                        { to: '/ind/life-sci', label: 'Life Sciences' },
                        { to: '/ind/travel', label: 'Travel, Transport & Logistics' }
                      ])}
                      {renderSubAccordion('ind3', 'Industrial & Energy', [
                        { to: '/ind/manufacturing', label: 'Industrial Manufacturing' },
                        { to: '/ind/auto', label: 'Automotive' },
                        { to: '/ind/energy', label: 'Energy, Resources & Utilities' },
                        { to: '/ind/chem', label: 'Chemicals & Agriculture' }
                      ])}
                      {renderSubAccordion('ind4', 'TMT & Public', [
                        { to: '/ind/telecom', label: 'Telecommunications' },
                        { to: '/ind/media', label: 'Media & Entertainment' },
                        { to: '/ind/hitech', label: 'High Tech & Semiconductors' },
                        { to: '/ind/public', label: 'Public Sector & Education' }
                      ])}
                    </div>
                  </motion.div>
                )}

                {mobileActivePanel === 'company' && (
                  <motion.div
                    key="company"
                    className="mobile-menu-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mobile-panel-header-section">
                      <h2>Company</h2>
                      <p>Discover our core values, leadership, and global presence as we engineer the future of digital business.</p>
                      <Link to="/about" onClick={closeMenu} className="mobile-explore-btn">Explore</Link>
                    </div>

                    <div className="mobile-sub-accordion-list">
                      {renderSubAccordion('who', 'Who We Are', [
                        { to: '/about', label: 'About Fraylon' },
                        { to: '/leadership', label: 'Leadership Team' },
                        { to: '/partners', label: 'Strategic Partners' },
                        { to: '/news', label: 'News & Media' }
                      ])}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
