const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    menu: [{
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
            required: true,
        },
    }],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
