const skills = require("../models/skills.js");

function updateController(req, res) {
    res.render('addSkill/index', {
        skills: skillsList.updateSkills(),
    });
}

module.exports = {updateController};