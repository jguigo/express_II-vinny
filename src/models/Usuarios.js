const db = require("../database");
const { DataTypes } = require("sequelize");

const Usuarios = db.define(
   "Usuarios",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         field: "id",
      },
      nome: {
         type: DataTypes.INTEGER,
         length: 100,
         field: "nome",
      },
      email: {
         type: DataTypes.STRING,
         length: 100,
         field: "email",
      },
      senha: {
         type: DataTypes.STRING,
         length: 100,
         field: "senha",
      },
      createdAt: {
         type: DataTypes.DATE,
         field: "createdAt",
      },
      updatedAt: {
         type: DataTypes.DATE,
         field: "updatedAt",
      },
   },
   {
      tableName: "usuarios",
   }
);

module.exports = Usuarios;
