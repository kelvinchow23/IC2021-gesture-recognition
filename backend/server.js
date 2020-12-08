const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Import Routes
const trainingRoute = require('./routes/training');
const statsRoute = require('./routes/stats');

app.use(bodyParser.json());
app.use(cors());


app.use('/training', trainingRoute);
app.use('/stats', statsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log("DB connection successful!")
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//test