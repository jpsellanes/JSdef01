///////////////////////////////////////
// DOM 

$(() =>{
    console.log("DOM ready");
});



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
let misDatos = [];

///////////////////////////////
//// Se define el origen de los datos de un json
///////////////////////////////

let URLdata = "./data/data.json";

//usdInArs

///////////////////////////////
////  Se definen los Botones
/////////////////////////////


$("#budget").on("click",function(){
    console.log("Estimar");
    crearProducto(productos);
    resumenProducto(productos);
    crearJSON(productos);
    console.log(productos);
    $.get(URLdata, function(data, estado){
        if(estado == "success"){
            misDatos = data;
        } 
    });
});

//////////////////////////////
//// extraigo el exchange rate
//////////////////////////////
let dataJson = JSON.parse(misDatos);
let usdInArs = dataJson[0][eqRate];


$("#addThermalAnalysis").on("click",function(){
    console.log("Click");
    productothermal = true;
    $("#addTh").fadeIn(500).fadeOut(1000);
});

$("#addArmado").on("click", function(){
    console.log("Click");
    productoarmado = true;
    $("#addArm").fadeIn(500).fadeOut(1000);
});

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
    let totalProductoARS = totalProducto*usdInArs;
    let div02 = document.createElement("div");
    div02.setAttribute("id", "Div01");
    div02.innerHTML = `
        <p>Costo total = ${totalProducto}</p>
        <p>Costo totla = ar$${totalProductoARS}</p>
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

/////////////////////////////////
// Aplicacion de formato a los Botones
/////////////////////////

$(document).ready(function(){
    $(":button").css("background-color", "white");
});

/////ANIMACIONES

$(document).ready(function(){
    $("img").hover(
        function(){
            $(this).animate({
                height: "+=10px",
                width: "+=10px"});},
        function(){
            $(this).animate({
                height: "-=10px",
                width: "-=10px"
            })
        }
    );
});



