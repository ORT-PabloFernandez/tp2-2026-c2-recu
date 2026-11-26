import { findAllListings, findListingById } from "../data/listingsData.js";

export const getListings = async (page, pageSize, propertyType) => {
    return await findAllListings(page, pageSize, propertyType);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}
