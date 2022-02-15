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

module.exports = connectDB;