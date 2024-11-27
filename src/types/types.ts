export interface CarouselDetail {
    Title: string;
    Subtitle: string;
    ImageUrl: string;
}

export interface CarouselData {
    Details: CarouselDetail[];
    Status: string;
    Errors: any[];
}

export interface AddressDetails {
    AddressLine1: string;
    AddressLine2: string;
    CityTown: string;
    StateCounty: string;
    Postcode: string;
    Country: string;
}

export interface FormValues {
    FullName: string;
    EmailAddress: string;
    PhoneNumbers: string[];
    Message: string;
    bIncludeAddressDetails: boolean;
    AddressDetails: AddressDetails;
}

export interface FilteredFormValues {
    FullName: string;
    EmailAddress: string;
    PhoneNumbers?: string[];
    Message: string;
    bIncludeAddressDetails: boolean;
    AddressDetails?: AddressDetails;
}

export interface ErrorResponse {
    Status: string;
    Errors: { FieldName: string; MessageCode: string }[];
}
