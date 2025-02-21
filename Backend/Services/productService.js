const Register = require("../Models/Register");



const createProduct = async (reqData) => {

    const product = new Register({
        firstName:reqData.firstName,
        middleName:reqData.middleName,
        lastName:reqData.lastName,
        dob:reqData.dob,
        gender:reqData.gender,
        email:reqData.email,
        phone:reqData.phone,
        address:reqData.address,
        aadhar:reqData.aadhar,
        board:reqData.board,
        schoolName:reqData.schoolName,
        passingYear:reqData.passingYear,
        percentage:reqData.percentage,
        city:reqData.city

    });

    return await product.save();
}



const deleteProduct = async (productId) => {

    const product = await findProductById(productId);

    await Register.findByIdAndDelete(productId);

    return 'Product Deleted Successfully'


}


const updateProduct = async (productId, reqData) => {

    return await Register.findByIdAndUpdate(productId, reqData);

}


const findProductById = async (id) => {

    const product = await Register.findById(id);

    if (!product) {
        throw new Error("Product Not Found", id)
    }

    return product;
}




const getAllProducts = async (reqQuery) => {

    const products = await Register.find();
    return products
  
}
module.exports = { createProduct, deleteProduct, updateProduct, getAllProducts, findProductById}