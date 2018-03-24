module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movein',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    },
    useNullAsDefault: true
  }
};