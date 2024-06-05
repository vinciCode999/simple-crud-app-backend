import Product from '../models/product.model.js'
const getProducts = async(req, res)=>{
  try{
    const products = await Product.find({})
    if(!products){
      res.status(404).json({message: "no products available"})
    }
    res.status(200).json(products)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const getProduct = async(req, res)=>{
  try{
    const {productId} = req.params;
    const product = await Product.findById(productId)

    if(!product){
      res.status(404).json({message: "product not found!"})
    }

    res.status(200).json(product)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const addProduct = async(req, res)=>{
  try{
    const product = await Product.create(req.body)
    res.status(200).json(product)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const updateProduct = async(req, res)=>{
  try{
    const {productId} = req.params;
    const product = await Product.findByIdAndUpdate(productId, req.body)
    res.status(200).json(product)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

const deleteProduct = async(req, res)=>{
  try{
    const {productId} = req.params;
    const product = await Product.findByIdAndDelete(productId)
    if(!product){
      res.status(404).json({message: "product not found"})
    }
    res.status(200).json(product)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}


export {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProduct
}