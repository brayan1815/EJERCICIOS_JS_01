const hallar_raices=function(a,b,c){

    let mensaje=``;
    let discriminante=(b**2)-4*a*c;

    if(discriminante>0){
        let raiz1=(-b+Math.sqrt((b**2)-(4*a*c)))/2*a;
        let raiz2=(-b-Math.sqrt((b**2)-(4*a*c)))/2*a;
        mensaje=`Hay dos raices reales laa cuales son ${raiz1} y ${raiz2}`;
    }else if(discriminante===0){
        let raiz=-b/(2*a);
        mensaje=`Hay una sola raiz la cual es: ${raiz}`;
    }else if(discriminante<0) mensaje=`No hay raices reales`;

    return mensaje;
}

let a=parseFloat(prompt("Por favor ingrese el valor para a: "));
let b=parseFloat(prompt("Por favor ingrese el valor para b: "));
let c=parseFloat(prompt("Por favor ingrese el valor para c: "));

alert(hallar_raices(a,b,c));
