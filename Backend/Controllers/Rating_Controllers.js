const Rating_Service = require('../Services/Rating_Service');

// Controller to create a review
const createRating = async (req, res) => {
  try {
    const { userId, rating } = req.body;

    // Validate input
    if (!userId || !rating) {
      return res.status(400).json({ message: 'User ID and Review Text are required.' });
    }

    const newReview = await Rating_Service.createRating(userId, rating);
    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a review
const updateRating = async (req, res) => {
  try {
    const { ratingId, rating } = req.body;

    // Validate input
    if (!ratingId || !rating) {
      return res.status(400).json({ message: 'Review ID and Review Text are required.' });
    }

    const updatedReview = await Rating_Service.updateRating(ratingId, rating);
    res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a review
const deleteRating = async (req, res) => {
  try {
    const { ratingId } = req.params;

    // Validate input
    if (!ratingId) {
      return res.status(400).json({ message: 'Review ID is required.' });
    }

    const deletedReview = await Rating_Service.deleteRating(ratingId);
    res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all reviews by a user
const getRatingByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate input
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const reviews = await Rating_Service.getRatingByUser(userId);
    res.status(200).json({ reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
       const ratings = await Rating_Service.getAll();
       return res.status(2001).send(ratings, "Succes")
  } catch (error) {
     return res.status(400).send(error,"Faild")
  }
}

module.exports = {
   createRating,updateRating,deleteRating,getRatingByUser,getAll
};
