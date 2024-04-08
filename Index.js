const vision = require('@google-cloud/vision');
const fs = require('fs');

const imagePath = 'copy.jpg';

const credentialsPath = 'credentials.json';

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: credentialsPath,
});

// Read the image file
const imageBuffer = fs.readFileSync(imagePath);

// Make a request to the Vision API
client
  .textDetection(imageBuffer)
  .then((results) => {
    const textAnnotations = results[0].textAnnotations;
    const extractedText = textAnnotations.map((annotation) => annotation.description);
    
    // Print the extracted text
    extractedText.forEach((text, idx) => {
      console.log(`Text ${idx + 1}: ${text}`);
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });
