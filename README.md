## Google Cloud Vision Text Detection

This Node.js script utilizes the Google Cloud Vision API for text detection in images. It reads an image file, sends a request to the Vision API, and extracts the detected text from the image.

### Prerequisites
- Node.js installed on your system
- Google Cloud Platform account with the Vision API enabled
- Service account key file (credentials.json) for authentication

### Installation
1. Clone or download this repository.
2. Install dependencies by running `npm install` in your terminal.

### Usage
1. Replace the `imagePath` variable with the path to the image file you want to analyze.
2. Ensure the `credentialsPath` variable points to the correct location of your service account key file.
3. Run the script using `node <script_name.js>`.

### Error Handling
- The script handles errors that may occur during the API request and prints them to the console.

### Note
- Ensure that you have sufficient permissions and quota in your Google Cloud Platform project to use the Vision API.

By following these instructions, you can use this script to detect text in images using the Google Cloud Vision API.
