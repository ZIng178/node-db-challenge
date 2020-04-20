
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
       {project_id: 1, resource_name:"Computer"},
       {project_id: 2, resource_name:"Conference room"},
       {project_id: 3, resource_name:"Microphone"},
       

      ]);
    });
};
