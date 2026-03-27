import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
                        <img src="/logo.png" alt="Fraylon Logo" className="footer-logo-img" />
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/fraylontechnologies" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/FraylonT53985" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X"><FaXTwitter /></a>
                        <a href="https://www.facebook.com/people/Fraylon-Technologies/61585342064284" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://www.instagram.com/fraylontechnologies/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <div className="newsletter-section">
                        <h5>Stay Informed</h5>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button className="btn btn-primary subscribe-btn">Join</button>
                        </form>
                    </div>
                    <div className="footer-contact-info-brand">
                        <p>6-477, Sri Ram Nagar Colony, Balaji Nagar, Hyderabad, Telangana - 500087</p>
                        <p><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></p>
                        <p><a href="tel:+17048281085">+1 (704) 828-1085</a></p>
                        <p><a href="tel:+919381617904">+91 93816 17904</a></p>
                    </div>
                </div>

                <div className="footer-nav-col">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/wordpress">WordPress Development</Link></li>
                        <li><Link to="/services/software-dev">Custom Software</Link></li>
                        <li><Link to="/services/ui-ux">Design Services</Link></li>
                        <li><Link to="/services/inbound-marketing">Digital Marketing</Link></li>
                        <li><Link to="/services/ai-integration">AI & Data Science</Link></li>
                        <li><Link to="/services/native-app">Mobile Apps</Link></li>
                        <li><Link to="/services/mvp-development">MVP Development</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h4>Solutions</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/tech-consulting">IT Consulting</Link></li>
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
                        <li><Link to="/projects">Case Studies</Link></li>
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
