import { colecciones, productos } from "../data/informacion.js"

const home = (req, res) => {
    res.render("home", {title: "Home", colecciones, productos})
}

const contact = (req, res) => res.send("Pagina de contacto")
const about = (req, res) => res.send("Pagina About Us")
const faq = (req, res) => res.send("Pagina de FAQs")

const controller = {
    home, contact, about, faq
}

export default controller;