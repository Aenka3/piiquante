const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: { type: String },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String },
  heat: { type: Number },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [ String ],
  UsersDisliked: [ String ],
});

module.exports = mongoose.model('Sauce', sauceSchema);