import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaLock, FaDatabase, FaBell, FaFolderOpen } from 'react-icons/fa';
import SEO from '../components/SEO';
import './WorkspacePrivacy.css';

const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'data-controller', title: '2. Data Roles & Scope' },
    { id: 'data-collected', title: '3. Information We Collect' },
    { id: 'legal-basis', title: '4. Legal Basis for Processing' },
    { id: 'how-we-use', title: '5. How We Use Information' },
    { id: 'third-party', title: '6. Third-Party Integrations' },
    { id: 'data-security', title: '7. Security Practices' },
    { id: 'data-retention', title: '8. Data Retention & Deletion' },
    { id: 'user-rights', title: '9. Your Rights & Choices' },
    { id: 'childrens-privacy', title: "10. Children's Privacy" },
    { id: 'changes', title: '11. Changes to This Policy' },
    { id: 'contact', title: '12. Contact Information' }
];

const WorkspacePrivacy = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const observerOptions = {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="legal-page workspace-privacy-page" style={{ overflow: 'visible' }}>
            <SEO 
                title="Privacy Policy | Fraylon Technologies LLP" 
                description="Privacy Policy for Fraylon Workspace, an enterprise collaboration platform developed by Fraylon Technologies LLP. Learn how we collect, use, and protect your data under GDPR and Google Play policies."
                keywords="Fraylon Workspace, Privacy Policy, Fraylon Technologies, GDPR, Data Safety, enterprise collaboration"
            />
            <div className="container" style={{ overflow: 'visible' }}>
                <header className="legal-header">
                    <motion.span
                        className="legal-tag"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Legal Document
                    </motion.span>
                    <motion.h1
                        className="legal-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Privacy Policy
                    </motion.h1>
                    <div className="legal-meta">
                        <span className="meta-item">Version 2.0</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-item">Last Updated: July 2026</span>
                    </div>
                </header>

                <div className="legal-container">
                    <aside className="legal-sidebar">
                        <div className="sidebar-sticky">
                            <h4 className="sidebar-title">On This Page</h4>
                            <ul className="legal-toc">
                                {sections.map(section => (
                                    <li key={section.id} className="toc-item">
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="legal-content">
                        {/* 1. Introduction */}
                        <section id="introduction" className="legal-section">
                            <h2>1. Introduction</h2>
                            <p>Fraylon Workspace is a professional enterprise collaboration and workspace productivity application developed and published by <strong>Fraylon Technologies LLP</strong> ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>"). We are committed to protecting the privacy of all authorized users of our services.</p>
                            <p>This Privacy Policy explains how personal data is collected, used, disclosed, and protected when you use our mobile and web applications (collectively, the "<strong>App</strong>"). This document has been prepared in accordance with Google Play Developer Policies, Google Play Data Safety specifications, and general global privacy guidelines, including the General Data Protection Regulation (GDPR).</p>
                        </section>

                        {/* 2. Data Roles & Scope */}
                        <section id="data-controller" className="legal-section">
                            <h2>2. Data Roles &amp; Scope</h2>
                            <p>Fraylon Workspace is primarily intended for deployment by businesses, teams, and other organizations. When you access the App as an employee or team member of an organization:</p>
                            <ul>
                                <li><strong>Your Organization is the Data Controller:</strong> Your employer or organization is the primary entity that controls and manages the workspace. They determine the purposes, administrative settings, and policies governing the workspace data.</li>
                                <li><strong>Fraylon Technologies is the Data Processor:</strong> We host, maintain, and provide the App infrastructure under the instructions of your organization. We act as a processor, providing the software framework to facilitate your organization's internal collaboration.</li>
                            </ul>
                            <div className="callout">
                                <p><strong>Note for Users:</strong> Because your organization manages your account, all requests regarding changes to user permissions, workspace deletions, or access privileges should first be directed to your organization's IT or workspace administrator.</p>
                            </div>
                        </section>

                        {/* 3. Information We Collect */}
                        <section id="data-collected" className="legal-section">
                            <h2>3. Information We Collect</h2>
                            <p>To provide a functional collaborative environment, Fraylon Workspace collects specific categories of user data. We only collect the minimum amount of data required to support the App's features.</p>
                            
                            <h3>A. Active Data Collection</h3>
                            <p>This data is actively supplied by you or your workspace administrator during account creation and subsequent use of the App:</p>
                            
                            <div className="data-table-container">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>Data Category</th>
                                            <th style={{ width: '40%' }}>Specific Data Collected</th>
                                            <th style={{ width: '30%' }}>App Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Personal Info</strong></td>
                                            <td>Name, email address, User IDs (Firebase UID)</td>
                                            <td>Account setup, profile identification, secure login</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Professional Details</strong></td>
                                            <td>Organization name, department, role, employee ID (optional)</td>
                                            <td>Workspace permissions, organizational structuring</td>
                                        </tr>
                                        <tr>
                                            <td><strong>User Content</strong></td>
                                            <td>Profile photo (optional, user-uploaded)</td>
                                            <td>Personalizing the workspace environment</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Collaborative Data</strong></td>
                                            <td>Tasks, calendar events, announcements, notifications list</td>
                                            <td>Core workflow, assignment tracking, and team messaging</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>B. Technical &amp; Device Data Collection</h3>
                            <p>Our infrastructure automatically processes technical data required for security, communication, and performance monitoring:</p>
                            
                            <div className="data-table-container">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>Data Category</th>
                                            <th style={{ width: '40%' }}>Specific Data Collected</th>
                                            <th style={{ width: '30%' }}>App Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Device or Other IDs</strong></td>
                                            <td>Unique device tokens (FCM push tokens), instance IDs</td>
                                            <td>Push notification delivery, diagnostic logs</td>
                                        </tr>
                                        <tr>
                                            <td><strong>App Activity</strong></td>
                                            <td>App interactions, page navigation, task actions</td>
                                            <td>UI responsiveness optimization and diagnostic tracking</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>C. Data We Do NOT Collect</h3>
                            <p>Fraylon Workspace is a productivity app and has no access to sensitive personal data categories. We explicitly declare that the App does <strong>not</strong> access, collect, or transmit:</p>
                            <ul>
                                <li>Approximate or precise location data</li>
                                <li>Financial details, billing, or card information</li>
                                <li>Health, fitness, or biometric data</li>
                                <li>SMS messages, call histories, or contacts list</li>
                                <li>Any media files, photos, or documents outside of the user-selected profile image</li>
                                <li>Microphone or camera hardware (except for the direct purpose of taking a profile picture)</li>
                            </ul>
                        </section>

                        {/* 4. Legal Basis for Processing */}
                        <section id="legal-basis" className="legal-section">
                            <h2>4. Legal Basis for Processing</h2>
                            <p>For users located within the European Economic Area (EEA) and under the General Data Protection Regulation (GDPR), we process your data under the following legal bases:</p>
                            <ul>
                                <li><strong>Performance of a Contract:</strong> The processing is necessary to perform our obligations under the agreement between us and your organization.</li>
                                <li><strong>Legitimate Interests:</strong> To maintain secure infrastructure, prevent platform fraud, protect user accounts, and verify domain configurations.</li>
                                <li><strong>Consent:</strong> When you voluntarily upload optional details, such as a profile image, you explicitly consent to the display of that image to other members of your workspace. You may remove your profile image at any time.</li>
                            </ul>
                        </section>

                        {/* 5. How We Use Information */}
                        <section id="how-we-use" className="legal-section">
                            <h2>5. How We Use Information</h2>
                            <p>We process the collected data solely to deliver the enterprise services configured for your organization. Specifically, your data is used for:</p>
                            <ul>
                                <li><strong>Account Administration &amp; Access Control:</strong> To authenticate your login credentials and apply your designated role permissions (e.g. Employee, Manager, CTO, Admin).</li>
                                <li><strong>Enterprise Communication:</strong> Processing and distributing team announcements, calendar invites, and notification alerts.</li>
                                <li><strong>Task Management &amp; Reporting:</strong> Managing deadlines, tracking task statuses, and generating productivity metric charts visible to your team.</li>
                                <li><strong>Notification Delivery:</strong> Sending push alerts for urgent task assignments and changes.</li>
                                <li><strong>Security &amp; Abuse Prevention:</strong> Verifying domain compliance (such as restricting login/registration strictly to the authorized <code>@fraylontech.com</code> domain) and preventing unauthorized platform access.</li>
                            </ul>
                            <p>We do not use your personal information for marketing, profiling, or target advertisement. We do not sell or trade user data to any external parties.</p>
                        </section>

                        {/* 6. Third-Party Integrations */}
                        <section id="third-party" className="legal-section">
                            <h2>6. Third-Party Integrations</h2>
                            <p>We utilize trusted backend infrastructure provided by <strong>Google Firebase</strong> (Google LLC) to deliver secure and stable performance. Data processed by these services is encrypted in transit and at rest:</p>

                            <div className="partner-card">
                                <div className="partner-icon" aria-hidden="true"><FaLock /></div>
                                <div className="partner-details">
                                    <h4>Firebase Authentication</h4>
                                    <p>Provides secure, encrypted user credential storage and session token verification. All login calls are validated against this service.</p>
                                </div>
                            </div>

                            <div className="partner-card">
                                <div className="partner-icon" aria-hidden="true"><FaDatabase /></div>
                                <div className="partner-details">
                                    <h4>Cloud Firestore</h4>
                                    <p>Acts as our database host, storing user profiles, active tasks, team configurations, and notification registers. Access is regulated by server-side Firebase Security Rules.</p>
                                </div>
                            </div>

                            <div className="partner-card">
                                <div className="partner-icon" aria-hidden="true"><FaBell /></div>
                                <div className="partner-details">
                                    <h4>Firebase Cloud Messaging (FCM)</h4>
                                    <p>Delivers real-time push alerts to your mobile or web device. This service utilizes unique device registration tokens to route notifications.</p>
                                </div>
                            </div>

                            <div className="partner-card">
                                <div className="partner-icon" aria-hidden="true"><FaFolderOpen /></div>
                                <div className="partner-details">
                                    <h4>Firebase Storage</h4>
                                    <p>Hosts profile images uploaded directly by users. Files are stored securely and accessed via authorized App requests.</p>
                                </div>
                            </div>

                            <p>Google may process information in accordance with its own privacy policies. You can learn more about how Google handles Firebase data by visiting the link below:<br/>
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="partner-policy-link">Google Privacy &amp; Terms Policy →</a></p>
                        </section>

                        {/* 7. Security Practices */}
                        <section id="data-security" className="legal-section">
                            <h2>7. Security Practices</h2>
                            <p>We implement professional, industry-standard administrative, physical, and technical safeguards designed to protect personal data from unauthorized access, modification, or disclosure:</p>
                            <ul>
                                <li><strong>Encryption in Transit:</strong> All communications between the App and Firebase backend services are strictly encrypted using HTTPS and transport layer security (TLS 1.2/1.3).</li>
                                <li><strong>Authentication Integrity:</strong> User sessions are validated using signed JSON Web Tokens (JWT) which expire automatically to prevent hijacking.</li>
                                <li><strong>Access Control &amp; Roles:</strong> Database queries are protected at the database level by robust Firebase Security Rules. Employees cannot modify organizational structure, and users can only access information within their permitted scope.</li>
                                <li><strong>Limited Administrative Access:</strong> Technical access to the cloud project console is restricted to senior engineering personnel under multi-factor authentication (MFA).</li>
                            </ul>
                        </section>

                        {/* 8. Data Retention & Deletion */}
                        <section id="data-retention" className="legal-section">
                            <h2>8. Data Retention &amp; Deletion</h2>
                            <p>Because Fraylon Workspace is an enterprise collaboration platform, data retention is managed according to the guidelines set by your organization (the Data Controller):</p>
                            <ul>
                                <li><strong>Active Workspace Accounts:</strong> We retain account, profile, and activity data while your organization maintains an active subscription or workspace on our platform.</li>
                                <li><strong>User Account Deletion:</strong> If you are a team member and wish to have your account deleted, please contact your organization's workspace administrator. When an administrator removes a profile, the personal record is deleted from the active authentication list.</li>
                                <li><strong>Independent Deletion Request:</strong> You may also request account and personal data deletion directly from us by submitting our online form:<br/>
                                <a href="https://forms.gle/ckzReZbmkBqyyPWw5" target="_blank" rel="noopener noreferrer" className="partner-policy-link">Fraylon Workspace Account Deletion Request Form →</a></li>
                                <li><strong>Metadata and Backups:</strong> System backups are maintained for up to 30 days for operational disaster recovery, after which backups are overwritten.</li>
                            </ul>
                        </section>

                        {/* 9. Your Rights & Choices */}
                        <section id="user-rights" className="legal-section">
                            <h2>9. Your Rights &amp; Choices</h2>
                            <p>Depending on your location and jurisdiction (such as under the GDPR or CCPA), you may possess specific statutory rights regarding your personal information:</p>
                            <ul>
                                <li><strong>Access &amp; Export:</strong> The right to request details on the personal data we hold and receive an exported copy of your profile.</li>
                                <li><strong>Correction:</strong> The right to request updates or corrections to outdated or inaccurate personal information.</li>
                                <li><strong>Deletion ("Right to be Forgotten"):</strong> The right to request the erasure of your personal data, subject to legitimate legal or contractual obligations.</li>
                                <li><strong>Restriction of Processing:</strong> The right to object to or ask us to restrict specific processing operations.</li>
                            </ul>
                            <p>To exercise any of these rights, please contact your organization administrator or reach out to us directly at <a href="mailto:contact@fraylontech.com" className="email-link">contact@fraylontech.com</a>. We will respond to all valid requests within 30 days.</p>
                        </section>

                        {/* 10. Children's Privacy */}
                        <section id="childrens-privacy" className="legal-section">
                            <h2>10. Children's Privacy</h2>
                            <div className="callout">
                                <p><strong>Age Restriction:</strong> Fraylon Workspace is designed exclusively for professional enterprise operations and is not intended for use by children. Users must be at least 18 years of age.</p>
                            </div>
                            <p>We do not knowingly collect or solicit personal information from children under the age of 18. If you believe that a minor has created an account or uploaded personal data, please notify us immediately. Upon verification, we will permanently delete the account and all associated records from our databases.</p>
                        </section>

                        {/* 11. Changes to This Policy */}
                        <section id="changes" className="legal-section">
                            <h2>11. Changes to This Policy</h2>
                            <p>We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory modifications. When updates are published, we will modify the "Last Updated" date at the top of this document. Significant changes will be announced inside the App or communicated to your workspace administrator. Continued use of the App following changes constitutes acknowledgment of the revised terms.</p>
                        </section>

                        {/* 12. Contact Information */}
                        <section id="contact" className="legal-section">
                            <h2>12. Contact Information</h2>
                            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your data, you can reach us via the following channels:</p>
                            
                            <div className="contact-grid">
                                <div className="contact-card">
                                    <div className="contact-title">Publisher</div>
                                    <div className="contact-value">Fraylon Technologies LLP</div>
                                </div>
                                <div className="contact-card">
                                    <div className="contact-title">Email Inquiry</div>
                                    <div className="contact-value"><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></div>
                                </div>
                                <div className="contact-card">
                                    <div className="contact-title">Official Website</div>
                                    <div className="contact-value"><a href="https://fraylontech.com" target="_blank" rel="noopener noreferrer">fraylontech.com</a></div>
                                </div>
                                <div className="contact-card">
                                    <div className="contact-title">Deletion Request</div>
                                    <div className="contact-value"><a href="https://forms.gle/ckzReZbmkBqyyPWw5" target="_blank" rel="noopener noreferrer">Account Deletion</a></div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default WorkspacePrivacy;
