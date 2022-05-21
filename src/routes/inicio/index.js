import { Router } from "express";
import { solicitarAssuntos } from "../../controllers/questaoController.js";

const inicioRouter = Router();

inicioRouter.get("/" , solicitarAssuntos);

export default inicioRouter;