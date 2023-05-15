const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/bin2win',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
