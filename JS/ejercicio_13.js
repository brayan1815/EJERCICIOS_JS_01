const media=function(){
    let sum=0;
    let num;
    for(n=1;n<=4;n++){
        num=parseFloat(prompt(`Por favor ingrese el valor ${n}:`))
        sum+=num;
    }
    let prom=sum/4;
    return prom;
}

alert(`La media de los numeros ingresados es: ${media()}`);