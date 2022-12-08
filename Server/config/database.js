const mongoose = require('mongoose');

const URL = process.env.MONGODB_ATLAS_KEY;
mongoose.connect(URL, () => {
  try {
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
  }
});
