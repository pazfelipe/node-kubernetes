const Connection = require('../database/connection');

exports.find = async () => {
  const client = new Connection().connection;
  const products = await client.table('products').select();
  return products;
};

exports.save = async (data) => {
  const { name } = data;
  const client = new Connection().connection;

  await client.table('products').insert({ name });


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