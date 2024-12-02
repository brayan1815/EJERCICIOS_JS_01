const mayor_edad= function(ed){
    if(ed>=0){
        if(ed>=18)return "El usuario es mayor de edad.";
        else return "El usuario no es mayor de edad";
    }else return "El numero ingresado no es valido";
}

let edad= prompt("Por favor ingrese su edad: ")

console.log(mayor_edad(edad));