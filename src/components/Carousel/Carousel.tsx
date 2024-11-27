import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swiper from "react-id-swiper";
import { SwiperOptions } from "swiper/types/swiper-options";

import { CarouselDetail } from "../../types/types";
import { getCarouselData } from "../../services/api";
import styles from "./Carousel.module.css";

SwiperCore.use([Pagination, Navigation]);

const Carousel: React.FC = () => {
    const [data, setData] = useState<CarouselDetail[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const result = await getCarouselData();
                const carouselDetails: CarouselDetail[] = result.Details;
                setData(carouselDetails);
            } catch (error) {
                alert(`Error fetching data: ${(error as Error).message}`);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    const params: SwiperOptions = {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <>
            {isLoading ? (
                <div className={styles.loadingContainer}>
                    <p className={styles.loadingText}>Loading...</p>
                </div>
            ) : (
                <Swiper {...params}>
                    {/* Map is not done using a separate component due to conflicts with swiper */}
                    {data?.map((details, idx) => (
                        <div
                            className={styles.slideContainer}
                            key={`carousel${idx}`}
                        >
                            <img
                                className={styles.image}
                                src={details.ImageUrl}
                                alt={details.Title}
                            />
                            <div className={styles.info}>
                                <h1 className={styles.title}>
                                    {details.Title}
                                </h1>
                                <h2 className={styles.subtitle}>
                                    {details.Subtitle}
                                </h2>
                                <Link to="/contact-us">
                                    <button
                                        className={`${styles.button} button-white-text`}
                                    >
                                        Contact us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default Carousel;
