const redis = require('redis');
const { promisify } = require('util');
class RedisClient {

  #port;
  #host;
  #connection;
  constructor() {
    this.#host = process.env.REDIS_HOST;
    this.#port = process.env.REDIS_PORT;

    this.#connection = redis.createClient(this.#port, this.#host);
  }

  get client() {
    return this.#connection;
  }

  async keys(pattern) {
    return new Promise((resolve, reject) => {
      this.client.keys(pattern, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = RedisClient;