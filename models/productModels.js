import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        require: [true, "Please Enter product Description"],
    },
    price: {
        type: Number,
        require: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    images: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: [true, "Please Enter product Category"],
    },
    stock: {
        type: Number,
        require: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
