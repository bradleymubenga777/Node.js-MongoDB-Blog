//Importing/Requiring modules
const express = require('express');

//Setting up express server/app
const app = express();

//Register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Make public folder public
app.use(express.static('public'));

//Listen for request on port 3000
app.listen(3000);

//Listen to a get request for routes
app.get('/', (req, res) => {
    res.render('index', {title: "Hello Blog"})
});