import { FormikErrors } from "formik";
import { AddressDetails, FormValues } from "../types/types";

export const validateForm = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};

    const requiredFields = [
        { key: "FullName", message: "Full name is required" },
        { key: "EmailAddress", message: "Email address is required" },
        { key: "Message", message: "Message is required" },
    ];

    // Validate non-address required fields
    requiredFields.forEach(({ key, message }) => {
        if (!values[key as keyof FormValues]) {
            errors[key as keyof FormValues] = message;
        }
    });

    // Validate email
    if (values.EmailAddress && !/\S+@\S+\.\S+/.test(values.EmailAddress)) {
        errors.EmailAddress = "Email address is invalid";
    }

    // Validate message length
    if (values.Message && values.Message.length > 500) {
        errors.Message = `Used ${values.Message.length} characters, maximum is 500`;
    }

    // Validate phone numbers if not left empty
    if (values.PhoneNumbers) {
        const phoneNumberErrors = values.PhoneNumbers.map((number) => {
            if (number.trim() !== "") {
                if (!/^\d+$/.test(number)) {
                    return "Phone number must contain only digits";
                } else if (number.length > 20) {
                    return "Phone number cannot exceed 20 characters";
                }
            }
            return "";
        }).filter((error) => error !== "");
        if (phoneNumberErrors.length > 0) {
            errors.PhoneNumbers = phoneNumberErrors;
        }
    }

    // Validate address details if included
    if (values.bIncludeAddressDetails) {
        const addressErrors: any = {};
        const postcodeRegex =
            /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;

        const addressFields = [
            { key: "AddressLine1", message: "Address line 1 is required" },
            { key: "CityTown", message: "City or town is required" },
            { key: "StateCounty", message: "State or county is required" },
            {
                key: "Postcode",
                message: "Postcode is required",
                regex: postcodeRegex,
                invalidMessage: "Must be a valid UK postcode",
            },
            { key: "Country", message: "Country is required" },
        ];

        addressFields.forEach(({ key, message, regex, invalidMessage }) => {
            if (!values.AddressDetails[key as keyof AddressDetails]) {
                addressErrors[key] = message;
            } else if (
                regex &&
                !regex.test(values.AddressDetails[key as keyof AddressDetails])
            ) {
                addressErrors[key] = invalidMessage;
            }
        });

        if (Object.keys(addressErrors).length > 0) {
            errors.AddressDetails = addressErrors;
        }
    }

    return errors;
};
