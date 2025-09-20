const express = require("express");
const {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
  getDoctorReviews,
} = require("../controllers/reviewController");
const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

// All routes require authentication
router.use(protect);

// Get reviews for a specific doctor (must come before /:id route)
router.get("/doctors/:doctorId", getDoctorReviews);

// CRUD routes
router.route("/").get(getAllReviews);
router.route("/new").post(createReview);
router.route("/:id").get(getReview).patch(updateReview).delete(deleteReview);

module.exports = router;
