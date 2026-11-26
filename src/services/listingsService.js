import { findAllListings, findListingById, findListingsByCountry} from "../data/listingsData.js";

export const getListingsByCountry = async (country) =>
{
    return await findListingsByCountry(country);
}

export const getListings = async (type, page, pageSize) => {
    return await findAllListings(type, page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}
