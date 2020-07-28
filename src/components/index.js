const productRoutes = require("./product/product.routes");
const categoryRoutes = require("./category/category.routes");

module.exports = {
  product: {
    routes: productRoutes,
  },
  category: {
    routes: categoryRoutes,
  },
};
