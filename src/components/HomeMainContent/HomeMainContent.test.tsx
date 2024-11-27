import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomeMainContent from "./HomeMainContent";

describe("Homepage Main Content", () => {
    const pageImage = "https://example.com/image.jpg";

    beforeEach(() => {
        render(<HomeMainContent pageImage={pageImage} />, {
            wrapper: BrowserRouter,
        });
    });

    afterEach(() => {
        cleanup();
    });

    it("renders with provided image", () => {
        const imgElement = screen.getByAltText(/vibrant office/i);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", pageImage);
    });

    it("renders heading", () => {
        expect(screen.getByTestId("homepage-heading"));
    });

    it('renders "Learn more" and "Contact us" links correctly', () => {
        const learnMoreLink = screen.getByRole("link", { name: /learn more/i });
        expect(learnMoreLink).toBeInTheDocument();
        expect(learnMoreLink).toHaveAttribute("href", "/about-us");

        const contactUsLink = screen.getByRole("link", { name: /contact us/i });
        expect(contactUsLink).toBeInTheDocument();
        expect(contactUsLink).toHaveAttribute("href", "/contact-us");
    });

    it("renders buttons with correct classes", () => {
        const learnMoreButton = screen.getByText(/learn more/i);
        expect(learnMoreButton).toHaveClass("button-white-text");

        const logInButton = screen.getByText(/log in/i);
        expect(logInButton).toHaveClass("button-blue-text button-login");

        const contactUsButton = screen.getByText(/contact us/i);
        expect(contactUsButton).toHaveClass("button-white-text");
    });
});
