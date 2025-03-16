// import { Router } from "express";
// import {
//   crateProductController,
//   deleteProductController,
//   readAllProductController,
//   readSpecificProductController,
//   updateProductController,
// } from "../controller/productController.js";

// let productRouter = Router();
// productRouter
//   .route("/")
//   .post(crateProductController)
//   .get(readAllProductController);
// productRouter
//   .route("/:id")
//   .get(readSpecificProductController)
//   .patch(updateProductController)
//   .delete(deleteProductController);
// export default productRouter;



import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";

const productRouter = Router();

// Routes for all products
productRouter.route("/")
  .post(createProductController)
  .get(readAllProductController);

// Routes for a specific product by ID
productRouter.route("/:id")
  .get(readSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRouter;
