// const Review = require('../Models/Review');
// const User = require('../Models/User');

// // Service to create a review
// const createReview = async (userId, reviewText) => {
//   const user = await User.findById(userId);

//   if (!user) {
//     throw new Error('User not found');
//   }

//   // Create new review
//   const review = new Review({
//     reviewText,
//     user: userId
//   });

//   await review.save();

//   // Push review ID into user's reviews array
//   user.reviews.push(review._id);
//   await user.save();

//   return review;
// }

// // Service to update a review
// const updateReview = async (reviewId, reviewText) => {
//   const review = await Review.findById(reviewId);

//   if (!review) {
//     throw new Error('Review not found');
//   }

//   review.reviewText = reviewText;
//   await review.save();

//   return review;
// }

// // Service to delete a review
// const deleteReview = async (reviewId) => {
//   const review = await Review.findById(reviewId);

//   if (!review) {
//     throw new Error('Review not found');
//   }

//   // Remove review ID from user's reviews array
//   await User.findByIdAndUpdate(review.user, { $pull: { reviews: review._id } });

//   await review.deleteOne();
//   return review;
// }

// // Service to get all reviews for a user
// const getReviewsByUser = async (userId) => {
//   const reviews = await Review.find({ user: userId })
//     .populate('user', 'name email'); // Populating user info

//   return reviews;
// };

// module.exports = { createReview, getReviewsByUser, deleteReview, updateReview };

const Review = require('../Models/Review'); // Import the Review model

// Service to create a new review
const createReview = async (userId, reviewText) => {
  try {
    // Create the new review document
    const newReview = new Review({
      user: userId,
      reviewText
     
    });

    // Save the new review to the database
    await newReview.save();
    
    return newReview;
  } catch (error) {
    throw new Error('Error creating review: ' + error.message);
  }
};

// Service to update a review
const updateReview = async (reviewId, reviewText) => {
  try {
    // Find the review by ID and update it
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { reviewText },
      { new: true } // Return the updated document
    );

    if (!updatedReview) {
      throw new Error('Review not found');
    }

    return updatedReview;
  } catch (error) {
    throw new Error('Error updating review: ' + error.message);
  }
};

// Service to delete a review
const deleteReview = async (reviewId) => {
  try {
    // Find and delete the review by ID
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      throw new Error('Review not found');
    }

    return deletedReview;
  } catch (error) {
    throw new Error('Error deleting review: ' + error.message);
  }
};

// Service to get all reviews by a user
const getReviewsByUser = async (userId) => {
  try {
    // Find all reviews by a user
    const reviews = await Review.find({ user: userId }).populate('user', 'name'); // You can populate user data here

    return reviews;
  } catch (error) {
    throw new Error('Error fetching reviews: ' + error.message);
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByUser,
};
