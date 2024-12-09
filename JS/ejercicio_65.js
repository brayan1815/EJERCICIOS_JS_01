let numero=parseInt(prompt("Por favor ingrese un nummero entero positivo: "));
let array_num=[];

if(numero<0){
    alert("EL NUMERO INGRESADO NO ES POSITIVO");
}else{
    for(let n=1;n<=numero;n++){
        array_num.push(n);
    }
}

alert(array_num);