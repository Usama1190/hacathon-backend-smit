import express from "express";
import enums from "../constant/enum.js";
import Product from "../model/productModel.js";

const productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS_200, data: getAllProducts });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.CODE_404 });
  }
});

productRoute.post("/add-product", async (req, res) => {
  try {
    const data = req.body;
    const addProduct = await Product.create(data);
    res
      .status(200)
      .send({ status: 201, message: enums.CREATED_201, data: addProduct });
  } catch (error) {
    res.status(404).send({ status: 400, message: enums.BAD_REQUEST_400 });
  }
});

productRoute.delete("/delete-product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .send({ status: 200, message: enums.ACCEPTED_202, data: deleteProduct });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.CODE_404 });
  }
});

productRoute.put("/update-product/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, data);
    res
      .status(200)
      .send({ status: 200, message: enums.ACCEPTED_202, data: updateProduct });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.CODE_404 });
  }
});

export default productRoute;
