const { Phone } = require('../models');

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;
  try {
    const foundPhone = await Phone.getById(phoneId);
    res.status(200).send(foundPhone);
  } catch (err) {
    console.log('err :>> ', err);
    next(err);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);
    res.status(201).send(createdPhone);
  } catch (err) {
    console.log('err :>> ', err);
    next(err);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const updatedPhone = await Phone.updateById(body, phoneId);
    res.status(200).send(updatedPhone);
  } catch (err) {
    console.log('err :>> ', err);
    next(err);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const deleePhone = await Phone.deleteById(phoneId);
    res.status(200).send(deleePhone);
  } catch (err) {
    console.log('err :>> ', err);
    next(err);
  }
};

module.exports.getAllPhone = async (req, res, next) => {
  const { limit, offset } = req.pagination;

  try {
    const allPhone = await Phone.getAll(limit, offset);
    res.status(200).send(allPhone);
  } catch (err) {
    console.log('err :>> ', err);
    next(err);
  }
};
