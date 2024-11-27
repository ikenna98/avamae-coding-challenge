import React from "react";
import { useField, Field, FieldAttributes, ErrorMessage } from "formik";
import styles from "./TextInput.module.css";

interface TextInputProps {
    label: string;
    labelSpan?: string;
}

const TextInput: React.FC<FieldAttributes<TextInputProps>> = ({
    label,
    labelSpan,
    ...props
}) => {
    const [field] = useField(props);

    return (
        <div className={styles.container}>
            <label className={props.className} htmlFor={props.id || props.name}>
                {label}
                {labelSpan && <span>{labelSpan}</span>}
            </label>
            <Field
                id={props.name}
                className={props.className}
                {...field}
                {...props}
            />
            <ErrorMessage
                name={props.name}
                component="p"
                className={styles.error}
            />
        </div>
    );
};

export default TextInput;
