const cal_tap=function(){
    let total_tapas=1;
    let parte_martin=2/3;
    let parte_jairo=1/4;
    let parte_Lorena=total_tapas*(parte_martin+parte_jairo);
    return parte_Lorena;
}

alert("La parte que le corresponde a Lorena es: "+cal_tap())