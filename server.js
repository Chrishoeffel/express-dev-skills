/*======== External Modules =======*/
const express = require("express"); //require function that exists inside of node
const morgan = require('morgan');
const methodOverride = require("method-override");
/*======== Internal Modules =======*/
// All code that is out code (required internal modules)
const indexMainPage = require("./routes/index");
const skillsList = require("./routes/skills");
const addSkill = require("./routes/add");
/*======== Instanced Module =======*/
//Create the Express App
const app = express();


/*======== System Variables =======*/
const PORT = 4000;
/*======== App Configurations =======*/
app.set('view engine', 'ejs');
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

/*======== Routes =======*/
app.get('/', indexMainPage);

app.use("/skills", skillsList);
app.use("/add", addSkill);
/*======== Server Bind =======*/
app.listen(PORT, function () {
    console.log(`Active on port: ${PORT}` )
});