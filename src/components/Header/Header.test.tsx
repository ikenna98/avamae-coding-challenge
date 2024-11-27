import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";
import {
    render,
    screen,
    fireEvent,
    cleanup,
    waitFor,
} from "@testing-library/react";

describe("Header", () => {
    describe("Header rendering", () => {
        beforeEach(() => {
            render(<Header />, { wrapper: BrowserRouter });
        });

        afterEach(() => {
            cleanup();
        });

        it("renders the company logo", () => {
            const logo = screen.getByAltText(/company logo/i);
            expect(logo).toBeInTheDocument();
            expect(logo).toHaveAttribute("src", "Logo.svg");
        });

        it("renders navigation links", () => {
            const homeLink = screen.getByText(/home/i);
            const aboutLink = screen.getByText(/about us/i);
            const contactLink = screen.getByText(/contact us/i);
            expect(homeLink).toBeInTheDocument();
            expect(aboutLink).toBeInTheDocument();
            expect(contactLink).toBeInTheDocument();
        });

        it("renders login button", () => {
            const loginButton = screen.getByRole("button", {
                name: /log in button/i,
            });
            expect(loginButton).toBeInTheDocument();
        });
    });

    describe("Header navigation", () => {
        beforeEach(() => {
            render(
                <MemoryRouter initialEntries={["/"]}>
                    <Header />
                </MemoryRouter>
            );
        });

        it("navigates to home page", async () => {
            await waitFor(() => {
                fireEvent.click(screen.getByText(/home/i));
            });
            expect(screen.getByText(/home/i).closest("a")).toHaveAttribute(
                "href",
                "/"
            );
        });
        it("navigates to about page", async () => {
            await waitFor(() => {
                fireEvent.click(screen.getByText(/about us/i));
            });
            expect(screen.getByText(/about us/i).closest("a")).toHaveAttribute(
                "href",
                "/about-us"
            );
        });
        it("navigates to contact page", async () => {
            await waitFor(() => {
                fireEvent.click(screen.getByText(/contact us/i));
            });
            expect(
                screen.getByText(/contact us/i).closest("a")
            ).toHaveAttribute("href", "/contact-us");
        });
    });
});
