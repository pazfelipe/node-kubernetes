const client = require('knex');

const options = {
  client: String(process.env.DB_CLIENT).replace(/\n/, ''),
  connection: {
    host: String(process.env.DB_HOST).replace(/\n/, ''),
    port: String(process.env.DB_PORT).replace(/\n/, ''),
    user: String(process.env.DB_USER).replace(/\n/, ''),
    password: String(process.env.DB_PASS).replace(/\n/, ''),
    database: String(process.env.DB_NAME).replace(/\n/, '')
  }
};

class Connection {

  #connection;
  constructor() {
    this.#connection = client.knex(options);
  }

  /**
   * Return Knex database connection
   * @returns Connection
   */
  get connection() {
    return this.#connection();
  }
}

module.exports = Connection;