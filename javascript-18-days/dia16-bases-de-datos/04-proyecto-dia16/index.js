const express = require("express");
const app = express();

const mongoDB = require("./conexion");
const { ObjectId } = require("mongodb");

app.use(express.json());

app.get("/estudiantes/:legajo", (pedido, respuesta) => {
  const legajoEstudiante = pedido.params.legajo;

  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("estudiantes");
       busqueda.findOne({ legajo: legajoEstudiante })
      .then((resultado) => respuesta.send(resultado))
      .catch((error) => respuesta.send(error));
  });
});

app.post("/estudiantes/create", (pedido, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("estudiantes");
    busqueda
      .insertOne(pedido.body)
      .then(respuesta.send("Registro creado con exito"))
      .catch((error) => respuesta.send(error));
  });
});

app.post("/notas/create", (pedido, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("notas");
    busqueda
      .insertOne(pedido.body)
      .then(respuesta.status(201).send("Registro creado con exito"))
      .catch((error) => respuesta.send(error));
  });
});

app.put("/notas/:id/update", (pedido, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("notas");
    const filtro = pedido.params.id;

    busqueda
      .updateOne({ _id: ObjectId(filtro) }, { $set: pedido.body })
      .then(respuesta.send("Nuevo registro creado"))
      .catch((error) => respuesta.send(error));
  });
});

app.delete("/notas/:id/delete", (pedido, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("notas");
    const filtro = pedido.params.id;

    busqueda
      .deleteOne({ _id: ObjectId(filtro) })
      .then(respuesta.send("Registro borrado con exito"))
      .catch((error) => respuesta.send(error));
  });
});

app.get("/notas/:codigo/aprobados", (pedido, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const busqueda = conexion.db().collection("notas");
    const filtro = pedido.params.codigo;

    busqueda.find({ codigo_curso: filtro, nota: { $gte: 6 }})
  });
});

app.listen(3000, () => {
  console.log("El servidor esta en linea");
});
