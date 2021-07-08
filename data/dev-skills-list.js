const devSkills = [
    {skill: 'HTML/CSS', Completed: true},
    {skill: 'Analytical', Completed: false},
    {skill: 'Responsive design', Completed: false},
    {skill: "JavaScript", Completed: true},
    {skill: "Interpersonal", Completed: false},
    {skill: "Testing and debugging", Completed: false},
    {skill: "Back-end basics", Completed: true},
    {skill: "Search engine optimization", Completed: false},
  ];
      
  module.exports = {
    getAll: function() {
      return devSkills;
    }
  };