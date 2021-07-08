/*======== External Modules =======*/
const express = require("express"); //require function that exists inside of node

/*======== Internal Modules =======*/
// All code that is out code (required internal modules)

/*======== Instanced Module =======*/
//Create the Express App
const app = express();


/*======== System Variables =======*/
const PORT = 4000;
/*======== App Configurations =======*/
app.set('view engine', 'ejs');
/*======== Routes =======*/
app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
  });
app.get('/home', function(req, res) {
    res.render('home');
});
/*======== Server Bind =======*/
app.listen(PORT, function () {
    console.log(`Active on port: ${PORT}` )
});