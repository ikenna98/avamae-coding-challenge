import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import HomeMainContent from "../../components/HomeMainContent/HomeMainContent";

interface HomeProps {
    pageImage: string;
}

const Home: React.FC<HomeProps> = ({ pageImage }) => {
    return (
        <>
            <Carousel />
            <HomeMainContent pageImage={pageImage} />
        </>
    );
};

export default Home;
