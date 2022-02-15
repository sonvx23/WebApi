import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./routes/web";
import connectDB from "./config/connectDB";
import routerNhanVien from "./routes/items";

require('dotenv').config();// khai bao de xai dc thu vien .env . chay dc cai nay process.env.PORT

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
//initWebRouters(app);
routerNhanVien(app);

//connectDB();

let port = process.env.PORT || 8083; // PORT === undefined se lay  8080

app.listen(port, () => {
    //callback function
    console.log("Server is running ...." + port);
});