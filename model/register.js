var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: Password,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Register', blobSchema);
