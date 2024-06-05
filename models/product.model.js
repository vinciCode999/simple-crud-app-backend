import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },

  quantity: {
    type: Number,
    required: true,
    default: 0
  },

  image: {
    type: String,
    required: false
  }
},
{timestamps: true}
)


export default mongoose.model('Product', productSchema)