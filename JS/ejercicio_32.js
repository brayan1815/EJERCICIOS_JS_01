const cal=function(){
    let sum1=0;
    let sum2=0;
    let prod3;

    for(let n=1;n<=5;n++){
        let prod=parseFloat(prompt(`Por favor ingrese el valor del producto ${n}:`));
        if(n<=2){
            prod=prod-(0.05*prod);
            alert("EL PRECIO A PAGAR POR EL PRODUCTO ES: "+prod);
            sum1+=prod;
        }else if(n>2 && n<5){
            prod=prod-(0.02*prod);
            alert("EL PRECIO A PAGAR POR EL PRODUCTO ES: "+prod);
            sum2+=prod
        }else{
            prod3=parseFloat(prompt(`Por favor ingrese el valor del producto ${n}:`));
        }
    }
    let total=sum1+sum2+prod3;

    return total;
}

alert(`El total a pagar por los productos que se compraron es: ${cal()}`);