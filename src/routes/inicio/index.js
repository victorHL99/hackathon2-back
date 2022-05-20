import { Router } from "express";
import { incio } from "../../controllers/inicioController.js";

const inicioRouter = Router();

inicioRouter.get("/" , incio);

export default inicioRouter;