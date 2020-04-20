
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: 'Build a Web API'},
        {name: 'Create a social media app'},
        {name: 'Create a simple RPs game'}
        
      ]);
    });
};
