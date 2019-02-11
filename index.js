const express = require('express');
const dbConnection = require('./db/dbConnection');
require('./models/User');
require('./services/passport');
//const authRoutes = require('./routes/authRoutes');


const app = express();

// authRoutes(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);