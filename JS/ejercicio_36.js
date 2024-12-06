const ingre=function(gr_chocolate){
    let cat_har=(gr_chocolate*100)/10
    
    return cat_har;
}

let gr_chocolate=parseFloat(prompt("Por favor ingrese los gramos de chcolate co los que desea hacer el postre:"));
alert(`La cantidad de haria que debera agregar para hacer el postre es: ${ingre(gr_chocolate)}`);