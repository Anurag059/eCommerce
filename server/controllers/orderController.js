const Order = require('../models/Order');

exports.createOrder = async (req, res, next) => {
  try {
    const { items, total } = req.body;
    const order = new Order({ items, total });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};