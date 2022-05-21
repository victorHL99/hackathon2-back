import { Router } from "express";
import { solicitarAssuntos } from "../../controllers/inicioController.js";

const inicioRouter = Router();

inicioRouter.get("/" , solicitarAssuntos);

export default inicioRouter;