const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const emailRouter = require('./formaRoue');

const app = express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve the React app's static files from the build directory
//app.use(express.static(path.join(__dirname, 'build')));

// Handle API routes
app.use('/api/subscribe', emailRouter); // Handle subscription logic
//app.use('/api/subscribe', require('./subscribe-route')); // Handle subscription logic
// app.use('/api/forma', require('./forma-route')); // Handle /api/forma logic

// For any other route, serve the React app
app.get('/', (req, res) => {
  res.send("API WORKING")
});
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});