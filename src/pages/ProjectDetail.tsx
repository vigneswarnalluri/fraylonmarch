import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import type { Project } from '../data/servicesData';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import './ProjectDetail.css';

interface EnrichedProject extends Project {
    serviceTitle: string;
}

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    let project: EnrichedProject | null = null;
    if (id) {
        for (const serviceKey in servicesData) {
            const service = servicesData[serviceKey];
            if (service.projects) {
                const found = service.projects.find((p) => p.link === `/work/${id}`);
                if (found) {
                    project = { ...found, serviceTitle: service.title };
                    break;
                }
            }
        }
    }

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="project-detail">
            <SEO title={`${project.title} | Case Study | Fraylon Technologies`} description={project.desc} />
            <div className="project-detail-container">
                <Link to="/projects" className="back-link" style={{ marginBottom: '40px' }}>
                    <FaArrowLeft /> Back to Projects
                </Link>

                <header className="project-header">
                    <div className="project-meta">
                        {project.tags?.map((tag: string, i: number) => (
                            <span key={i} className="project-meta-tag">{tag}</span>
                        ))}
                    </div>
                    <motion.h1
                        className="project-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.title}
                    </motion.h1>
                    <p className="project-subtitle">{project.desc}</p>
                </header>

                <motion.div
                    className="project-showcase"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src={project.image} alt={project.title} />
                </motion.div>

                <div className="project-info-grid">
                    <div className="project-description">
                        <h3>About the Project</h3>
                        <p>
                            {/* Since we don't have detailed long-form content, we reuse the description generic text but in a real app this would be longer. */}
                            This project represents a comprehensive solution as part of our {project.serviceTitle} offerings.
                            Focusing on scalable architecture and premium user experience, we delivered
                            {project.title} to meet rigorous industry standards.
                        </p>
                        <p>
                            We utilized state-of-the-art technologies {project.tags?.length > 0 ? `including ${project.tags.join(', ')}` : ''}
                            to ensure high performance, security, and maintainability.
                        </p>
                    </div>

                    <aside className="project-sidebar">
                        <h4 className="sidebar-title">Project Details</h4>

                        <div className="info-item">
                            <div className="info-label">Service Category</div>
                            <div className="info-value">{project.serviceTitle || 'Custom Development'}</div>
                        </div>

                        <div className="info-item">
                            <div className="info-label">Client Industry</div>
                            <div className="info-value">{project.tags?.[1] || project.tags?.[0] || 'Technology'}</div>
                        </div>

                        <div className="info-item">
                            <div className="info-label">Key Technologies</div>
                            <div className="info-value">
                                {project.tags?.join(', ')}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
