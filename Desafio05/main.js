

alert("Este programa calculara un presupuesto y tiempos de elaboracion para la construcccion de PCBs \n Se debera ingresar el tamaño del PCB, y la cantidad de componentes"); //Aca se india cuantas veces va a iterar, y la precision, recordar que es funcion del cubo de la iteracion

// Se declaran las variables, y se parsea el input para trabajar con intergers

let carritoItems = "";
let carritoCosto = 0;
let metodoPago = "";
let carritoResumen = "";

//Se empieza el calculo de Pi

function calculoCuotas (){
    let cantCuotas = parseInt(prompt("Ingrese Cantidad de Cuotas"));
    return costoCuota = (carritoCosto/cantCuotas);
};

//Se define la clase Elemento del changuito 
class carritoInput{
    constructor(producto, cantidad, precio){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    sumarPrecio(){
        carritoCosto += (this.precio * this.cantidad);
    }
    sumarItem(){
        carritoResumen += ("Producto: " + this.producto + "- Cantidad: " + this.cantidad + "\n");
    }
}
//Carga de items

const producto = prompt("Ingrese el tipo de PCB");
const precio = prompt("Ingrese el precio del PCB elegido");
const cantidad = parseInt(prompt("Ingrese la cantidad de PCBs requeridas"));

const carrito01 = new carritoInput(producto, cantidad, precio);
carrito01.sumarPrecio();
carrito01.sumarItem();
//metodo de pago

prompt("Su total es el siguiente: " +  carritoCosto);

metodoPago = prompt("El resumen de su compra es el siguiente" + "\n"  + carritoResumen + "\n" + "El total es el siguiente" + carritoCosto + "\n" + "Indique el motodo de pago CONTADO o CUOTAS");

// Final

switch(metodoPago){
    case "CONTADO":
        alert("Su monto a pagar es" + carritoCosto);
        break;
    case "CUOTAS":
        calculoCuotas();
        alert("El costo de cada Cuota sera: " + costoCuota);
        break;
    default:
        alert("Ingrese un Metodo Valido")
}



