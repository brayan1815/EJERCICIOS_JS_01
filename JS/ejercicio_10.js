

const ingredi=function(piz){
    let pedido="";
    piz=parseInt(piz);0
    if(piz===1){
        ingre=prompt(`INGREDIENTES VEGETARIANOS:
            1----Pimiento
            2----Tofu`);
        ingre=parseInt(ingre);
        if(ingre===1){
            pedido="Mozzarella, tomate y pimiento";
        }else if(ingre===2){
            pedido="Mozzarella, tomate y Tofu";
        } else pedido="El ingrediente ingresado no es valido";
    }
    else if(piz===2){
        ingre=prompt(`INGREDIENTES VEGETARIANOS:
            1----Pepperoni
            2----Sallmon
            3----Jamon`);
        ingre=parseInt(ingre);
        if(ingre===1){
            pedido="Mozzarella, tomate y pepperoni";
        }else if(ingre===2){
            pedido="Mozzarella, tomate y salmon";
        }else if(ingre===3){
            pedido="Mozzarella, tomate y jamon";
        }else pedido="El ingrediente ingresado no es valido";
    }else pedido=="OPCION NO VALIDA";

    return alert(pedido);
}

let piz=prompt(`Desea una pizza vegetariana?
    1---- si
    2---- no`);

ingredi(piz);