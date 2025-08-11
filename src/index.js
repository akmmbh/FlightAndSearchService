const express =require("express");
const {PORT}=require('../src/config/serverConfig')
const setupAndStartServer= async()=>{

    //create the express objet
    const app=express();
   console.log(`what is port ${PORT}`);
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}
setupAndStartServer();