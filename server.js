const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middlewares/authMiddleware');
const { MONGO_CONNECTION_URI, MONGO_PORT, MONGO_DB_NAME, API_PORT } = require('./config/config');


const app = express();

mongoose.connect(`${MONGO_CONNECTION_URI}:${MONGO_PORT}/${MONGO_DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

//user auth path (register, login)
app.use('/auth', authRoutes);

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(API_PORT, () => {
  console.log(`Server is running on port ${API_PORT}`);
});
