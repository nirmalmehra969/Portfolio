import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

export default function AboutSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">~/</span>about_me
                </motion.h2>

                <motion.div
                    className="about-grid"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="terminal-window about-terminal">
                        <div className="terminal-header">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                            <span className="terminal-title">nirmal@portfolio:~</span>
                        </div>
                        <div className="terminal-body">
                            <p><span className="prompt">$ </span><span className="command">cat about.txt</span></p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// Who am I?</span>
                            </p>
                            <p className="about-text">
                                I am <span className="highlight">Nirmal Kumar</span>, a Computer Science Engineering student at <span className="highlight">Lovely Professional University</span> with a strong interest in software development, artificial intelligence, and data analytics.
                            </p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// What I do</span>
                            </p>
                            <p className="about-text">
                                I enjoy building intelligent systems and solving real-world problems using programming, data structures, and modern technologies. I continuously improve my skills by developing projects and learning new technologies such as <span className="highlight">AI APIs</span>, backend systems, and data analytics tools.
                            </p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// My Goal</span>
                            </p>
                            <p className="about-text">
                                My goal is to become a skilled <span className="highlight">software engineer</span> capable of developing scalable and intelligent applications.
                            </p>
                            <br />
                            <p><span className="prompt">$ </span><span className="cursor-line">_</span></p>
                        </div>
                    </div>

                    <div className="about-stats">
                        {[
                            { number: '150+', label: 'LeetCode Problems' },
                            { number: '7.2', label: 'CGPA' },
                            { number: 'AI & Data', label: 'Focus Area' },
                            { number: 'Java/Python', label: 'Primary Skills' },
                        ].map((stat, i) => (
                            <motion.div
                                className="stat-card glass-card"
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
