import { Router } from "express";
import inicioRouter from "./inicio/index.js";
import exercicioRouter from "./questoes/index.js";

const router = Router();

router.use(inicioRouter);
router.use(exercicioRouter);

export default router;