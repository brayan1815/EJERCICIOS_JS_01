const examenes=function(){
    let suma=0;
    for(let n=1;n<=4;n++){
        let nota=parseFloat(prompt(`pOR FAVOR INGRESE LA NOTA DEL EXAMEN ${n}
        tenga en cuenta que las notas van de 1 a5`));
        if(nota>=1 && nota<=5){
            suma+=nota;
        }else{
            alert("LA NOTA INGRESADA NO ES VALIDA, POR FAVOR VUELVA A INTENTARLO");
            n-=1;
        }
    }
    let promedio=suma/4;
    return promedio;
}

alert("El promedio obtenido por el estudiante en los 4 examenes es: "+examenes());