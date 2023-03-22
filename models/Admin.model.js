const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Admin = sequelize.define("Admin", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }

 });
 module.exports = Admin