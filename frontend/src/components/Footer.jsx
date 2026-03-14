import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <a href="#hero" className="footer-logo">
                        <span className="logo-bracket">&lt;</span>
                        Nirmal
                        <span className="logo-bracket"> /&gt;</span>
                    </a>
                    <p className="footer-tagline">Building the future, one line of code at a time.</p>
                </div>

                <div className="footer-social">
                    <a href="https://github.com/nirmalmehra969" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/nirmal-kumar849" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href="mailto:nirmalmehra969@gmail.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>
                        Designed & Built with <FiHeart className="heart-icon" /> by Nirmal Kumar
                    </p>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
