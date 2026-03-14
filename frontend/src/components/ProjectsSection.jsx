import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiCpu, FiTrendingUp, FiGlobe, FiEdit3, FiLayout, FiShoppingCart, FiMusic, FiGithub } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const projects = [
    {
        title: 'Bank Management System & ATM Simulator',
        date: '2023 - 2024',
        icon: <FiCpu />,
        github: 'https://github.com/nirmalmehra969',
        bullets: [
            'Developed a Java-based banking system that simulates real-world ATM operations.',
            'Implemented key features including Account creation, Cash deposit & withdrawal, Balance inquiry, Mini statement, and PIN change.',
            'Utilized Object-Oriented Programming (OOP) concepts and File Handling for robust system architecture.',
        ],
        tech: ['Java', 'OOP', 'File Handling'],
    },
    {
        title: 'AI Voice Assistant',
        date: '2024',
        icon: <FiTrendingUp />,
        github: 'https://github.com/nirmalmehra969',
        bullets: [
            'Developed an intelligent AI assistant capable of interacting through voice and text.',
            'Integrated GPT API for natural language understanding and AI generated responses.',
            'Implemented Voice commands, Speech-to-Text, and Text-to-Speech functionalities for seamless user interaction.',
        ],
        tech: ['Python', 'Node.js', 'GPT API', 'Speech-to-Text', 'Text-to-Speech'],
    },
];

export default function ProjectsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">~/</span>projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} inView={inView} />
                    ))}
                </div>

                <motion.div 
                    className="projects-footer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="https://github.com/nirmalmehra969" target="_blank" rel="noopener noreferrer" className="neon-btn github-more-btn">
                        <FiGithub /> Explore More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
