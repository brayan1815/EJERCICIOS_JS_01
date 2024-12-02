const contraseñas= function(contra){
    let con=prompt("Por favor ingrese la contraseña: ");
    let mensaje;
    if(contra===con){
        mensaje="La contraseña ingresada es correcta.";
    }
    else{
        mensaje="La contraseña ingresada es incorreecta."
    }
    return console.log(mensaje);
}

const expr=/^\w+$/i;
const contra=prompt("Por favor ingrese la contraseña que desea guardar: ");

if(expr.test(contra)){
    console.log("La contraseña se guardo correctamente");
    contraseñas(contra);
}
else console.log("La contraseña no cumple con la seguridad necesaria.");



