function cadena_sin_vocales(frase){
    frase=frase.toLowerCase();
    let array=frase.split('');
    let array2=[];

    for(let n=0;n<array.length;n++){
        if(array[n]!="a" && array[n]!="e" && array[n]!="i" && array[n]!="o" && array[n]!="u"){
            array2.push(array[n]);
        }
    }

    let fra2=array2.join('');
    return fra2;
}

let frase=prompt("Por favor ingrese una frase o palabra: ");

alert("La frase sin vocales es: "+cadena_sin_vocales(frase));