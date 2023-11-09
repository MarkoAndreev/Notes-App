const express = require('express');
const path = require('path');

// Import router from the below file path
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware: Parse JSON and/or URL encoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware: Use router from the below file path
app.use('/api', api);

// Allows us to reference the 'public' folder for static assets like CSS and JS files
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the server and log a message upon successful startup
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`) 
);