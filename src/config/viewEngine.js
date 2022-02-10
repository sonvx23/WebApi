import express from "express"; //cu phap ES6
//var express = require("express"); cu phap cu

let configEngine = (app)  =>{
    //Arrow function
    app.use(express.static("./src/public"));
    app.set("view engine","ejs"); // dung dc cau lenh trong html
    app.set("views","./src/views");

}

module.exports = configEngine;