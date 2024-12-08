let can_cur=parseInt(prompt("Por favor ingrese la cantidad de cursos que lleva: "));

if(can_cur<6){
    alert(`Lo que debera pagar el alumno por cada uno de los cursos es: $2.000.000
En total debera pagar: ${can_cur*2000000}`);
}else if(can_cur>6){
    alert(`Lo que debera pagar el alumno por cada uno de los cursos es: $1.200.000
En total debera pagar ${can_cur*1200000}`);
}