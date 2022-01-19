
/////////////////////////////////////
//// Se definen algunas variables a emplear
///////////////////////////////////
let carritoDiv = document.getElementById("carrito");
const productos = [];
productothermal = false;
productoarmado = false;


///////////////////////////////
////  Se definen los Botones
/////////////////////////////

let botonQuitar = document.createElement("button");
botonQuitar.innerHTML =`Quitar`;


let budgetBtn = document.getElementById("budget")
budgetBtn.onclick = (event) => {
    console.log("Estimar");
    crearProducto(productos);
    resumenProducto(productos);
    crearJSON(productos);
    console.log(productos);
}


let addThermal = document.getElementById("addThermalAnalysis")
addThermal.onclick = (event) => {
    console.log("Click");
    productothermal = true;

}

let addArmado = document.getElementById("addArmado")
addArmado.onclick = (event) => {
    console.log("Click");
    productoarmado = true;
}

///////////////////////////////////////////////////////////////////
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


// *******************************************************
// Se definen las funciones a emplear
// *******************************************************
function ejecutar() {
    let formProductosInput = document.createElement("form");
    formProductosInput.innerHTML = `
    <input placeholder = "Add PCB type" type="text"></input>
    <input placeholder = "Add liste Cost" type="number"></input>
    <input placeholder = "Add units to buy" type="number"></input>
    <button type ="submit">Agregar</button>
    `;
    carritoDiv.appendChild(formProductosInput);

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
    console.log(productos);
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
        carritoDiv.appendChild(div);
    }
}

//////************************************************************************** */
///// Funcion para estimar la influencia del servicio de Diseño Termico y Armado
////****************************************************************************** */
let totalProducto = 0;

function extras(producto){
    if(productothermal==true && productoarmado==true){
        return 3.5;
    }else if (productothermal==false && productoarmado==false){
        return 1;
    } else {
        return 2;
    }
}

function resumenProducto(productos){
    for(producto of productos){
        totalProducto =  totalProducto + parseFloat(producto.precio)*parseFloat(producto.cantidad)*extras(producto);
    }
    let div02 = document.createElement("div");
    div02.setAttribute("id", "Div01");
    div02.innerHTML = `
        <p>Costo total = ${totalProducto}</p>
    `
    carritoDiv.appendChild(div02);
}



////////////// *******************************************************
// JSON FILE
////////////// *******************************************************

const saveLocally = (key, value) => {localStorage.setItem(key, value)};

function crearJSON(productos){
    for (const producto of productos) {
        saveLocally(producto.id, JSON.stringify(producto));
        console.log(JSON.stringify(producto));
    }

    /*const locally = JSON.parse(localStorage.getItem("listProducts"));*/
}
