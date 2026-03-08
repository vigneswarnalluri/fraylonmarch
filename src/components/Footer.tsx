import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand-col">
                    <div className="footer-brand">
                        <div className="footer-logo-icon" />
                        <h2>FRAYLON</h2>
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
                        <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                    <div className="newsletter-section">
                        <h5>Stay Informed</h5>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button className="btn btn-primary subscribe-btn">Join</button>
                        </form>
                    </div>
                    <div className="footer-contact-info-brand">
                        <p>Hyderabad, Telangana, India, 500001</p>
                        <p><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></p>
                        <p><a href="tel:+919059006521">+91 90590 06521</a></p>
                    </div>
                </div>

                <div className="footer-nav-col">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/no-code">No Code Development</Link></li>
                        <li><Link to="/services/custom-dev">Custom Development</Link></li>
                        <li><Link to="/services/design">Design Services</Link></li>
                        <li><Link to="/services/marketing">Marketing Services</Link></li>
                        <li><Link to="/services/ai-data">AI & Data Science</Link></li>
                        <li><Link to="/services/mobile-app">Mobile App Development</Link></li>
                        <li><Link to="/services/zero-to-one">Zero To One</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h4>Solutions</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/it-solutions">IT Solutions</Link></li>
                        <li><Link to="/solutions/cloud">Cloud Transformation</Link></li>
                        <li><Link to="/solutions/cyber">Cyber Security</Link></li>
                        <li><Link to="/solutions/sap">Enterprise ERP</Link></li>
                        <li><Link to="/solutions/data">Data Analytics</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h4>Industries</h4>
                    <ul className="footer-links">
                        <li><Link to="/ind/banking">Banking & Finance</Link></li>
                        <li><Link to="/ind/health">Healthcare</Link></li>
                        <li><Link to="/ind/manufacturing">Manufacturing</Link></li>
                        <li><Link to="/ind/retail">Retail & E-commerce</Link></li>
                        <li><Link to="/ind/energy">Energy & Utilities</Link></li>
                        <li><Link to="/ind/public">Public Sector</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h4>Company</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/news">News & Media</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <p>&copy; {currentYear} Fraylon Technologies. All rights reserved.</p>
                </div>
                <div className="footer-bottom-links">
                    <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                    <Link to="/terms-of-use" className="footer-bottom-link">Terms of Use</Link>
                    <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
                    <Link to="/cookie-settings" className="footer-bottom-link">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
