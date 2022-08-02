const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
    product_description: { type: String, required: true },
    inventory_count: { type: String, required: true },
   
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = mongoose.model("product", productSchema);
