const { object } = require("joi");
const userModel = require("../../models/userSchema");

const Registration = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = {};
  if(!name){
    errors.name = "Please Enter your Name"
  }
  if(!email){
    errors.email = "Please Enter your email"
  }
  if(!password){
    errors.password = "Please Enter your password"
  }
if(Object.keys(errors).length>0){
    return res.status(400).send({success:false, errors})
}
  
  const User = await userModel.create({
    name,
    email,
    password,
  });
  res.status(200).json(User);
};

module.exports = Registration;
