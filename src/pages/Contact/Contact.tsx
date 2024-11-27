import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Contact us</h2>
                <p className="text-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur architecto sapiente porro iure nemo quibusdam
                    atque.
                </p>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;
