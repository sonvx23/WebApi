
import express from "express";
import nhanVienController from "../controllers/nhanVien";
import bodyParser from "body-parser";

let router = express.Router();

let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Dung Restful Api CRUD : create Read Update Delete

let initAPIRouters = (app) => {
    //* Middleware dung kiem tra truoc khi chay vao route (ví dụ verify use, hoặc kiểu tra quyền các kiểu) 
    router.get('/', (req, res, next) => {
        console.log('da vao day');
    });

    router.get("/getNhanVien/:ListNhanVien/:MaNhomPhongBan", nhanVienController.getNhanVien);
    router.get("/getPhongBan", nhanVienController.getPhongBan);
    //return app.use("/", router);
    return app.use("/api/v1/", router); //tao link api
}




module.exports = initAPIRouters;