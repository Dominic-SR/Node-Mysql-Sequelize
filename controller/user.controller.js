const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.models');

const userController={
    async CreateUser(req,res){
        try{
            let{
                user_name,
                user_email,
                user_password,
                about
                }= req.body
                user_password = await bcrypt.hash(req.body.password,10);

                var userData = req.body;

                if(user_email.length){
                    let[user] = await UserModel.CreateUser(userData)
                    if(user){
                        console.log("User register Successfully")
                    }
                    else{
                        console.log("User Not Register.....")
                    }
                }
        }
        catch(err){
            console.log("errrrrrorrrrrr");
        }
    }
}