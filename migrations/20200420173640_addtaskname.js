
exports.up = function(knex) {
    return  knex.schema.table("Tasks", (tbl)=>{
         tbl.string("task_name")
     })
   };
   exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Tasks")
     }
