import { Router } from "express";
import { cadastrarAssunto, pesquisarAssuntos ,solicitarQuestao } from "../../controllers/questaoController.js";

const exercicioRouter = Router();

exercicioRouter.get("/questoes/:id", solicitarQuestao );
exercicioRouter.get("/teste", pesquisarAssuntos);
exercicioRouter.post("/teste", cadastrarAssunto);


export default exercicioRouter;