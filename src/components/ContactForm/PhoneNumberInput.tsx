import React from "react";
import { FieldArray } from "formik";
import TextInput from "./TextInput";

interface PhoneNumberInputProps {
    values: { PhoneNumbers: string[] };
    className: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
    values,
    className,
}) => {
    const phoneArr: string[] = values.PhoneNumbers;

    return (
        <>
            <FieldArray
                name="PhoneNumbers"
                render={(arrayHelpers) => (
                    <>
                        {phoneArr.length > 0 &&
                            values.PhoneNumbers.map((_, index) => (
                                <TextInput
                                    label={`Phone number 0${index + 1}`}
                                    name={`PhoneNumbers[${index}]`}
                                    type="text"
                                    className={className}
                                    key={`phoneNumber${index}`}
                                    labelSpan=" - optional"
                                />
                            ))}
                        <button
                            type="button"
                            disabled={phoneArr.length > 1}
                            className="button-blue-text"
                            onClick={() => arrayHelpers.push("")}
                        >
                            Add new phone number
                        </button>
                    </>
                )}
            />
        </>
    );
};

export default PhoneNumberInput;
