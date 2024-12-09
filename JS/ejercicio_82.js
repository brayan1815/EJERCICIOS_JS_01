function invertir(palabra){
    let invertida=palabra.split('').reverse().join('');
    return invertida;
}

let palabra=prompt("Por favor ingrese la palabra: ");

alert("La palabra invertida es: "+invertir(palabra));