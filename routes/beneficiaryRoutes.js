import express from "express";
import {
  getBeneficiaries,
  getBeneficiaryById,
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  searchBeneficiaries,
} from "../controllers/beneficiaryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Apply protect middleware to all routes
router.use(protect);

// Routes

router.get("/search", protect, authorizeRoles("Admin", "Manager"), searchBeneficiaries);

router.post("/", protect, authorizeRoles("Admin"), createBeneficiary);
router.put("/:id", protect, authorizeRoles("Admin", "Manager"), updateBeneficiary);
router.delete("/:id", protect, authorizeRoles("Admin"), deleteBeneficiary);

router.get("/", getBeneficiaries); // Get all beneficiaries
router.get("/:id", getBeneficiaryById); // Get single beneficiary by ID
router.post("/add", createBeneficiary); // Create a new beneficiary
router.put("/update/:id", updateBeneficiary); // Update beneficiary by ID
router.delete("/:id", deleteBeneficiary); // Delete beneficiary by ID

export default router;
