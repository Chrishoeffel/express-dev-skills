/* our controllers folder holds all functions that convert data into something the client can view on the webpage */

const skillsList = require('../models/skills');

function indexController(req, res) {
    res.render('skills/idx')
}