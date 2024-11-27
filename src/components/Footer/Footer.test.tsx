import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders the correct text", () => {
        render(<Footer />);
        const pElement = screen.getByText(/website development by/i);
        const spanElement = screen.getByText(/avamae/i);
        expect(pElement).toBeInTheDocument();
        expect(spanElement).toBeInTheDocument();
        expect(spanElement.closest("p")).toBe(pElement);
    });
    cleanup();
});
