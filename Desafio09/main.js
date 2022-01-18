
/// **************************************************
//Se agregan los botones 
/// **************************************************
let botonFinalizar = document.createElement("button");
botonFinalizar.innerHTML ="Finalizar";
document.body.appendChild(botonFinalizar);

let botonQuitar = document.createElement("button");
botonQuitar.innerHTML =`Quitar`;
document.body.appendChild(botonQuitar);


///// Se ejecuta la funcion principal, que es la de agregar productos
ejecutar();


/// **************************************************
/////Se crea la clase, y una variable para almacenar los productos
/// **************************************************
class Producto {
    constructor(products){
        this.nombre = products.nombre;
        this.precio = products.precio;
        this.cantidad = products.cantidad;
    }
}


const productos = [];
// *******************************************************
// Se definen las funciones a emplear
// *******************************************************
function ejecutar() {
    let formProductosInput = document.createElement("form");
    formProductosInput.innerHTML = `
    <input placeholder = "Ingrese el nombre del producto" type="text"></input>
    <input placeholder = "Ingrese el precio del producto" type="number"></input>
    <input placeholder = "Ingrese las unidades a comprar" type="number"></input>
    <button type ="submit">Agregar</button>
    `;
    document.body.appendChild(formProductosInput);

    formProductosInput.onsubmit = function(event){
        event.preventDefault();
        const inputs = event.target.children;
        productos.push(new Producto({ nombre: inputs[0].value, precio: inputs[1].value, cantidad: inputs[2].value }));
        console.log("ejecutarAnda");
    }
}


//// evento del boton finalizar
botonFinalizar.onclick = function(event){
    event.preventDefault();
    console.log(productos)
    crearProducto(productos);
    console.log("Hola");
}


/// Evento del boton quitar (creo que funciona mal la parte de borrar el texto, pero si funciona la de eliminar el producto de la cesta)
botonQuitar.onclick = function(event){
    let borrar = document.getElementById("Div01");
    borrar.innerHTML ="";
    event.preventDefault();
    productos.pop();
    crearProducto(productos);
    console.log(productos);
}

///Funcion para mostrar los productos
function crearProducto(productos) {
    for(producto of productos){
        let div = document.createElement('div');
        div.setAttribute("id","Div01")
        div.innerHTML = `
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        document.body.appendChild(div);
    }
}