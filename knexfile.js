// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './projects.db3'
    },
    directory:{
      migrations:"./migrations"
    },
    directory:{
     seeds:"./seeds"
    },
    pool:{
       afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        }
    }
  },

  
};
