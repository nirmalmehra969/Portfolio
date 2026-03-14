import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaPython, FaJava, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase
} from 'react-icons/fa';
import { SiMysql, SiExpress, SiMongodb } from 'react-icons/si';
import { FiCode, FiLayers, FiZap, FiCpu, FiRepeat, FiCheckSquare, FiBarChart2, FiPieChart, FiActivity, FiDatabase } from 'react-icons/fi';
import { HiLightBulb, HiPuzzlePiece } from 'react-icons/hi2';
import './SkillsSection.css';

const skillGroups = [
    {
        title: 'Languages & Core',
        color: 'green',
        skills: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'DSA', icon: <FiCode /> },
            { name: 'OOP', icon: <FiLayers /> },
        ],
    },
    {
        title: 'Web & Backend',
        color: 'cyan',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'REST APIs', icon: <FiZap /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    {
        title: 'Data & AI',
        color: 'purple',
        skills: [
            { name: 'NumPy', icon: <FiDatabase /> },
            { name: 'Pandas', icon: <FiActivity /> },
            { name: 'Scikit-learn', icon: <FiCpu /> },
            { name: 'Power BI', icon: <FiBarChart2 /> },
            { name: 'Tableau', icon: <FiPieChart /> },
            { name: 'GPT API', icon: <FiZap /> },
            { name: 'LLaMA API', icon: <FiZap /> },
        ],
    },
    {
        title: 'Soft Skills',
        color: 'green',
        skills: [
            { name: 'Logical Thinking', icon: <HiLightBulb /> },
            { name: 'Problem Solving', icon: <HiPuzzlePiece /> },
            { name: 'Adaptability', icon: <FiRepeat /> },
            { name: 'Attention to Detail', icon: <FiCheckSquare /> },
        ],
    },
];

export default function SkillsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>skills
                </motion.h2>

                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            className="skill-group glass-card"
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: gi * 0.15, duration: 0.5 }}
                        >
                            <h3 className={`skill-group-title ${group.color}`}>
                                <span className="bracket">{`{`}</span> {group.title} <span className="bracket">{`}`}</span>
                            </h3>
                            <div className="skill-tags">
                                {group.skills.map((skill, si) => (
                                    <motion.span
                                        className={`tech-tag ${group.color}`}
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: gi * 0.15 + si * 0.05 + 0.3 }}
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
