/* our controllers folder holds all functions that convert data into something the client can view on the webpage */

const skillsList = require('../models/skills.js');

function indexController(req, res) {
    res.render('skills/idx', {
        skills: skillsList.getAll(),
    });
}

function detailsController(req, res) {
    res.render("skills/details", {
        showSkillL: skillsList.getOne(req.params.skill),
        number: parseInt(req.params.skill) + 1,
        time: req.time,
    });
}

function create(req, res) {
    skillsList.create(res.body);
    console.log(req.body);
    res.redirect('/skills');
};

function deleteSkill(req, res) {
    skillsList.delete(req.params.skill);
    console.log(req.body);
    res.redirect("/");
};

module.exports = {
    indexController,
    detailsController,
    create,
    deleteSkill,

}