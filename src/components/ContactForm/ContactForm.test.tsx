import React from "react";
import {
    render,
    screen,
    fireEvent,
    waitFor,
    cleanup,
} from "@testing-library/react";
import ContactForm from "./ContactForm";
import { postFormData } from "../../services/api";

jest.mock("../../services/api", () => ({
    postFormData: jest.fn(),
}));

describe("Contact Form", () => {
    beforeEach(() => {
        render(<ContactForm />);
    });

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it("notifies required fields", async () => {
        const submitButton = screen.getByRole("button", {
            name: /submit button/i,
        });
        const checkbox = screen.getByLabelText(/add address details/i);

        await waitFor(() => {
            fireEvent.click(checkbox);
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        expect(screen.getAllByText(/required/i)).toHaveLength(8);
    });

    it("allows only one extra number to be added", async () => {
        const phoneNumberOne = screen.getByLabelText(/phone number 01/i);
        const addPhoneButton = screen.getByText(/add new phone number/i);

        expect(phoneNumberOne).toBeInTheDocument();
        expect(addPhoneButton).toBeInTheDocument();

        await waitFor(() => {
            fireEvent.click(addPhoneButton);
        });

        expect(screen.getByLabelText(/phone number 02/i));
        expect(addPhoneButton).toBeDisabled();
    });

    it("renders address details based on checkbox", async () => {
        const checkbox = screen.getByLabelText(/add address details/i);
        const postcode = screen.getByLabelText(/postcode/i);

        expect(checkbox).toBeInTheDocument();

        await waitFor(() => {
            fireEvent.click(checkbox);
        });

        expect(postcode).toBeInTheDocument();
        expect(postcode).toBeVisible();
    });

    it("keeps the success modal hidden on render", async () => {
        expect(screen.queryByAltText(/success check/i)).toBeNull();
    });

    it("allows submit with required fields", async () => {
        const mockedPostFormData = postFormData as jest.MockedFunction<
            typeof postFormData
        >;

        const name = screen.getByLabelText(/full name/i);
        const email = screen.getByLabelText(/email address/i);
        const message = screen.getByLabelText(/message/i);

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(message).toBeInTheDocument();

        await waitFor(() => {
            fireEvent.change(name, { target: { value: "Test" } });
            fireEvent.change(email, { target: { value: "test@test.com" } });
            fireEvent.change(message, { target: { value: "Test" } });
        });

        await waitFor(() => {
            fireEvent.click(
                screen.getByRole("button", {
                    name: /submit button/i,
                })
            );
        });

        await waitFor(() => {
            expect(mockedPostFormData).toHaveBeenCalledTimes(1);
            expect(mockedPostFormData).toHaveBeenCalledWith(
                expect.objectContaining({
                    FullName: "Test",
                    EmailAddress: "test@test.com",
                    Message: "Test",
                    bIncludeAddressDetails: false,
                })
            );
        });
    });
});
