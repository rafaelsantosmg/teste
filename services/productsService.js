const ProductsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await ProductsModel.getAll();
  return products;
};

const getById = async (id) => {
  const [product] = await ProductsModel.getById(id);
  if (!product) throw Error('Product not found');
  return product;
};

const create = async ({ name, quantity }) => {
  const [findProduct] = await ProductsModel.getFindName(name);
  if (findProduct) throw Error('Product already exists');
  const { insertId } = await ProductsModel.create({ name, quantity });
  return [insertId];
};

const update = async ({ name, quantity, id }) => {
  const findProductId = await ProductsModel.getFindId(id);
  if (findProductId !== undefined && findProductId.length === 0) {
    throw Error('Product not found');
  }
  await ProductsModel.update({ name, quantity, id });
  return [{ id, name, quantity }];
};

const destroyer = async ({ id }) => {
  const findProductId = await ProductsModel.getFindId(id);
  if (findProductId !== undefined && findProductId.length === 0) {
    throw Error('Product not found');
  }
  await ProductsModel.destroyer({ id });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroyer,
};