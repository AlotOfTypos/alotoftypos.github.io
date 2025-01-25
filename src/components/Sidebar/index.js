import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/catppacino_brown.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className ='logo' to ='/'>
            <img src={Logo} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#2E1E1E" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#2E1E1E" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#2E1E1E" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="personal-link" to="/personal">
                <FontAwesomeIcon icon={faUser} color="#2E1E1E" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yoyochen7/"
                >
                    <FontAwesomeIcon icon = {faLinkedin} color = "#2E1E1E" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AlotOfTypos"
                >
                    <FontAwesomeIcon icon = {faGithub} color = "#2E1E1E" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar