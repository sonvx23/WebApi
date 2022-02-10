import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

//Dung Restful Api CRUD : create Read Update Delete

let initWebRouters = (app) =>{
    router.get("/", homeController.getHomePage);
    return app.use("/",router);
    //return app.use("/v1/api/",router); tao link api
}

module.exports = initWebRouters;