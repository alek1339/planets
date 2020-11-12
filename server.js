const express = require('express');
const bodyParser = require('body-parser')
const profile = require('./routes/api/profiles')

const app = express();

// Bodyparse middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api/profiles', profile);


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));