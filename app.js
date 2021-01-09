const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-Parser');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv/config');

const app = express();

//Import Routes
const trainingRoute = require('./routes/training');
const statsRoute = require('./routes/stats');
const profileRoute = require('./routes/profile');
const adminRoute = require('./routes/admin');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./client/build/'));


app.use('/training', trainingRoute);
app.use('/stats', statsRoute);
app.use('/profile', profileRoute);
app.use('/admin', adminRoute);


//ROUTES
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/client/build/'});
});

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useCreateIndex: true}, () =>
    console.log("DB connection successful!")
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));