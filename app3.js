// Import express library using ES6 module syntax
import express from 'express';
import cors from 'cors';

// Create an express application
const app = express();

app.use(cors());

// Define a port number
const PORT = 3002;

// Define a route for GET requests to '/'
app.get('/', (req, res) => {
  res.send(`${PORT}`);
});

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});