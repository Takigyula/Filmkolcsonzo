const Rating = require('../models/Rating');

exports.createRating = async (req, res) => {
  const { filmId, userId, rating } = req.body;
  const existingRating = await Rating.findOne({ filmId, userId });
  if (existingRating) {
    existingRating.rating = rating;
    await existingRating.save();
  } else {
    const newRating = new Rating({ filmId, userId, rating });
    await newRating.save();
  }
  res.json({ message: 'Értékelés sikeresen hozzáadva' });
};