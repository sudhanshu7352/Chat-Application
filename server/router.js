const express =require("express");
const Router = express.Router();

Router.get("/" ,(req,res)=>{
    res.send("Server are up and running");
})

module.exports = Router;