let userName = prompt("Ingrese su Nombre");
let userAge = prompt("Ingrese su Edad");
let edad = parseInt(userAge);
if (edad < 0){
    alert("No puede tener edad negativa!"); 
} else{
    if (edad > 17){
        alert("Usted es mayor de edad");
    }
    if (edad > 100){
        alert("Usted tiene mas de 100 años");
    }
    
    if (edad > 0){
        alert("Hola " + userName + " Usted tiene " + userAge + " Años");
    }
}

