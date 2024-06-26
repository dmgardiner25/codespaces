// Import express library using ES6 module syntax
import express from 'express';
import cors from 'cors';

// Create an express application
const app = express();

app.use(cors());

// Define a port number
const PORT = 3000;

// Define a route for GET requests to '/'
app.get('/', (req, res) => {
  res.send(`
    ${PORT}
    <script>
      (async () => {

        for (let i in Array(10).fill(0)) {

          try {
            let port = 3001;
            let result = await (await fetch(window.location.href.replace('3000', port))).text();
            if (port != Number(result)) {
              console.log('Called ', window.location.href.replace('3000', port), ' and got ', result);
            }
          } catch (err) {
            console.log('Error calling ', window.location.href.replace('3000', port), ' and got ', err);
          }

        }

      })();
      (async () => {

        for (let i in Array(10).fill(0)) {

          try {
            let port = 3002;
            let result = await (await fetch(window.location.href.replace('3000', port))).text();
            if (port != Number(result)) {
              console.log('Called ', window.location.href.replace('3000', port), ' and got ', result);
            }
          } catch (err) {
            console.log('Error calling ', window.location.href.replace('3000', port), ' and got ', err);
          }

        }

      })();
      (async () => {

        for (let i in Array(10).fill(0)) {

          try {
            let port = 3003;
            let result = await (await fetch(window.location.href.replace('3000', port))).text();
            if (port != Number(result)) {
              console.log('Called ', window.location.href.replace('3000', port), ' and got ', result);
            }
          } catch (err) {
            console.log('Error calling ', window.location.href.replace('3000', port), ' and got ', err);
          }

        }

      })();
    </script>
  `);
});

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});