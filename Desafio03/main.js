

alert("El programa le va a pedir que indique la precision que desea") //Aca se india cuantas veces va a iterar, y la precision, recordar que es funcion del cubo de la iteracion

// Se declaran las variables, y se parsea el input para trabajar con intergers
let repeticiones = prompt("Ingrese la cantidad de repeticiones");
let precision = parseInt(repeticiones);
let multi = 0;
let k = 1;
let numeroPi = 0;
let resultado = "";
let i = 1;

//Se empieza el calculo de Pi

if (precision > 0){
    while(i  < precision + 1){
        for (let k = 1; k < i*i*i + 1; k++){
            multi += ((-1)**(k +1))/(2*k - 1);
            numeroPi = 4*multi;
        }
        i = i+1;
        resultado +=("Para un i = " + i + " queda un pi = " + numeroPi + "\n")
        numeroPi = 0;
        multi = 0;
    }
} else {
    alert("Precision Erronea, ingrese un numero mayor a 0");
}

alert(resultado);



