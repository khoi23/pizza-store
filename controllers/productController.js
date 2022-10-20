import Product from "../models/productModels.js";

export const getProductController = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
    }
};

export const addProductController = async (req, res) => {
    try {
        const newProducts = new Product(req.body);
        await newProducts.save();
        res.status(200).send('Product Created Succesfully!');
    } catch (error) {
        console.log(error);
    }
};
