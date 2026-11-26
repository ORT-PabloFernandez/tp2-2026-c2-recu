import express from "express";
import { getAllListings, getListingId, getListingsCountry, getTotalPrice } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/country/:country", getListingsCountry);
router.get("/:id", getListingId);
router.get("/:id/total-price", getTotalPrice);

export default router;
