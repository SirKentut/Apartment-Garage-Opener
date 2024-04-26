// Import the Firebase Admin SDK
const admin = require('firebase-admin');
const express = require('express');
const keys = require('./config/keys');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // No need to specify databaseURL for Firestore
});

// Access Firestore
const db = admin.firestore();

// Create Express application
const app = express();

// Your Express routes and logic here...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
