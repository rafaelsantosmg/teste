const SalesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await SalesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await SalesModel.getById(id);
  return sale;
};

const create = async (sales) => {
  const sale = SalesModel.create(sales);
  return sale;
};

module.exports = {
  getAll,
  getById,
  create,
};