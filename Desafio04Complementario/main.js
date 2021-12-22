

let sum = (a,b) => a + b;
let rest = (a,b)  => a -b ;
let iva = (x) => x*0.21;

let costoP = parseFloat(prompt("Ingrese valor producto"));
let descP = parseFloat(prompt("Ingrese Valor descuento"));

let precioNuevo = rest(sum(costoP, iva(costoP)),descP);

alert("El precio es de: " + precioNuevo);


