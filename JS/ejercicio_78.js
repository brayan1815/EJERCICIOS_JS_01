function tamaño(palabra){
    let array=palabra.split('');
    let mensaje="";
    if(array.length<5) mensaje="La palabra es corta";
    else mensaje="La palabra es larga";
    return mensaje;
}

let palabra=prompt("Por favor ingrese una palabra: ");
alert(tamaño(palabra));