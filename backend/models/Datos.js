import { Schema, model } from "mongoose";

const DatosSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    tipoDocumento: {
        type: String
    },
    nroDocumento: { 
        type: Number
    },
    correoElectronico: {
        type: String
    },
    celular: {
        type: Number
    },
    fechaNacimiento: {
        type: Date
    },
    archivo: {
        type: String
    },
});
export default model("Datos", DatosSchema);