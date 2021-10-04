const DB = require ('../../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
        try {
            const products = await DB.Product.findAll(({attributes:["id","name","descript","price","idCategory"]}))
            const totalProducts = await DB.Product.count();
            products.forEach(product =>{
                product.dataValues.detail = 'http://localhost:3030/api/products/'+product.id
            });

            const categories = await DB.Category.findAll();
            let cats = {};
            let totalProdInCat = 0;


            categories.map(cat => {
                console.log(cat);
                products.map(product => {
                    console.log(product);

                    if (product.idCategory == cat.id) {
                        totalProdInCat = totalProdInCat + 1;
                    }

                });
                cats[cat.name] = totalProdInCat;
                totalProdInCat = 0;
                
            });
            /* categories.forEach(async category =>{
                let totalPro = await DB.Product.count({where:{idCategory: category.id}});
                let catCount = {name: category.name, total: totalPro};

                cats.push(catCount);

                countByCategory = {
                    cat1: totalProd,
                    cat2: totalProd,
                }

            }); */
            res.status(200).json({count: totalProducts,countByCat: cats, data: products})
        }catch(error){
            throw error;
    }
        
    },
    show: async (req,res) => {
        try {
            const product = await DB.Product.findByPk(req.params.id, {attributes: ['id', 'name', 'descript', 'price', 'image']})
            product.image = 'http://localhost:3030/uploads/products/'+ product.image;
            res.status(200).json({data: product})
        }catch(error){
            throw error
        };
    },
    colors: async (req,res) => {

    }
}