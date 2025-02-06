import express from "express";
import path, { dirname } from "path"
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import collection from "./DB/Config.js"
import { name } from "ejs";
import { log } from "console";



const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res)=>{
res.render("Home")
})

app.get("/Register",(req,res)=>{
    res.render("Register")
})

app.get("/login",(req,res)=>{
    res.render("Login")
})

app.post("/Register", async(req,res)=>{

   const data ={
    name: req.body.name,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password
    }

    const Regi = await collection.insertMany(data);
    console.log(Regi);
    
    res.redirect("/login")

})

app.post("/login", async(req,res)=>{
    const data = {
        email:req.body.email,
        password:req.body.password
    }

    try {
        const find = await collection.findOne({email:data.email});  
        if(find){
            console.log("find :" ,find);
            res.redirect("/");
        }
    } catch (error) {
        console.log(error);
    }   
})


app.listen(3000,()=>{
    console.log(`server run on  http://localhost:3000`);
    
});
