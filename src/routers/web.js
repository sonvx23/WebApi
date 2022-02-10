import express from "express";

let router = express.Router();

let initWebRouters = (app) =>{
    router.get("/",(req,res) =>{

        return res.send("test ABC");
    });
    return app.use("/",router);
    //return app.use("/v1/api/",router); tao link api
}

module.exports = initWebRouters;