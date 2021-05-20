const express = require("express");
const app = express();

const port = 4000;

const rootRoutes = require("./routes/root.routes");
const usuarioRoutes = require("./routes/usuario.routes");

// Middleware
app.use(express.json());

app.use("/", (req, res, next) => {
	console.log("PASANDO POR MIDDLEWARE!");
	next();
});

// Rutas y sus respectivas logicas
app.use("/", rootRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(port, () => {
	console.log(`App corriendo en http://localhost:${port}`);
});
