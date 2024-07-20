// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// GET method to display JSON data
app.get('/data', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading JSON file');
        }
        // Send the JSON data as response
        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/data`);
});
