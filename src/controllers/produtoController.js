const { Produtos, Fabricantes, Categorias } = require("../models/index");

const ProdutoController = {
   listarProdutos: async (req, res) => {
      const listaDeProdutos = await Produtos.findAll({
         include: [Fabricantes, Categorias],
      });
      res.status(200).json(listaDeProdutos);
   },
   cadastrarProduto: async (req, res) => {
      console.log(req.user);
      const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

      const novoProduto = await Produtos.create({
         nome,
         preco,
         quantidade,
         fabricante_id,
      });

      const categoria = await Categorias.findByPk(categoria_id);

      await novoProduto.setCategorias(categoria);

      res.status(201).json(novoProduto);
   },
   
   atualizarProduto: async (req, res) => {
      const { id } = req.params;
      const { nome, preco, quantidade, fabricante_id } = req.body;
      
      if(!id) return res.status(400).json("id não enviado");

      const attProduto = await Produtos.update(
         {
            nome,
            preco,
            quantidade,
            fabricante_id,
         },
         {
            where: {
               id,
            },
         }
      );

      const exibirAtt = await Produtos.findAll({ where: { id } });
      res.status(200).json(exibirAtt);
   },

   deletarProduto: async (req, res) => {
      try{
      const { id } = req.params;

      if(!id) return res.status(400).json("id não enviado");

      await Produtos.destroy({
         where: {
            id,
         },
      });

      res.status(204);
   } catch(error){
      return res.status(500).json("Ocorreu algum problema");
   }
   },
};

module.exports = ProdutoController;
