const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../static/public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
``