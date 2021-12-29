

alert("Este programa calculara un presupuesto y tiempos de elaboracion para la construcccion de PCBs \n Se debera ingresar el tamaño del PCB, y la cantidad de componentes"); //Aca se india cuantas veces va a iterar, y la precision, recordar que es funcion del cubo de la iteracion

// Se declaran las variables

let carritoItems = "";
let carritoCosto = 0;
let metodoPago = "";
let carritoResumen = "";
let ListaCarrito = [];

//Calculo de cuotas

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
        ListaCarrito.push("Producto: " + this.producto + "- Precio: "+ this.precio + "- Cantidad: " + this.cantidad + "- SubTotal: "+ this.precio*this.cantidad +"\n");
    }
}
//Carga de items

do{
    const producto = prompt("Ingrese el tipo de PCB");
    const precio = parseFloat(prompt("Ingrese el precio del PCB elegido"));
    const cantidad = parseInt(prompt("Ingrese la cantidad de PCBs requeridas"));
    const carritoNuevo = new carritoInput(producto, cantidad, precio);
    carritoNuevo.sumarItem();
    carritoNuevo.sumarPrecio();
    continuar = prompt("Desea Agregar mas productos? SI o NO")
}while (continuar !="NO");


prompt("Su total es el siguiente: " +  carritoCosto);

metodoPago = prompt("El resumen de su compra es el siguiente" + "\n"  + ListaCarrito + "\n" + "El total es el siguiente" + carritoCosto + "\n" + "Indique el motodo de pago CONTADO o CUOTAS");

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



