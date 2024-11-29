const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to log requests 
    app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
   next();
     });

// Basic route
     app.get('/', (req, res) => {
       res.send('Hello, this is a demo web app running on Azure VM!');
       });

       // Start the server and listen on all IP addresses
    app.listen(port, '0.0.0.0', () => {
       console.log(`Server running at http://0.0.0.0:${port}/`);
    });
