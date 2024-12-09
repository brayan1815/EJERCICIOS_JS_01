let frase=prompt("Por favor ingrese una frase: ");
let letra=prompt("Por favor ingrese una letra: ");
let array=frase.split('');
let cont=0;
for(let n=0;n<array.length;n++){
    if(letra===array[n])cont++;
}

alert("La cantidad de veces que se encuentra la letra ingresada en la frase es: "+cont);
