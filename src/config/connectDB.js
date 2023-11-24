const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imletienmanh', 'root', null, {
    host: 'localhost',
    dialect: 'mssql'
});

let connectDB = () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}