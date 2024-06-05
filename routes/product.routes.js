import express from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controllers.js'

const router = express.Router();

router.get('/',getProducts)
router.post('/', addProduct)
router.get('/:productId', getProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router