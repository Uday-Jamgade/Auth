
import mongoose, { connect, model } from "mongoose";
import { Model } from "mongoose";
import { model } from "mongoose";
const connect= mongoose.connect("mongodb://localhost:27017/User");

connect.then(()=>{
    console.log("Connected");    
}).catch(()=>{
    console.log("not Connected ");
    
})

const Register = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// const collection = new  mongoose.model("UserAuth",Register);
// module.exports = collection;

module.exports = mongoose.model("UserAuth",Register);