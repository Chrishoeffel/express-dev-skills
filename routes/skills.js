// We always require these on every route file.

const express = require('express');
const router =express.Router();

const skillsList = require("../controllers/skills");

//routes for index

router.get('/', skillsList.indexController);
// route to displays each skill individually

router.get(":skill", skillsList.detailsController);

//route pulls up page for adding new skillsList

router.post("/", skillsList.create);
router.delete("/", skillsList.deleteSkill);

module.exports = router;