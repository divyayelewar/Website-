const Review = require('../Models/Review');
const User = require('../Models/User');

// Service to create a review
 const createReview = async (userId, reviewText) => {
  const user = await User.findById(userId);
  
  if (!user) {
    throw new Error('User not found');
  }

  const review = new Review({
    reviewText,
    user: userId
  });

  await review.save();
  return review;
}

// Service to update a review
const updateReview = async(reviewId, reviewText) => {
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new Error('Review not found');
  }

  review.reviewText = reviewText;
  await review.save();

  return review;
}

// Service to delete a review
const deleteReview = async (reviewId) => {
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new Error('Review not found');
  }

  await review.deleteOne();
  return review;
}

// Service to get all reviews for a user
const getReviewsByUser = async (userId) => {
  const reviews = await Review.find({ user: userId })
    .populate('user', 'username email'); // Populating the user information (username and email)

  if (reviews.length === 0) {
    throw new Error('No reviews found for this user');
  }

  return reviews;
};

module.exports = {createReview,getReviewsByUser,deleteReview,updateReview}
