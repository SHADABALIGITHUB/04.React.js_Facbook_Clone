// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

cloudinary.uploader.upload("./one.jpeg")
  .then(result => console.log(result))
  .catch(error => console.error(error));


