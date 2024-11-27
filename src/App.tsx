import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import pageImage from "./assets/images/pageImage.jpg";

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="app-main-content">
                <Routes>
                    <Route path="/" element={<Home pageImage={pageImage} />} />
                    <Route
                        path="/about-us"
                        element={<About pageImage={pageImage} />}
                    />
                    <Route path="/contact-us" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
