const express = require('express');
const app = express();
const path = require('path');

// Custom middleware to log static route requests
app.use((req, res, next) => {
    console.log(`Static route requested: ${req.originalUrl}`);
    next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public/static')));
app.use(express.static(path.join(__dirname, '../public/static/img')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
