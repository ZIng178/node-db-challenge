
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {project_id:1 ,notes:"Build a WEB API that interacts with different endpoints.", task_name:"WEB API"},
        {project_id:2 ,notes:"Buy quality protein and make sure you have all the ingredients to make your tortillas and salsa from scratch , also make sure you get avacados for the guac" ,task_name:"TACO TIME"},
        {project_id:3 ,notes:"User should be able to add their recipes , User should also also be able to add recipes added by other users . ",task_name:"HUNGRY YET?"}
      ]);
    });
};
