import { findAllListings, findListingById, findListingsByCountry } from "../data/listingsData.js";

export const getListings = async (page, pageSize, propertyType) => {
    return await findAllListings(page, pageSize, propertyType);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export const getListingsByCountryService = async (country) => {
    return await findListingsByCountry(country);
}
