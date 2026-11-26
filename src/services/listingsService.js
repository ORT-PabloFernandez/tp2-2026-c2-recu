import { findAllListings, findListingById, findListingsByCountry, findListingsWithTotalPrice} from "../data/listingsData.js";

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
function toNumber(value) {
    if (value === undefined || value === null) {
        return 0;
    }
    return parseFloat(value.toString());
}

export const getListingByTotalPrice =  async (id)=> {
const listings = await findListingsWithTotalPrice(id);

return listings.map(listing => {
    const totalPrice =
        toNumber(listing.price) +
        toNumber(listing.cleaning_fee) +
        toNumber(listing.security_deposit) +
        toNumber(listing.extra_people);

    return { ...listing, totalPrice };

});
}
