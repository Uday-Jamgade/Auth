
import mongoose , { connect, model } from 'mongoose';

const connection= mongoose.connect("mongodb://localhost:27017/User");

connection.then(()=>{
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
});

const collection = new mongoose.model("UserAuth",Register);
export default collection;

// module.exports= collections;