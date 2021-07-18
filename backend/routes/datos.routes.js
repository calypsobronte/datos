import { Router } from "express";
const router = Router();

import multipart from "connect-multiparty"

const multipartMiddleware = multipart({ uploadDir: "./uploads" }); //Donde se guardo la imagen

//We load the controller
import * as datosCtrl from "../controllers/datos.controllers";

//We list the GET, POST, PUT, DELET
router.post('/', multipartMiddleware, datosCtrl.createDatos);
router.get('/', datosCtrl.getDatos);
router.put('/:id', datosCtrl.putDatos);
router.delete('/:id', datosCtrl.deleteDatos);
router.get('/:nombrearchivo', datosCtrl.getArchivo);

export default router;