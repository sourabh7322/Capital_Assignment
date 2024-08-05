
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const bikeRoutes = require('./routes/bikes');
const carRoutes = require('./routes/cars');
const houseRoutes = require('./routes/houses');
const laptopRoutes = require('./routes/laptops');
const mobileRoutes = require('./routes/mobiles');
const userRoutes = require('./routes/userRoutes');
const searchRoutes = require('./routes/search');
const itemRoutes = require('./routes/itemRoutes'); // Add this line

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/bikes', bikeRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/laptops', laptopRoutes);
app.use('/api/mobiles', mobileRoutes);
app.use('/api/user', userRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/items', itemRoutes); // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
