import express from "express";
import { getAllListings, getListingId, getListingsByCountry, getListingTotalPriceController} from "../controllers/listingsController.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/:id", getListingId);
router.get("/country/:country", getListingsByCountry);
router.get("/:id/total-price", getListingTotalPriceController);

export default router;
