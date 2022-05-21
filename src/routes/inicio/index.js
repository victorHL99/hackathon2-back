import { Router } from "express";
import { solicitarAssuntos } from "../../controllers/inicioController.js";

const inicioRouter = Router();

inicioRouter.get("/assuntos" , solicitarAssuntos);

export default inicioRouter;