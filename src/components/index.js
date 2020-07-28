const productRoutes = require("./product/product.routes");
const categoryRoutes = require("./category/category.routes");
const ownerRoutes = require("./owner/owner.routes");

module.exports = {
  product: {
    routes: productRoutes,
  },
  category: {
    routes: categoryRoutes,
  },
  owner: {
    routes: ownerRoutes,
  },
};
