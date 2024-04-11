import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: { type: String, required: true },
  rate: { type: Number, min: 1, max: 10, default: 5 },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  active: { type: Boolean, default: true },
  auth: {
    type: Schema.Types.ObjectId,
    ref: "authModel",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    require: true,
  },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
