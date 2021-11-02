const Connection = require('../database/connection');
const RedisClient = require('../libs/redis');

exports.find = async () => {
  const client = new Connection().connection;
  const redis = new RedisClient();

  let products = [];

  let cached_products = await redis.keys('product_*');

  if (cached_products.length) {
    for (const cache of cached_products) {
      products.push(JSON.parse(await redis.get(cache)));
    }

    return products;
  }

  products = await client('products').select();

  return products;
};

exports.save = async (data) => {
  const { name } = data;
  const client = new Connection().connection;
  const redis = new RedisClient().client;

  await client.table('products').insert({ name });

  redis.set(
    `product_${String(name).replace(/\s/g, "")}`,
    JSON.stringify({ name })
  );

  return;

};

exports.update = async (id, { name }) => {
  const client = new Connection().connection;

  await client.table('products')
    .update({ name })
    .where({
      id
    });

  return true;
};

exports.remove = async (id) => {
  const client = new Connection().connection;

  await client.table('products')
    .del()
    .where({
      id
    });

  return true;
};