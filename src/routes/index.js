import { Router } from "express";
import inicioRouter from "./inicio/index.js";

const router = Router();

router.use(inicioRouter);

export default router;