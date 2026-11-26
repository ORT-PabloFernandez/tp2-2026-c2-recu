import express from "express";
import { getAllListings, getListingId, getListingsByCountry } from "../controllers/listingsController.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/:id", getListingId);
router.get("/country/:country", getListingsByCountry);

export default router;
