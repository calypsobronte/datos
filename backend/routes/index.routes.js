import {Router} from "express";
const router = Router();

import * as indexCtr from "../controllers/index.controllers";

router.get('/', indexCtr.indexDatos);

export default router;