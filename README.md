## Recopilacion de datos

### Prerequisitos

```
NodeJs = v10.19.0
Mongodb = v3.6.8
```

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://github.com/calypsobronte/datos.git
```

<br>
<br>

#### Backend *(nodejs, morgan, express, mongoose, nodemon, ES6+)*
Para el backend utilice la tecnologia de nodejs con Express ya que es rapido y flexible con nodejs para la creacion de APIs.

1. Ingresar al directorio clonado `datos/backend`

```bash
$ cd backend
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn start
```

4. Puede abrir postman e ingresar los datos con la siguiente endpoint  `http://localhost:5000/api/init` para saber que si esta corriendo el servidor correctamente.

  > Nota: la base de datos del proyecto se llama `datos` esta se crea automaticamente y no contiene password

<br>
<br>


### Rutas utilizadas por medio de postman
|  Entrada   |     URL    |  Salida   |
| ---------- | ---------- | ---------- |
| GET   | `http://localhost:5000/api/users`   | [{"_id": "60aab107a5f8771375cfa33e", ...}] |
| POST   | `http://localhost:5000/api/users`   | { "nombre": "Lina", ...} |
| PUT   | `http://localhost:5000/api/users/:id`   | [{"_id": "60aab107a5f8771375cfa33e", ...}] |
| DELET   | `http://localhost:5000/api/users/:id`   | Datos eliminado con exito |
| GET   | `http://localhost:5000/api/users/:nombrearchivo`   | Archivo encintrado visual |

> Nota: Se pueden crear la informacion por dos medio uno por medio de `raw` formato JSON o por medio de `form-data` para guardar datos y tambien en formato de archivos.

## Criterios de aceptacion
- [x] Guardar informacion en base de datos SQL o No SQL
- [x] Construir REST API: GET, POST, PUT, DELET
- [x] Subir archivo

## Construido con

* WSL2 Ubuntu Server 20.04
* Visual Studio Code
* Postman

## Contribuyendo

Contribuya usando GitHub Flow. Cree una rama, agregue confirmaciones y abra una solicitud de extracción .

## Versionado

v1

## Autores

* **Lina María Montaño Ramírez** - *Backend Developer* - [calypsobronte](https://github.com/calypsobronte)


## Licencia

 MIT License 
