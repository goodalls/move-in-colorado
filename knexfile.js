module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movein',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/development'
    },
    useNullAsDefault: true
  }
};