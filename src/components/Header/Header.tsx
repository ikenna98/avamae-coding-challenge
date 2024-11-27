import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src={Logo} alt="Company Logo" />
            </Link>
            <nav>
                <ul className={styles.horizontal}>
                    <li>
                        <Link to="/" className={styles.link}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" className={styles.link}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className={styles.link}>
                            CONTACT US
                        </Link>
                    </li>
                    <li>
                        <button
                            className="button-blue-text button-login"
                            aria-label="Log in button"
                        >
                            Log in
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
