const express =require("express");
const {PORT}=require('../src/config/serverConfig');
const bodyParser = require("body-parser");
const setupAndStartServer= async()=>{

    //create the express objet
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
   console.log(`what is port ${PORT}`);
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}
setupAndStartServer();