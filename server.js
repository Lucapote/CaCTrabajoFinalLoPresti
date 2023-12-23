import express from "express"
import {resolve} from "path"
import mainRoutes from "./source/routes/mainRoutes.js";
import shopRoutes from "./source/routes/shopRoutes.js"
import {colecciones, productos} from "./source/data/informacion.js"
 
const app = express();
const PORT = 8080;

//uso de carpeta public
app.use(express.static("public"));

//Configuracion de ejs y su carpeta de vistas
app.set("view engine", "ejs")
app.set("views", resolve()+"/source/views")

//rutas
app.use("/", mainRoutes)
app.use("/shop", shopRoutes)


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})