import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import type { ServiceData, Project } from '../data/servicesData';
import SEO from '../components/SEO';
import './Projects.css';

// Define the hierarchy based on the user's request
const FILTER_HIERARCHY = [
    {
        category: 'No Code Development',
        services: [
            { id: 'wordpress', label: 'WordPress Development' },
            { id: 'webflow', label: 'Webflow Development' },
            { id: 'wix', label: 'Wix Development' },
            { id: 'shopify', label: 'Shopify Development' },
            { id: 'magento', label: 'Magento Development' },
            { id: 'bubble', label: 'Bubble.io Development' },
            { id: 'framer', label: 'Framer Development' },
            { id: 'dora', label: 'Dora Development' },
            { id: 'studio-ai', label: 'Studio AI Development' }
        ]
    },
    {
        category: 'Custom Development',
        services: [
            { id: 'software-dev', label: 'Software Development' },
            { id: 'web-app-dev', label: 'Web Application Development' },
            { id: 'custom-cms', label: 'Custom Website & CMS' },
            { id: 'portals', label: 'Enterprise Portals & Dashboard' },
            { id: 'ecommerce', label: 'eCommerce Website Dev' },
            { id: 'digital-transformation', label: 'Digital Transformation' },
            { id: 'staff-augmentation', label: 'IT Staff Augmentation' },
            { id: 'tech-consulting', label: 'Technology Consulting' },
            { id: 'maintenance', label: 'Maintenance & Support' }
        ]
    },
    {
        category: 'Design Services',
        services: [
            { id: 'ui-ux', label: 'UI/UX & Product Design' },
            { id: 'branding', label: 'Branding & Visual Identity' },
            { id: 'graphic-design', label: 'Graphic Design' }
        ]
    },
    {
        category: 'Marketing Services',
        services: [
            { id: 'inbound-marketing', label: 'Inbound Marketing' },
            { id: 'seo', label: 'SEO Services' },
            { id: 'social-media', label: 'Social Media & Paid Ads' }
        ]
    },
    {
        category: 'AI & Data Science',
        services: [
            { id: 'ai-integration', label: 'AI Integration & Strategy' },
            { id: 'ai-agents', label: 'AI Agents Development' },
            { id: 'nlp', label: 'Natural Language Processing' }
        ]
    },
    {
        category: 'Mobile App Development',
        services: [
            { id: 'native-app', label: 'Native Mobile App' },
            { id: 'hybrid-app', label: 'Hybrid Mobile App' }
        ]
    },
    {
        category: 'Zero To One',
        services: [
            { id: 'mvp-development', label: 'MVP Development' },
            { id: 'prototyping', label: 'Rapid Prototyping' }
        ]
    }
];

const Projects = () => {
    const navigate = useNavigate();
    // 'All' | Category Name | Service ID
    const [activeFilter, setActiveFilter] = useState('All');
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    // Track collapsed state for accordion sections
    const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleSection = (category: string) => {
        setCollapsedSections(prev => ({ ...prev, [category]: !prev[category] }));
    };

    // Flatten hierarchy for easy lookup
    const serviceCategoryMap = useMemo(() => {
        const map: Record<string, string> = {};
        FILTER_HIERARCHY.forEach(group => {
            group.services.forEach(svc => {
                map[svc.id] = group.category;
            });
        });
        return map;
    }, []);

    // Aggregate projects
    const allProjects = useMemo(() => {
        return Object.entries(servicesData).reduce((acc: Project[], [key, service]: [string, ServiceData]) => {
            if (service.projects) {
                const category = serviceCategoryMap[key] || 'Other';
                // Add serviceId and category to each project for filtering
                const enrichedProjects = service.projects.map((p) => ({
                    ...p,
                    serviceId: key,
                    category: category
                }));
                return [...acc, ...enrichedProjects];
            }
            return acc;
        }, []);
    }, [serviceCategoryMap]);

    // De-duplicate
    const uniqueProjects = useMemo(() => {
        return Array.from(new Set(allProjects.map((p) => p.title)))
            .map(title => allProjects.find((p) => p.title === title));
    }, [allProjects]);

    // Filter Logic
    // Filter Logic
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return uniqueProjects;

        // Check if filter is a Category or a specific Service ID
        const isCategory = FILTER_HIERARCHY.some(g => g.category === activeFilter);

        if (isCategory) {
            // Get all projects belonging to this category from the raw list
            const categoryProjects = allProjects.filter((p) => p.category === activeFilter);
            // Deduplicate by title within the category to avoid showing the same project twice if it's in multiple services of the same category
            return Array.from(new Set(categoryProjects.map((p) => p.title)))
                .map(title => categoryProjects.find((p) => p.title === title));
        } else {
            // Precise matching: Get projects explicitly listed under this Service ID
            // We use 'allProjects' here so we find the project entry even if it was deduped out of 'uniqueProjects'
            return allProjects.filter((p) => p.serviceId === activeFilter);
        }
    }, [activeFilter, uniqueProjects, allProjects]);

    return (
        <div className="projects-page">
            <SEO title="Our Work & Case Studies | Fraylon Technologies" description="Explore client stories and successful case studies in custom software development, cloud computing, enterprise databases, mobile apps, and AI solutions from Fraylon." />
            <section className="projects-hero condensed">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Our Featured Work
                </motion.h1>
                <div className="mobile-filter-toggle" onClick={() => setMobileFilterOpen(true)}>
                    <FaFilter /> Filter Projects
                </div>
            </section>

            <div className="projects-layout">
                {/* SIDEBAR FILTERS */}
                <aside className={`filters-sidebar ${mobileFilterOpen ? 'open' : ''}`} data-lenis-prevent>
                    <div className="sidebar-header">
                        <h3>Filter By</h3>
                        <button className="close-sidebar" onClick={() => setMobileFilterOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="filter-group">
                        <button
                            className={`sidebar-link ${activeFilter === 'All' ? 'active' : ''}`}
                            onClick={() => { setActiveFilter('All'); setMobileFilterOpen(false); }}
                        >
                            All Projects
                        </button>
                    </div>

                    {FILTER_HIERARCHY.map((group) => (
                        <div key={group.category} className="filter-group">
                            <div className="group-header" onClick={() => toggleSection(group.category)}>
                                <span
                                    className={`category-label ${activeFilter === group.category ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveFilter(group.category);
                                        setMobileFilterOpen(false);
                                    }}
                                >
                                    {group.category}
                                </span>
                                {collapsedSections[group.category] ? <FaChevronDown className="chevron" /> : <FaChevronUp className="chevron" />}
                            </div>

                            <AnimatePresence>
                                {!collapsedSections[group.category] && (
                                    <motion.div
                                        className="group-items"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {group.services.map(svc => (
                                            <button
                                                key={svc.id}
                                                className={`sidebar-sublink ${activeFilter === svc.id ? 'active' : ''}`}
                                                onClick={() => { setActiveFilter(svc.id); setMobileFilterOpen(false); }}
                                            >
                                                {svc.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </aside>

                {/* BACKDROP FOR MOBILE */}
                {mobileFilterOpen && <div className="sidebar-backdrop" onClick={() => setMobileFilterOpen(false)} />}

                {/* PROJECTS GRID */}
                <main className="projects-main">
                    <motion.div layout className="projects-grid sidebar-grid">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project: Project | undefined) => (
                                project ? (
                                    <motion.div
                                        layout
                                        key={project.title}
                                        className="project-card"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => navigate(project.link)}
                                    >
                                        <div className="project-image-wrapper">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                        </div>
                                        <div className="project-content">
                                            <div className="project-tags">
                                                {project.tags && project.tags.slice(0, 3).map((tag: string, i: number) => (
                                                    <span key={i} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <h3>{project.title}</h3>
                                            <p>{project.desc}</p>
                                        </div>

                                    </motion.div>
                                ) : null
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="no-results">
                            <h3>No projects found in this category yet.</h3>
                            <button onClick={() => setActiveFilter('All')}>View All Projects</button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Projects;
