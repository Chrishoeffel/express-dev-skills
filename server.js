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
/*======== Routes =======*/
/*======== Server Bind =======*/
app.listen(PORT, function () {
    console.log(`Active on port: ${PORT}` )
});