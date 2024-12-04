import axios from "axios";
import {
    CarouselData,
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
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const postFormData = async (
    values: FilteredFormValues
): Promise<boolean> => {
    try {
        const response = await axios.post(
            `${baseUrl}/contact-us/submit`,
            values
        );
        console.log("Form successfully submitted!", response);
        return true;
    } catch (error) {
        console.error("There was an error submitting the form!", error);
        alert(`Error posting data: ${(error as Error).message}`);
        return false;
    }
};
