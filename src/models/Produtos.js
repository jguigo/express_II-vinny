const db = require("../database");
const Fabricantes = require("./Fabricantes"); //fazer referencia

const { DataTypes } = require("sequelize");

const Produtos = db.define(
   "Produtos",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nome: {
         type: DataTypes.STRING,
         length: 1000,
         field: "nome",
      },
      preco: {
         type: DataTypes.FLOAT,
      },
      quantidade: {
         type: DataTypes.INTEGER,
      },
      fabricante_id: {
         type: DataTypes.INTEGER,
         references: {
            model: Fabricantes,
            key: "id",
         },
      },
      createdAt: {
         type: DataTypes.DATE,
      },
      updatedAt: {
         type: DataTypes.DATE,
      },
   },
   {
      tableName: "produtos",
   }
);

module.exports = Produtos;
