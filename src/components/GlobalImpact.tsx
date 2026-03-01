import { motion } from 'framer-motion';
import './GlobalImpact.css';

const GlobalImpact = () => {
    return (
        <section className="impact-section">
            <div className="impact-container-full" style={{ padding: '0 60px' }}>
                <div className="section-header" style={{ border: 'none', marginBottom: '0' }}>
                    <div>
                        <span className="section-label">GLOBAL FOOTPRINT</span>
                        <h2 className="section-title">Delivering Value <br /> Without Borders</h2>
                    </div>
                    <p className="section-desc">
                        With delivery centers in 15 countries and a workforce of 12,000+, we operate where our clients need us most.
                    </p>
                </div>

                <div className="map-container">
                    <div className="map-aspect-container">
                        <div className="map-and-dots-wrapper" style={{ position: 'relative', width: '100%' }}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                                alt="World Map"
                                className="world-map-img"
                            />

                            {/* Map Dots */}
                            <div className="map-dots-layer">
                                {[
                                    { id: 'ny', name: 'New York, USA' },
                                    { id: 'ldn', name: 'London, UK' },
                                    { id: 'sg', name: 'Singapore' },
                                    { id: 'tk', name: 'Tokyo, Japan' },
                                    { id: 'dxb', name: 'Dubai, UAE' },
                                    { id: 'syd', name: 'Sydney, Australia' },
                                    { id: 'mum', name: 'Mumbai, India' }
                                ].map((loc, i) => (
                                    <motion.div
                                        key={loc.id}
                                        className={`map-point loc-${loc.id}`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="tooltip">{loc.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="impact-stat-card">
                            <h4>140+</h4>
                            <p>Fortune 500 Clients Served</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalImpact;
