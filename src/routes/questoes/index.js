import { Router } from "express";
import { solicitarQuestao } from "../../controllers/questaoController.js";

const exercicioRouter = Router();

exercicioRouter.get("/questoes/:id", solicitarQuestao );
exercicioRouter.get("/teste");

export default exercicioRouter;