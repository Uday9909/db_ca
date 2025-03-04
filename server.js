
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;
console.log(`Server is running on port ${PORT}`);

mongoose.connect('mongodb://localhost:27017/restaurantDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());

const restaurantRoutes = require('./routes/routes');
app.use('/api/restaurants', restaurantRoutes);

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
});

