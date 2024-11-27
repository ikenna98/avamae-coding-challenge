import React from "react";
import styles from "./About.module.css";

interface AboutProps {
    pageImage: string;
}

const About: React.FC<AboutProps> = ({ pageImage }) => {
    return (
        <div className={styles.container}>
            <h2>About us</h2>
            <p className="text-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum amet eligendi possimus adipisci sapiente. Officiis
                voluptas sit cum neque earum, tempore voluptatibus iure!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi dolore repellat distinctio eligendi sapiente, qui
                cupiditate. Reprehenderit delectus, atque id placeat ducimus sed
                neque omnis voluptates, libero, pariatur enim dolor. Illo
                laudantium ad id molestias, tempora illum, similique cupiditate
                commodi animi, temporibus accusantium non inventore pariatur
                quisquam dolores eligendi a quidem obcaecati exercitationem
                nulla?{" "}
                <span>
                    <a className="link-inline" href="#?">
                        Accusamus corporis quia
                    </a>
                </span>{" "}
                deleniti numquam quo.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus non quae distinctio illum magnam totam nihil a
                asperiores tempore est accusantium ducimus sed quam inventore
                aperiam ut, sequi optio sit? Nostrum veritatis cum quisquam
                officiis eius fugit reiciendis, tenetur ipsa atque. Vero aperiam
                neque fuga cumque amet. Cumque recusandae nulla maiores. Tempora
                provident, qui unde odit repudiandae asperiores officia
                aspernatur. Autem nostrum libero odio iste nesciunt.
            </p>
            <img src={pageImage} alt="Vibrant office" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                excepturi rem veritatis deserunt! Iure cupiditate quasi magnam
                ipsam error harum dolor odit? Nemo architecto dicta harum,
                nostrum veritatis ratione ipsum. Dolorum minima eaque quisquam
                impedit et. Possimus delectus odio enim perspiciatis nulla
                eligendi necessitatibus doloremque, voluptatem pariatur placeat
                fuga provident labore molestiae, laboriosam odit, praesentium
                rerum quaerat voluptate fugit laborum? Neque necessitatibus, quo
                veritatis aspernatur maxime natus molestiae molestias, eius
                quasi fuga fugiat dolor amet suscipit officiis dignissimos ipsa
                mollitia beatae ex illo perspiciatis quaerat libero cum! Nulla,
                tempore velit.
            </p>
            <h3>Lorem ipsum dolor sit amet consectetur:</h3>
            <ul className={styles.list}>
                <li>
                    <p className="text-bold">
                        Veritatis illo possimus consectetur assumenda minus,
                        commodi debitis facere architecto
                    </p>
                </li>
                <li>
                    <p className="text-bold">
                        Voluptates, fugit sequi ipsum ipsam rem illum. Dolorem
                        mollitia ducimus sint aperiam magnam iusto accusamus
                        eveniet, consequuntur temporibus quidem odit? Sequi,
                        nemo?
                    </p>
                </li>
                <li>
                    <p className="text-bold">
                        Accusamus sapiente ipsa minus consequuntur facilis.
                    </p>
                </li>
                <li>
                    <p className="text-bold">
                        Optio exercitationem fuga, magni natus architecto
                        asperiores, porro repudiandae perspiciatis similique
                        mollitia in, eius quidem cupiditate.
                    </p>
                </li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                aliquid distinctio, dignissimos perspiciatis dolor porro, cumque
                sint dolore neque corporis doloribus hic earum eligendi
                explicabo, eveniet natus assumenda obcaecati exercitationem!
                Quisquam, id deleniti? Magni ipsa quia assumenda perspiciatis
                error quibusdam dignissimos ullam nisi provident autem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                numquam ut ex quis. Odio repellat recusandae labore laudantium.
                Nihil laborum similique repudiandae natus itaque, nulla
                explicabo aliquam fugit consectetur architecto. Iste, ab
                facilis? Assumenda maiores nisi voluptatibus officia dolor
                voluptate recusandae error inventore eaque rerum facere quisquam
                veniam, aut porro magnam fugiat ratione harum corrupti odio
                consectetur dolores laudantium ullam. Commodi, iste magnam
                aliquam voluptatibus labore quaerat in recusandae autem.
                Voluptas, porro! Quis, sapiente magni praesentium molestias eum
                perspiciatis dolore commodi. Voluptas harum placeat ipsa,
                repudiandae.
            </p>
        </div>
    );
};

export default About;
