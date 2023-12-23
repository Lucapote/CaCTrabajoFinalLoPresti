import { productos } from "../data/informacion.js";

const shop = (req, res) => {
    res.render("shop", {title: "Shop", productos})
}

const shopItem = (req, res) => {
    const id = req.params.id;
    let itemEncontrado;
    let infoProducto;

    for(const item of productos){
        if(item.product_sku === id){
            itemEncontrado = true;
            infoProducto = item;
        }
    }

    if(itemEncontrado){
        res.render("shopItem", {title: `Funko Shop - ${infoProducto.product_name}`, infoProducto, productos})
    }else{
        res.send("No se encontro el producto")
    }

}

const shopCart = (req, res) => {
    res.render("shopCart", {title: "Funko Shop - Carrito", producto: productos[2]})
}

const controller = {
    shop, shopItem, shopCart
};

export default controller;