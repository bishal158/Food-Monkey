const  express = require('express');
const  app = express();
const  mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

app.listen(PORT, () => {console.log("Starting at 5000")})