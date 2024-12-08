let temperatura=parseFloat(prompt("Por favor ingrese la temperatura: "));
let presion=parseFloat(prompt("Por favor ingrese la presion: "));

if(presion>200 || temperatura>100){
    alert("ALARMAAAAAAAAAAA");
}else alert("Normal");