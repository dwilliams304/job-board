export type LocationType = {
    streetAddress?: string;
    streetAddressTwo?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country: string;
    locationType: "On-Site" | "Hybrid" | "Remote"
}