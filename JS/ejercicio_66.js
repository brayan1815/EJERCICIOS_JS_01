
let cant=parseFloat(prompt("Por favor ingrese la cantidad a invertir: "));
let intere=parseInt(prompt("Por favor ingrese el interes anual: "));
let años=parseInt(prompt("Por favor ingres la cantidad de años: "));

let aumen=cant;

for(let n=1;n<=años;n++){
    aumen=aumen+(aumen*(intere/100));
    alert(`El capital obtenido en el año ${n} es de ${aumen}`);
}