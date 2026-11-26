import { getListings, getListingById, getListingsByCountryService, getListingTotalPrice } from "../services/listingsService.js";

export const getAllListings = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const propertyType = req.query.property_type ? req.query.property_type : undefined;
        const listings = await getListings(page, pageSize, propertyType);
            res.json(listings);
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const listing = await getListingById(id);
        if (!listing){
            return res.status(404).json({ message: "Propiedad no encontrada"})
        } else {
            res.json(listing);
        }
    } catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingsByCountry = async (req, res) => {
    try {
        const country = req.params.country;
        const listings = await getListingsByCountryService(country);

        return res.json(listings);
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getListingTotalPriceController = async (req, res) => {
    try {
        const listing = await getListingTotalPrice(req.params.id);
        
        if(!listing){
            return res.status(404).json({
                message: "Propiedad no encontrada"
            });
        }

        return res.json(listing);
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" })
    }
}
