// const reviewService = require('../Services/Review_Service');

// // Controller to create a review
// const createReview = async (req, res) => {
//   try {
//     const { userId, reviewText,name,profile } = req.body;

//     // Validate input
//     if (!userId || !reviewText || !name) {
//       return res.status(400).json({ message: 'User ID and Review Text are required.' });
//     }

//     const newReview = await reviewService.createReview(userId, reviewText);
//     res.status(201).json({ message: 'Review created successfully', review: newReview });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller to update a review
// const updateReview = async (req, res) => {
//   try {
//     const { reviewId, reviewText } = req.body;

//     // Validate input
//     if (!reviewId || !reviewText) {
//       return res.status(400).json({ message: 'Review ID and Review Text are required.' });
//     }

//     const updatedReview = await reviewService.updateReview(reviewId, reviewText);
//     res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller to delete a review
// const deleteReview = async (req, res) => {
//   try {
//     const { reviewId } = req.params;

//     // Validate input
//     if (!reviewId) {
//       return res.status(400).json({ message: 'Review ID is required.' });
//     }

//     const deletedReview = await reviewService.deleteReview(reviewId);
//     res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller to get all reviews by a user
// const getReviewsByUser = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // Validate input
//     if (!userId) {
//       return res.status(400).json({ message: 'User ID is required.' });
//     }

//     const reviews = await reviewService.getReviewsByUser(userId);
//     res.status(200).json({ reviews });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   createReview,
//   updateReview,
//   deleteReview,
//   getReviewsByUser,
// };



const reviewService = require('../Services/Review_Service');
const Review = require('../Models/Review'); // Assuming review schema is in this file

// Controller to create a review
const createReview = async (req, res) => {
  try {
    const { userId, reviewText } = req.body;

    // Validate input
    if (!userId || !reviewText ) {
      return res.status(400).json({ message: 'User ID, Review Text, and Name are required.' });
    }

    // Create a new review using the reviewService
    const newReview = await reviewService.createReview(userId, reviewText);

    // Respond with success message and created review
    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a review
const updateReview = async (req, res) => {
  try {
    const { reviewId, reviewText } = req.body;

    // Validate input
    if (!reviewId || !reviewText) {
      return res.status(400).json({ message: 'Review ID and Review Text are required.' });
    }

    // Update the review using reviewService
    const updatedReview = await reviewService.updateReview(reviewId, reviewText);

    // Respond with success message and updated review
    res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a review
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    // Validate input
    if (!reviewId) {
      return res.status(400).json({ message: 'Review ID is required.' });
    }

    // Delete the review using reviewService
    const deletedReview = await reviewService.deleteReview(reviewId);

    // Respond with success message
    res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all reviews by a user
const getReviewsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate input
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    // Fetch reviews by user from the service
    const reviews = await reviewService.getReviewsByUser(userId);

    // Respond with the reviews
    res.status(200).json({ reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByUser,
};

