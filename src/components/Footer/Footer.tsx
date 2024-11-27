import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Website Development by <span>AVAMAE</span>
            </p>
        </footer>
    );
};

export default Footer;
