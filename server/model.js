const mongoose = require('mongoose')

// Define the schema
const teddySchema = new mongoose.Schema({
    id: {
      type: Number,     // Numerical ID (1, 2, 3, etc.)
      required: true,   // Ensures this field is mandatory
      unique: true      // Ensures no two teddies have the same ID
    },
    title: {
      type: String,     // Title of the teddy
      required: true    // Ensures this field is mandatory
    },
    image: {
      type: String,     // URL or path to the image
      required: true    // Ensures this field is mandatory
    }
  });
  
  // Create the model
  module.exports = mongoose.model('Teddy', teddySchema);
 

