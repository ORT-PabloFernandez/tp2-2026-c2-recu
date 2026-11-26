import { getListings, getListingById, getListingsByCountry, getListingByTotalPrice} from "../services/listingsService.js";

export const getAllListings = async (req, res) => {
    try {
        const type = req.query.property_type;
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        
        const listings = await getListings(type,page, pageSize);
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
        if(!listing)
        {
           return res.status(404).json({ message: "Propiedad no ecnontrada" }); 
        }
        res.json(listing);
    } catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingsCountry = async (req, res) => {
    try {
        
        

        const listing = await getListingsByCountry(req.params.country);
        res.json(listing);
      
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getTotalPrice = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const listing = await getListingByTotalPrice(id);
        if(!listing)
        {
           return res.status(404).json({ message: "Propiedad no ecnontrada" }); 
        }
        res.json(listing);
    } catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};