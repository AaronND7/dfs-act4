const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.use(protect); // All product routes are protected

router
  .route('/')
  .get(getProducts)
  .post(createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
