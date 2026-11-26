import { getDb } from "./connection.js";

export async function findAllListings(type, page, pageSize) {
    const db = getDb();
    
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        
        const listings = await db.collection("listingsAndReviews")
            .find({ property_type : type})
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return listings;
    } else {
        // Sin paginación: trae todos los documentos
        const listings = await db.collection("listingsAndReviews").find({ property_type : type}).toArray();
        return listings;
    }
}

export async function findListingById(id) {
    const db = getDb();
    const listing = await db.collection("listingsAndReviews").findOne({ _id: id });
    console.log(listing);
    return listing;
}

export async function findListingsByCountry(country) {
    const db = getDb();
    const listing = await db.collection("listingsAndReviews").find({ "adress.country": country }).toArray();
    console.log(listing);
    return listing;
}
