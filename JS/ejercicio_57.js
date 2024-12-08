let calificacion=parseFloat(prompt("Por favor ingrese la calificacion obtenida por el alumno: "));

if(calificacion<0 || calificacion>10)alert("LA CALIFICACION INGRESDA NO ES VALIDA");
else if(calificacion>=9.1 && calificacion<=10)alert("LA CALIFICACION DEL ESTUDIANTE ES A= Excelente");
else if(calificacion>=8.1 && calificacion<=9) alert("LA CALIFICACION DEL ESTUDIANTE ES A= Muy Bien");
else if(calificacion>=7.5 && calificacion<=8) alert("LA CALIFICACION DEL ESTUDIANTE ES A= Bien");
else alert ("LA CALIFICACION DEL ALUMNO ES NA= No Aprobo");
