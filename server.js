const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middlewares/authMiddleware');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/auth-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

// User Registration
// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// User Login
app.use('/auth', authRoutes);

// Middleware to authenticate requests
// const authenticateToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access denied' });

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = user;
//     next();
//   });
// };

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
