import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen, FiCode, FiCloud, FiExternalLink } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './TimelineSection.css';

const experienceItems = [
    {
        title: 'Artificial Neural Networks Intern',
        subtitle: 'Coding Junior (via Internshala)',
        date: '2024',
        icon: <FiCode />,
        link: '',
        bullets: [
            'Selected for an Artificial Neural Networks Internship where I worked on understanding neural network concepts and machine learning fundamentals.',
            'Learned Neural Network fundamentals and AI model concepts.',
            'Gained machine learning basics and practical exposure to AI technologies.',
        ],
    },
];

const certifications = [
    { title: 'Generative AI', org: 'Udemy', date: '2024', icon: <FiAward />, link: '' },
    { title: 'Introduction to Cloud Computing', org: 'NPTEL', date: '2024', icon: <FiCloud />, link: '' },
    { title: 'Responsive Web Design', org: 'FreeCodeCamp', date: '2024', icon: <FiCode />, link: '' },
    { title: 'Artificial Neural Networks', org: 'Internshala', date: '2024', icon: <FiAward />, link: '' },
];

export default function TimelineSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="training" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>experience <span className="accent">&amp;&amp;</span> certifications
                </motion.h2>

                <div className="timeline-grid">
                    {/* Experience */}
                    <div className="timeline-column">
                        <h3 className="timeline-column-title">
                            <FiBookOpen /> Experience
                        </h3>
                        <div className="timeline">
                            {experienceItems.map((item, i) => (
                                <motion.div
                                    className="timeline-item"
                                    key={item.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.2 + 0.3 }}
                                >
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card glass-card">
                                        <div className="timeline-icon">{item.icon}</div>
                                        <h4>{item.title}</h4>
                                        <p className="timeline-subtitle">{item.subtitle}</p>
                                        <span className="timeline-date">{item.date}</span>
                                        <ul className="timeline-bullets">
                                            {item.bullets.map((b, j) => (
                                                <li key={j}>{b}</li>
                                            ))}
                                        </ul>
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                                                View Certificate <FiExternalLink />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="timeline-column">
                        <h3 className="timeline-column-title">
                            <FiAward /> Certifications
                        </h3>
                        <div className="cert-list">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    className="cert-card glass-card"
                                    key={cert.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.15 + 0.3 }}
                                >
                                    <div className="cert-icon">{cert.icon}</div>
                                    <div className="cert-info">
                                        <h4>{cert.title}</h4>
                                        <p>{cert.org}</p>
                                        <span className="timeline-date">{cert.date}</span>
                                        {cert.link && (
                                            <div style={{marginTop: '4px'}}>
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn" style={{marginTop: 0}}>
                                                    View Certificate <FiExternalLink />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
