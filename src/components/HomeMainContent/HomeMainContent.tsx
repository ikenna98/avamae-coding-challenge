import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeMainContent.module.css";

interface HomeMainContentProps {
    pageImage: string;
}

const HomeMainContent: React.FC<HomeMainContentProps> = ({ pageImage }) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.section} ${styles.firstContent}`}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={pageImage}
                        alt="Vibrant office"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h2 data-testid="homepage-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h2>
                    <p>
                        Laborum architecto exercitationem praesentium dolorem
                        dolor? Quaerat cupiditate quae sit itaque corrupti enim
                        adipisci? Molestias iure quas itaque cupiditate quod
                        vitae magnam! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolorem esse et perferendis suscipit
                        mollitia quidem dicta!
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <p className="text-bold">
                                Facilisi vehicula cubilia dictumst tristique
                                enim dictum bibendum.
                            </p>
                        </li>
                        <li>
                            <p className="text-bold">
                                Natoque phasellus nulla facilisi nisl nascetur.
                                Porttitor viverra ex ante cubilia nulla vivamus.
                            </p>
                        </li>
                        <li>
                            <p className="text-bold">
                                Lectus hendrerit montes himenaeos euismod
                                vestibulum semper etiam.
                            </p>
                        </li>
                        <li>
                            <p className="text-bold">
                                Sapien dolor consequat purus aptent taciti
                                ornare conubia proin. Luctus non metus, volutpat
                                volutpat conubia dignissim.
                            </p>
                        </li>
                    </ul>
                    <Link to="/about-us">
                        <button className="button-white-text">
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>
            <div className={`${styles.section} ${styles.secondContent}`}>
                <div className={styles.textContainer}>
                    <h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eaque alias voluptates porro, vel optio deleniti
                        sequi distinctio maiores quia error qui numquam officiis
                        ipsam accusantium. Eos aspernatur quo voluptate beatae.
                        Assumenda aliquid eos eius odio provident magnam
                        inventore molestias, nobis cum vero maiores est minima
                        voluptatibus eaque totam rerum quibusdam debitis facilis
                        officia exercitationem doloremque itaque odit
                        reprehenderit voluptatem? Expedita.
                    </p>
                    <button className="button-blue-text button-login">
                        Log in
                    </button>
                </div>
            </div>
            <div className={`${styles.section} ${styles.thirdContent}`}>
                <h2>Eos dolore voluptas est illum corporis quaerat incidunt</h2>
                <h3>Mollitia cum rem porro quam repellat</h3>
                <div className={styles.paragraphs}>
                    <p className="text-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis, esse numquam reprehenderit obcaecati dolor est,
                        aliquam, modi maxime omnis exercitationem ea. Velit
                        soluta nisi atque vitae fugit quae totam ipsum. Tempore
                        magni, nisi quasi similique officiis aspernatur sit
                        reprehenderit dolorum voluptas. Dolor, architecto.
                        Reprehenderit ipsam cupiditate eveniet perspiciatis
                        deserunt veritatis autem sit ipsa, iusto nostrum eius
                        vitae esse nulla deleniti! Officia veritatis, velit
                        impedit rem iure ad doloremque sunt dolore enim
                        obcaecati sint explicabo aliquam soluta sit, eius quia
                        accusantium a
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum suscipit quibusdam error voluptates?
                        Consectetur modi magnam rem laudantium ex eveniet,
                        accusamus repudiandae repellat optio, distinctio ipsam
                        molestias, vero voluptates recusandae? Fuga quaerat,
                        explicabo laborum sapiente beatae veritatis
                        perspiciatis, tempore nemo consectetur sunt velit. Nulla
                        iste eius non tempora. Tenetur nemo hic delectus et,
                        illum molestias qui voluptatum natus fuga voluptate.
                        Voluptatum ad incidunt quasi adipisci a. Praesentium
                        quod ut quo aut ab. Reiciendis dolorum consequatur
                        deleniti nam temporibus totam unde.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit, dignissimos libero? Culpa aliquam incidunt
                        officiis magni dolorem quisquam accusantium nemo ea
                        odit, provident rem facilis dolorum magnam animi
                        reiciendis commodi. Maiores perferendis, non esse
                        itaque, ullam aliquam accusamus quidem officiis porro
                        sunt dignissimos iste culpa sapiente est. Dignissimos,
                        eum qui excepturi in saepe at, eius exercitationem
                        minima expedita sint dolor. Quo aperiam ut harum
                        distinctio a illo dolores culpa! Culpa eum nisi ratione,
                        aperiam dignissimos quod possimus dolor, quo molestias
                        provident maxime ipsam ex consequuntur explicabo enim
                        delectus error omnis! Omnis quod fugit hic voluptatum
                        tenetur quasi odit aspernatur doloremque dolorum ea
                        aliquam nesciunt eveniet consectetur architecto error
                        distinctio beatae sit numquam perspiciatis mollitia
                        tempora, blanditiis accusantium quisquam dolor? Sit.
                        Minus facilis, animi, velit ea magnam sed repellat rem
                        inventore in ipsa corporis consectetur ratione eius iure
                        veniam tempore. Consequuntur odit officia similique non
                        ipsam facilis et nulla dolorem quo! Et consequuntur
                        expedita eligendi nobis nam commodi pariatur placeat
                        natus.
                    </p>
                </div>
                <Link to="/contact-us">
                    <button className="button-white-text">Contact us</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeMainContent;
