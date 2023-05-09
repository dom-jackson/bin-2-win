const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bin2win', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Log errors if there are any
db.on('error', (err) => {
  console.error(`MongoDB error: ${err}`);
});

// Log successful connection message
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = db;
