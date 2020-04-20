
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {
          name: 'Build a Web API',
          description:"Use Express and Node to build end points for your project", 
          completed:false
        },
        {name: 'Make some spicy tacos ', description:"Make some Mexican style tacos using your choice of favorite protein, habanero salsa with mango is a must , with some delicious guacamole", completed :false},
        {name: 'Build a REACT CRUD APP for recipes ', description :"The app must perform all CRUD functions and should also have the ability to search for different recipes added by other users ",completed :false}
        

        
      ]);
    });
};
