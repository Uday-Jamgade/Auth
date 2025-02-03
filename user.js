import express from "express";
import path, { dirname } from "path"
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
// import collection from "./DB/Config"
import { name } from "ejs";
// import { Collection } from "mongoose";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
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

app.post("/Register",(req,res)=>{

    data ={
    name: req.body.name,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password
    }

})

app.listen(3000,()=>{
    console.log(`server run on  http://localhost:3000`);
    
});