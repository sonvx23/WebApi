import db from '../models/index';

const { Sequelize } = require('sequelize');
//const config = require(__dirname + '/../../config.json')[env];


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("HRM", "sa", "QuyetTam30LND33MDC", {
    host: "172.20.0.39",
    dialect: "mssql"
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}


connectDB();

let getNhanVien = async (req, res) => {
    console.log(req.params);
    try {

        sequelize.query('loadtbh_NhanVien_WEB @ListNhanVien =:ListNhanVien, @MaNhomPhongBan =:MaNhomPhongBan',
            { replacements: { ListNhanVien: req.params.ListNhanVien, MaNhomPhongBan: req.params.MaNhomPhongBan } })
            .then(function (result) {

                console.log(req.params);
                res.send(JSON.stringify(result));

            })
            .error(function (err) {
                console.log(err);
            });
    }
    catch (e) {
        console.log(e);
    }


}

module.exports = { getNhanVien: getNhanVien, getPhongBan: getNhanVien };