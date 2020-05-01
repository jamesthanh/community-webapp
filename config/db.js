const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected ...');
  } catch (err) {
    console.error(err.message);
    // Exit Process when fail
    process.exit(1);
  }
};
module.exports = connectDB;
