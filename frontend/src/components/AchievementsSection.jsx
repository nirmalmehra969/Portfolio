import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiMessageSquare, FiCode, FiCheckCircle } from 'react-icons/fi';
import './AchievementsSection.css';

const achievements = [
    {
        icon: <FiAward />,
        title: '3rd Runner-up in Concoction 2024 Hackathon',
        description: 'Demonstrated strong problem-solving and coding skills to secure the 3rd Runner-up position in the Concoction 2024 Hackathon.',
        color: 'cyan',
    },
    {
        icon: <FiCode />,
        title: '150+ LeetCode Problems',
        description: 'Consistently solved over 150 competitive programming and data structure problems on LeetCode.',
        color: 'purple',
    },
];

export default function AchievementsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <section className="section" id="achievements" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>achievements
                </motion.h2>

                <div className="achievements-grid">
                    {achievements.map((item, i) => (
                        <motion.div
                            className={`achievement-card glass-card achievement-${item.color}`}
                            key={item.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: i * 0.15 + 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className={`achievement-icon ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
