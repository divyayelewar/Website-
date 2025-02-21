const Rating = require('../Models/Ratings');
const User = require('../Models/User');

// Service to create a review
 const createRating = async (userId, rating) => {
  const user = await User.findById(userId);
  
  if (!user) {
    throw new Error('User not found');
  }

  const review = new Rating({
    rating,
    user: userId
  });

  await review.save();
  return review;
}

// Service to update a review
const updateRating = async(ratingId, rating) => {
  const review = await Rating.findById(ratingId);

  if (!review) {
    throw new Error('Review not found');
  }

  review.rating = rating;
  await review.save();

  return review;
}

// Service to delete a review
const deleteRating = async (ratingId) => {
  const review = await Rating.findById(ratingId);

  if (!review) {
    throw new Error('Review not found');
  }

  await review.deleteOne();
  return review;
}

// Service to get all reviews for a user
const getRatingByUser = async (userId) => {
  const reviews = await Rating.find({ user: userId })
    .populate('user', 'username email'); 

  if (reviews.length === 0) {
    throw new Error('No reviews found for this user');
  }

  return reviews;
};


const getAll = async () =>{

  const ratings = await Rating.find();
  return ratings;

}
module.exports = {createRating,updateRating,deleteRating,getRatingByUser,getAll}
