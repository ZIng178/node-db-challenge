
exports.up = function(knex) {
   return  knex.schema
    .createTable("Projects", tbl=>{
        tbl.increments()
        tbl.string("name", 128).notNullable()
        tbl.boolean("completed").notNullable().defaultTo(false)
    })
    .createTable("Resources", tbl=>{
        tbl.increments()
        tbl.integer("resource_id", 128)
        .unsigned()
        .reference("Projects.id")
        .inTable("Projects")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.string("resource_name",128).notNullable()
    })
    .createTable("Tasks", tbl=>{
        tbl.increments()
        tbl.integer("tasks_id")
        .unsigned()
        .reference("Projects.id")
        .notNullable()
        .inTable("Projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        tbl.string("notes")
        tbl.boolean("completed")
        .notNullable()
        .defaultTo(false)
    })
    
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects")
};