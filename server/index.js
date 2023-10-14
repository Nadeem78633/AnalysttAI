const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware
const app = express();
const PORT = 5000;

// Enable All CORS Requests
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// API Endpoint URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// API Request and Error Handling
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    // Check if the response is a valid JSON object
    if (typeof users === 'object') {
      res.json(users);
    } else {
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
