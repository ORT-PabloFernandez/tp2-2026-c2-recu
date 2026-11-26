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

export const getListingTotalPrice = async (id) => {
    const listing = await findListingById(id);

    if(!listing){
        return null
    }

    const price = parseFloat(listing.price.toString());
    const cleaningFee = listing.cleaning_fee != null ? parseFloat(listing.price.toString()) : 0;

    return {
        _id: listing._id,
        name: listing.name,
        totalPrice: price + cleaningFee
    };
};