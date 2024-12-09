function verfificar(pin){
    let expresion=/^[0-9]{4,6}$/
    let menesaje="";

    if(expresion.test(pin)) menesaje="El pin cumple con los requisitos";
    else menesaje="El pin no cumple con los requisitos";
    return menesaje;
}

let pin=parseInt(prompt("Por favor ingrese el pin: "));

alert(verfificar(pin));

// let expresion=/^[0-9]{4,6}$/
// let pin=1111221;
// console.log(expresion.test(pin));