import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <SEO title="Page Not Found | Fraylon Technologies" noindex={true} />
            <motion.div
                className="notfound-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="notfound-title">404</h1>
                <div className="notfound-divider"></div>
                <h2>Lost in Digitization?</h2>
                <p>The page you are looking for has been moved, renamed, or perhaps never existed in the first place.</p>
                <Link to="/" className="notfound-btn">
                    RETURN TO HEADQUARTERS
                </Link>
            </motion.div>

            {/* Background elements */}
            <div className="notfound-bg-graphic"></div>
        </div>
    );
};

export default NotFound;
