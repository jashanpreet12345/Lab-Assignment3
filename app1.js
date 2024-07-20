// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// GET method to display group names
app.get('/', (req, res) => {
    res.send('<h1>Group Number-10</h1><ul><li>Group Member 1- Jashanpreet Kaur</li><li>Group Member 2- Omesh</li><li>Group Member 3- Gurpreet Singh</li></ul>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
