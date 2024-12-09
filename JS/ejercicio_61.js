let n=parseInt(prompt("Por favor ingrese la antidad de notas que esea ingresar: "));
let not_baj=0;
let not_al=0;
let not_100=0;
let not_a=0,not_b=0,not_c=0,not_d=0;

for (let l=1;l<=n;l++){
    let nota=parseInt(prompt(`Por favor ingrese la nota obtenida por el alumno ${l} (tenga en cuenta que las notas van de 1 a 100):`));
    if(nota>=1 && nota<=100){
        if(l===1){
            not_baj=nota;
        }
        if(nota>not_al) not_al=nota;
        if(nota<not_baj) not_baj=nota;
        if(nota===100) not_100+=1;
        if(nota<=100 && nota>=90)not_a+=1;
        if(nota<90 && nota>=80)not_b+=1;
        if(nota<80 && nota>=70)not_c+=1;
        if(nota<70 && nota>=60)not_d+=1;
    }else{
        alert("LA NOTA INGRESADA NO ES VALIDA, POR FAVOR VUELVA A INTENTARLO");
        l-=1;
    }
}

alert(`LA NOTA MAS ALTA FUE: ${not_al}
LA NOTA MAS BAJA FUE: ${not_baj}
LA CANTIDAD DE ALUMNOS QUE OBTUVIERON LA NOTA DE 100: ${not_100}
MENOR QUE 100 Y MAYOR O IGUAL A 90: ${not_a}
MENOR QUE 90 Y MAYOR O IGUAL A 80: ${not_b}
MENOR QUE 80 Y MAYOR O IGUAL A 70: ${not_c}
MENOR QUE 70 Y MAYOR O IGUAL A 60: ${not_d}`);
