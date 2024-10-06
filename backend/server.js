const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
// const connectWebsocket = require('./utils/websocket')
const app = express();

// Connect Database
connectDB();
// connectWebsocket()

// Init Middleware
app.use(bodyParser.json({ extended: false }));
app.use(cors()); // Use the cors middleware

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/realtimedata', require('./routes/realtimeData'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));