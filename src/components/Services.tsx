import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCloud, FaBrain, FaShieldAlt, FaCode, FaChartLine, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import './Services.css';

interface ServiceItem {
    icon: ReactNode;
    title: string;
    desc: string;
    image: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        icon: <FaCloud />,
        title: "Cloud Infrastructure",
        desc: "Scalable, secure, and resilient cloud architectures designed for the enterprise.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
        link: "/services/digital-transformation"
    },
    {
        icon: <FaBrain />,
        title: "Artificial Intelligence",
        desc: "Deploying generative AI agents to automate complex workflows and decision making.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
        link: "/services/ai-integration"
    },
    {
        icon: <FaCode />,
        title: "Digital Engineering",
        desc: "End-to-end software development that modernizes legacy systems.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        link: "/services/software-dev"
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        desc: "Zero-trust security frameworks protecting your most critical digital assets.",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        link: "/services/tech-consulting"
    },
    {
        icon: <FaChartLine />,
        title: "Data & Analytics",
        desc: "Turning raw data into actionable strategic insights via advanced pipelines.",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        link: "/solutions/data"
    },
    {
        icon: <FaMobileAlt />,
        title: "Enterprise Mobility",
        desc: "Seamless mobile experiences for your workforce and customers.",
        image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
        link: "/services/native-app"
    }
];

const ServiceCard = ({ service, index }: { service: ServiceItem, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Move image vertically as user scrolls
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    // Removed useSpring to prevent initial 'jump' when spring settles from 0 to -10%

    return (
        <motion.div
            ref={ref}
            className="service-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
        >
            <Link
                to={service.link}
                className="service-card-link"
                aria-label={`Learn more about ${service.title}`}
                style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}
            >
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="read-more-link">
                        LEARN MORE <FaArrowRight size={12} />
                    </div>
                </div>
            </Link>

            {/* Background Image with Parallax */}
            <div className="service-image-container"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="service-bg-image"
                    style={{
                        y,
                        scale: 1.2,
                        height: '110%',
                        top: '-5%',
                        position: 'absolute'
                    }}
                />
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <span className="section-label">OUR EXPERTISE</span>
                        <h2 className="section-title">End-to-End <br /> Digital Capabilities</h2>
                    </div>
                    <p className="section-desc">
                        We deliver a comprehensive suite of services to help you navigate the complexities of the digital age.
                    </p>
                </div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
