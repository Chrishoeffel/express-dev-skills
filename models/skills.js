const skills = [
    {skill: 'HTML/CSS', Completed: true},
    {skill: 'Analytical', Completed: false},
    {skill: 'Responsive design', Completed: false},
    {skill: "JavaScript", Completed: true},
    {skill: "Interpersonal", Completed: false},
    {skill: "Testing and debugging", Completed: false},
    {skill: "Back-end basics", Completed: true},
    {skill: "Search engine optimization", Completed: false},
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