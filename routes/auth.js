const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require("../models/userSchema");
const Blog  = require("../models/BlogSchema");
const Authenticate = require("../middleware/Authenticate");


//route to register users
router.post("/register" , async(req, res) => {
    const {name , email , username , images , phone , password , cpassword} = req.body;

    if(!name || !email ||!username || !images ||!phone ||!password ||!cpassword){
        return res.status(422).json({error:"Please fill all the fields properly"});
    }

    try {

        const eresponse = await User.findOne({email:email});
        if(eresponse){
            return res.status(422).json({error:"Email already exists"});
        }
        const uresponse = await User.findOne({username:username});
        if(uresponse){
            return res.status(422).json({error:"Username already exists"});
        }

        const user = new User({
            name , email , username ,images , phone , password , cpassword
        })

        const userRegister = await user.save();
        console.log(userRegister);

        if(userRegister){
            return res.status(201).json({message: "User Registration Success"})
        }else{
            return res.status(500).json({message: "Registration Failed"})
        }
        
    } catch (error) {
        console.log(error );
    }
})

// login route

router.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Please fill the credentials" });
      }
  
      const userLogin = await User.findOne({ email: email });
  
  
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
  
        const token = await userLogin.generateAuthToken();
        console.log(token);
  
        res.cookie("jwttoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
  
        if (!isMatch) {
          res.status(400).json({ error: "Invalid Credentials" });
        } else {
          res.json({ message: "User Sign in Successfull" });
        }
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
    }
  });


  //addblogs  to the website
  router.post("/addblogs" ,Authenticate , async(req,res) => {
    const {category , title , tag , blog} = req.body

    if(!category || !title || !tag || !blog)
    return res.status(422).json({msg:"Some fields are missing"})
try {
  const blogs = new Blog({category , title , tag , blog})

  const savedblog = await blogs.save() 

 if(savedblog){
            return res.status(201).json({message: "Blog added to server Success"})
        }else{
            return res.status(500).json({message: "Sorry! Failed to Add blog"})
        }

} catch (error) {
  console.log(error);
}
    
  })


  module.exports = router;