const dine=function(){
    let precio_llave=11500;
    let precio_bomba=1168000;
    let caja_perno=87000;

    let vuelto=91000;

    let tot=(5*precio_llave)+precio_bomba+(3*caja_perno);
    tot=tot+vuelto;

    return tot;
}

alert(`El dinero que tenia el maestro de obra es: ${dine()}`);