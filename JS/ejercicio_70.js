let contrasena=prompt("Por favor ingrese la contraseña que desea guarar: ");

while(true){
    let cont=prompt("Por favor introduzca la contraseña que guardo anteriormente: ");

    if(contrasena===cont){
        alert("La contraseña ingresada es correcta");
        break
    }
    else{
        alert("La contraseña ingresada es incorrecta, por favor vuelva a intentarlo");
    }
}