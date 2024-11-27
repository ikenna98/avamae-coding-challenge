import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { FilteredFormValues, FormValues } from "../../types/types";
import { validateForm } from "../../helpers";
import styles from "./ContactForm.module.css";
import TextInput from "./TextInput";
import PhoneNumberInput from "./PhoneNumberInput";
import { postFormData } from "../../services/api";
import validIcon from "../../assets/images/Icon_Valid.svg";

const ContactForm: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const textClass: string = styles.input;

    const initialValues: FormValues = {
        FullName: "",
        EmailAddress: "",
        PhoneNumbers: [""],
        Message: "",
        bIncludeAddressDetails: false,
        AddressDetails: {
            AddressLine1: "",
            AddressLine2: "",
            CityTown: "",
            StateCounty: "",
            Postcode: "",
            Country: "",
        },
    };

    const handleSubmit = async (values: FormValues) => {
        // Created a new object with an optional PhoneNumbers field to match what was needed in the post request
        const filteredPhoneNumbers = values.PhoneNumbers.filter(
            (number) => number.trim() !== ""
        );
        const filteredValues: FilteredFormValues = { ...values };
        if (filteredPhoneNumbers.length === 0) {
            delete filteredValues.PhoneNumbers;
        }
        const isResolved = await postFormData(filteredValues);
        setIsSuccess(isResolved);
    };

    return (
        <>
            {isSuccess ? (
                <div className={styles.successContainer}>
                    <img src={validIcon} alt="Success check" />
                    <h3>Your message has been sent</h3>
                    <p>We will be in contact with you within 24 hours.</p>
                </div>
            ) : (
                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={handleSubmit}
                >
                    {({ values, isSubmitting }) => (
                        <Form className={styles.container}>
                            <div className={styles.nameAndEmailContainer}>
                                <TextInput
                                    label="Full name"
                                    name="FullName"
                                    type="text"
                                    className={textClass}
                                />
                                <TextInput
                                    label="Email address"
                                    name="EmailAddress"
                                    type="email"
                                    className={textClass}
                                />
                            </div>
                            <div className={styles.phoneContainer}>
                                <PhoneNumberInput
                                    values={values}
                                    className={textClass}
                                />
                            </div>
                            <TextInput
                                label="Message"
                                name="Message"
                                as="textarea"
                                className={styles.textarea}
                                labelSpan="Maximum text length is 500 characters"
                            />
                            <label className={`text-bold ${styles.checkbox}`}>
                                <Field
                                    type="checkbox"
                                    name="bIncludeAddressDetails"
                                />
                                Add address details
                            </label>
                            <div
                                className={styles.addressContainer}
                                hidden={!values.bIncludeAddressDetails}
                            >
                                <div className={styles.addressDetailsFirst}>
                                    <TextInput
                                        label="Address line 1"
                                        name="AddressDetails.AddressLine1"
                                        type="text"
                                        className={textClass}
                                    />
                                    <TextInput
                                        label="Address line 2"
                                        name="AddressDetails.AddressLine2"
                                        type="text"
                                        className={textClass}
                                        labelSpan=" - optional"
                                    />
                                </div>
                                <div className={styles.addressDetailsSecond}>
                                    <TextInput
                                        label="City/Town"
                                        name="AddressDetails.CityTown"
                                        type="text"
                                        className={textClass}
                                    />
                                    <TextInput
                                        label="State/County"
                                        name="AddressDetails.StateCounty"
                                        type="text"
                                        className={textClass}
                                    />
                                    <TextInput
                                        label="Postcode"
                                        name="AddressDetails.Postcode"
                                        type="text"
                                        className={textClass}
                                    />
                                    <TextInput
                                        label="Country"
                                        name="AddressDetails.Country"
                                        type="text"
                                        className={textClass}
                                    />
                                </div>
                            </div>
                            <button
                                className={`button-white-text ${styles.submitButton}`}
                                type="submit"
                                disabled={isSubmitting}
                                aria-label="Submit button"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </>
    );
};

export default ContactForm;
