let saldo=parseFloat(prompt("Por favor ingrese el saldo: "));

if(saldo<100000){
    let interes=(saldo*0.03);
    let sald_nue=saldo+interes;
    alert(`EL SALDO FINAL ES DE: ${sald_nue}
LOS INTERESES QUE SE PAGARON FUERON ${interes}`);
}else if(saldo>=100000){
    let interes=(saldo*0.04);
    let sald_nue=saldo+interes;
    alert(`EL SALDO FINAL ES DE: ${sald_nue}
LOS INTERESES QUE SE PAGARON FUERON: ${interes}`);
}