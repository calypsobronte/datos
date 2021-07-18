import Datos from "../models/Datos";
import fs from "fs";
import path from "path"

export const createDatos = async (req, res) => {
    try {
        const { nombre,
            apellido,
            tipoDocumento,
            nroDocumento,
            correoElectronico,
            celular,
            fechaNacimiento} = req.body;
        let archivo = req.files.archivo;
        let patharchivo = archivo.path;

        var pathTemp = patharchivo.split("/");
        let nombrearchivo = pathTemp[1];    
        // creating a new data
        const datos = new Datos({
            nombre,
            apellido,
            tipoDocumento,
            nroDocumento,
            correoElectronico,
            celular,
            fechaNacimiento,
            archivo: nombrearchivo
        });
        // saving the new Data
        const savedDatos = await datos.save();
        return res.status(200).json(savedDatos);
    } catch (error) {
        console.error(error);
    }
};


export const getDatos = async (req, res) => {
    try {
        await Datos.find({}, (err, dataList) => {
            return res.status(200).json(dataList);
        });
    } catch (error) {
        console.error(error);
    }
}

export const putDatos = async (req, res) => {
    try {
        let { id } = req.params;
        const { nombre,
            apellido,
            tipoDocumento,
            nroDocumento,
            correoElectronico,
            celular,
            fechaNacimiento } = req.body;
        let archivo = req.files.archivo;
        let patharchivo = archivo.path;

        var pathTemp = patharchivo.split("/");
        let nombrearchivo = pathTemp[1];    
        if (nombre) {
            await Datos.findByIdAndUpdate(id, { $set: { nombre: nombre } });
        }
        if (apellido) {
            await Datos.findByIdAndUpdate(id, { $set: { apellido: apellido } });
        }
        if (tipoDocumento) {
            await Datos.findByIdAndUpdate(id, { $set: { tipoDocumento: tipoDocumento } });
        }
        if (nroDocumento) {
            await Datos.findByIdAndUpdate(id, { $set: { nroDocumento: nroDocumento } });
        }
        if (correoElectronico) {
            await Datos.findByIdAndUpdate(id, { $set: { correoElectronico: correoElectronico } });
        }
        if (celular) {
            await Datos.findByIdAndUpdate(id, { $set: { celular: celular } });
        }
        if (fechaNacimiento) {
            await Datos.findByIdAndUpdate(id, { $set: { fechaNacimiento: fechaNacimiento } });
        }

        if (archivo) {
            await Datos.findByIdAndUpdate(id, { $set: { archivo: nombrearchivo } });
        }
        return res.status(200).json({ status: true, message: `Cambios actualizados con éxito` });
    } catch (error) {
        console.error(error);
    }
}

export const deleteDatos = async (req, res) => {
    try {
        let id = req.params.id;

        await Datos.findByIdAndDelete({ _id: id }, (err, datos) => {
            const pathFile = "./uploads/" + datos.archivo;

            fs.access(pathFile, fs.F_OK, err => {
                if (err) {
                    return res.status(203).send({ message: datos  + "Los datos del usuario se borraron correctamente pero no se encontro el archivo para eliminar"});
                } else {
                    fs.unlink(pathFile, (err) => {
                        console.log("Archivo eliminado");
                    });
                    return res.status(202).send({ message: datos + "Los datos se borraron con exito" });
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}

export const getArchivo = async (req, res) => {
    try {
        const archivo = req.params.nombrearchivo;

        const pathFile = "./uploads/" + archivo;

        fs.access(pathFile, fs.F_OK, err => {
            if (err) {
                return res.status(500).send({ message: "La archivon que intentas buscar no se encuentra" });
            } else {
                return res.sendFile(path.resolve(pathFile));
            }
        });
    } catch (error) {
        console.error(error);
    }
};