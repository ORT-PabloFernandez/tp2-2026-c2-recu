import express from "express";
import { getAllListings, getListingId, getListingsCountry } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/country/:country", authMiddleware, getListingsCountry);
router.get("/:id", getListingId);


export default router;
