import { getDb } from "./connection.js";

export async function findAllListings(page, pageSize, propertyType) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;

        // Si se solicita por tipo de propiedad:
        if (propertyType){
            const listings = await db.collection("listingsAndReviews")
                .find(
                    { property_type: propertyType }
                )
                .skip(skip)
                .limit(pageSize)
                .toArray();
                return listings;

        }else {
            const listings = await db.collection("listingsAndReviews")
                .find()
                .skip(skip)
                .limit(pageSize)
                .toArray();
                return listings;
        }

    } else {
        // Sin paginación: trae todos los documentos
        // Tambien se revisa si se filtro por tipo de propiedad
        if (propertyType){
            const listings = await db.collection("listingsAndReviews").find({ property_type: propertyType}).toArray();
            return listings;

        } else {
            const listings = await db.collection("listingsAndReviews").find().toArray();
            return listings;
        }
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
    const listings = await db.collection("listingsAndReviews")
        .find(
            { "address.country": country}
        )
        .toArray();
    return listings;
}
