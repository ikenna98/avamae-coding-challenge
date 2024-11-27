import React from "react";
import {
    cleanup,
    render,
    screen,
    waitFor,
    fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Carousel from "./Carousel";
import { getCarouselData } from "../../services/api";
import { CarouselData } from "../../types/types";
import { BrowserRouter } from "react-router-dom";

jest.mock("swiper/react", () => ({
    Swiper: ({ children }: any) => <div>{children}</div>,
    SwiperSlide: ({ children }: any) => <div>{children}</div>,
}));
jest.mock("swiper/modules", () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
}));

jest.mock("../../services/api");

const mockData: CarouselData = {
    Details: [
        {
            Title: "First Slide",
            Subtitle: "Subtitle 1",
            ImageUrl: "https://example.com/image1.jpg",
        },
        {
            Title: "Second Slide",
            Subtitle: "Subtitle 2",
            ImageUrl: "https://example.com/image2.jpg",
        },
        {
            Title: "Third Slide",
            Subtitle: "Subtitle 3",
            ImageUrl: "https://example.com/image3.jpg",
        },
    ],
    Status: "1",
    Errors: [],
};

describe("Carousel component", () => {
    beforeEach(async () => {
        (
            getCarouselData as jest.MockedFunction<typeof getCarouselData>
        ).mockResolvedValue(mockData);

        await waitFor(() => {
            render(<Carousel />, { wrapper: BrowserRouter });
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it("displays loading state initially", () => {
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("displays data correctly", async () => {
        await waitFor(() =>
            expect(screen.getByText("First Slide")).toBeInTheDocument()
        );
        await waitFor(() =>
            expect(screen.getByText("Second Slide")).toBeInTheDocument()
        );
        await waitFor(() =>
            expect(screen.getByText("Third Slide")).toBeInTheDocument()
        );
        expect(screen.getByAltText("First Slide")).toBeInTheDocument();
        expect(screen.getByAltText("Second Slide")).toBeInTheDocument();
        expect(screen.getByAltText("Third Slide")).toBeInTheDocument();
    });

    it("hides loading state after data is fetched", async () => {
        await waitFor(() => {
            expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
        });
    });
});
