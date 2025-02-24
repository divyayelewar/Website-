const Rating = require('../Models/Ratings');
const User = require('../Models/User');

// Service to create a review
 const createRating = async (userId, ratingText) => {
  const user = await User.findById(userId);
  
  if (!user) {
    throw new Error('User not found');
  }

  const rating = new Rating({
    ratingText,
    user: userId
  });

  await rating.save();
  return rating;
}

// Service to update a review
const updateRating = async(ratingId, ratingText) => {
  const rating= await Rating.findById(ratingId);

  if (!rating) {
    throw new Error('Rating not found');
  }

  rating.ratingText= ratingText;
  await rating.save();

  return rating;
}

// Service to delete a review
const deleteRating = async (ratingId) => {
  const rating = await Rating.findById(ratingId);

  if (!rating) {
    throw new Error('Rating not found');
  }

  await rating.deleteOne();
  return rating;
}

// Service to get all reviews for a user
const getRatingByUser = async (userId) => {
  const ratings = await Rating.find({ user: userId })
    .populate('user', 'username email'); 

  if (ratings.length === 0) {
    throw new Error('No reviews found for this user');
  }

  return ratings;
};


const getAll = async () =>{

  const ratings = await Rating.find();
  return ratings;

}

module.exports = {createRating,updateRating,deleteRating,getRatingByUser,getAll}
