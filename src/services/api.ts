import axios, { AxiosError } from "axios";
import {
    CarouselData,
    ErrorResponse,
    FilteredFormValues,
} from "../types/types";

const baseUrl: string = "https://interview-assessment.api.avamae.co.uk/api/v1";

export const getCarouselData = async (): Promise<CarouselData> => {
    try {
        const response = await axios.get<CarouselData>(
            `${baseUrl}/home/banner-details`
        );
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            console.error("Error fetching data:", error);
        }
        throw error;
    }
};

export const postFormData = async (values: FilteredFormValues): Promise<boolean> => {
    try {
        const response = await axios.post(
            `${baseUrl}/contact-us/submit`,
            values
        );
        console.log("Form successfully submitted!", response);
        return true;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            const ErrorResponse = axiosError.response.data as ErrorResponse;
            console.error(
                "There was an error submitting the form!",
                ErrorResponse.Errors
            );
        }
        alert(`Error posting data: ${(error as Error).message}`);
        return false;
    }
};
