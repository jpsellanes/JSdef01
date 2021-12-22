

alert("Este programa calculara un presupuesto y tiempos de elaboracion para la construcccion de PCBs \n Se debera ingresar el tamaño del PCB, y la cantidad de componentes"); //Aca se india cuantas veces va a iterar, y la precision, recordar que es funcion del cubo de la iteracion

// Se declaran las variables, y se parsea el input para trabajar con intergers

let carritoItems = "";
let carritoCosto = 0;
let i = 1;
let metodoPago = "";

//Se empieza el calculo de Pi

function calculoCuotas (){
    let cantCuotas = parseInt(prompt("Ingrese Cantidad de Cuotas"));
    return costoCuota = (carritoCosto/cantCuotas);
};



//Carga de items

do{
    carritoItems += (prompt("Ingrese los tipos de PCBs que desea") + ", ");
    cantidadItem = (prompt("Indique la cantidad de Items"));
    i++;
    carritoCosto += parseFloat(prompt("Ingrese el valor Unitario del producto"))*cantidadItem;
    continuar = prompt("Desea terminar su pedido? Escriba SI o NO");
} while(continuar !="SI");

//metodo de pago

metodoPago = prompt("El resumen de su compra es el siguiente" + "\n" + "Item - Descripcion"
+ "\n" + i + " - " +carritoItems + "\n" + "El total es el siguiente" + carritoCosto + "\n" + "Indique el motodo de pago CONTADO o CUOTAS");

// Final

switch(metodoPago){
    case "CONTADO":
        alert("Su monto a pagar es" + carritoCosto);
        break;
    case "CUOTAS":
        calculoCuotas();
        alert("El costo de cada Cuota sera: " + costoCuota);
        break;
}



