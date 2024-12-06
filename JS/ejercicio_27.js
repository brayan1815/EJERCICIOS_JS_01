const prom=function(){
    let sum_par=0;
    for(let n=1;n<=3;n++){ 
        let nota=parseFloat(prompt(`NOTAS DE PARCIALES
            por favor ingrese la nota obtenida en el parcial ${n}(tenga en cuenta que las notas van de 1.0 a 5.0):`));
        if(nota>=1.0 && nota<=5.0){
            sum_par+=nota;
        }else{
            alert("LA NOTA INGRESADA NO ES VALDA, POR FAVOR VUELVA A INTENTARLO.")
            n-=1;
        }
    }
    let prom_par=sum_par/3;
    let not_ex_fin;

    while(true){
        not_ex_fin=parseFloat(prompt("Por favor ingrese la nota del examen final (tenga en cuenta que las notas van de 1.0 a 5.0):"))
        if(not_ex_fin>=1.0 && not_ex_fin<=5.0){
            break;
        }else alert("LA NOTA INGRESADA NO ES VALIDA POR FAVOR VUELVA A INTENTARLO. ");
    }

    let not_tra_fin

    while(true){
        not_tra_fin=parseFloat(prompt("Por favor ingrese la nota del trabajo final (tenga en cuenta que las notas van de 1.0 a 5.0):"))
        if(not_tra_fin>=1.0 && not_tra_fin<=5.0){
            break;
        }else alert("LA NOTA INGRESADA NO ES VALIDA POR FAVOR VUELVA A INTENTARLO. ");
    }

    let not_fin=(prom_par*0.55)+(not_ex_fin*0.30)+(not_tra_fin*0.15);

    return not_fin;
}


alert("LA NOTA FINAL DEL ALUMNO ES: "+prom());