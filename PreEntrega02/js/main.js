
/////////////////////////////////////
//// Se definen algunas variables a emplear
///////////////////////////////////
let addproduct = document.getElementById("addProduct")
let carritoDiv = document.getElementById("carrito");
const productos = [];
productothermal = false;
productoarmado = false;
let totalProducto = 0;
const saveLocally = (key, value) => {localStorage.setItem(key, value)};


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
        this.components = products.components;
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
    <input placeholder = "Add Amount of Components" type="number"></input>
    <input placeholder = "Add units to buy" type="number"></input>
    <button type ="submit">Agregar</button>
    `;
    addproduct.appendChild(formProductosInput);

    formProductosInput.onsubmit = function(event){
        event.preventDefault();
        const inputs = event.target.children;
        productos.push(new Producto({ nombre: inputs[0].value, components: inputs[1].value, cantidad: inputs[2].value }));
        console.log("ejecutarAnda");
        crearProducto(productos)
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
            <p>Precio: ${costoItemSolo(producto)}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        carritoDiv.appendChild(div);
    }
}

//////************************************************************************** */
///// Funcion para estimar la influencia del servicio de Diseño Termico y Armado
////****************************************************************************** */


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
        totalProducto =  totalProducto + componentsAmount(producto)*parseFloat(producto.cantidad)*extras(producto) + pcbType(producto);
    }
    let div02 = document.createElement("div");
    div02.setAttribute("id", "Div01");
    div02.innerHTML = `
        <p>Costo total = ${totalProducto}</p>
    `
    carritoDiv.appendChild(div02);
}

function componentsAmount(producto){
    if(parseFloat(producto.components) > 150){
        return 150;
    }else if(parseFloat(producto.components) > 100){
        return 100;
    }else if(parseFloat(producto.components) > 50){
        return 70;
    } else{
        return 50;
    }
}

function pcbType(producto){
    if(producto.nombre == "A" || producto.nombre == "a" ){
        return 20;
    }else if (producto.nombre == "B" || producto.nombre == "b" ){
        return 10;
    }else if (producto.nombre == "C" || producto.nombre == "c" ){
        return 7.5;
    }
}

function costoItemSolo(producto){
    return componentsAmount(producto)*parseFloat(producto.cantidad)*extras(producto) + pcbType(producto);
}

////////////// *******************************************************
// JSON FILE
////////////// *******************************************************

function crearJSON(productos){
    let jsonindex =0;
    for (producto of productos) {
        saveLocally(jsonindex, JSON.stringify(producto));
        console.log(JSON.stringify(producto));
        jsonindex = jsonindex + 1;
    }

    const locally = JSON.parse(localStorage.getItem("listProducts"));
}
