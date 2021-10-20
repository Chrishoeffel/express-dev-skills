const skills = [
    {skill: 'HTML/CSS', skillLevel: "Intermediate"},
    {skill: 'Analytical', skillLevel: "Beginner"},
    {skill: 'Responsive designer', skillLevel: "Beginner"},
    {skill: "JavaScript", skillLevel: "Intermediate"},
    {skill: "Interpersonal", skillLevel: "Expert"},
    {skill: "Testing and debugging", skillLevel: "Beginner"},
    {skill: "Search engine optimization", skillLevel: "Beginner"},
  ];
  
  //get all skills
  function getAll() {
    return skills;
  }
  //get one by index
  function getOne(idx) {
    return skills[idx];
  }
  //inside our models folder
  function create(skill) {
    skills.push(skill);
  }
  //deletes skill from object
  function deleteSkill(idx) {
    skills.splice(idx,1);
  }

  module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
  
  };