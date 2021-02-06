function exibir_todos() {
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<12; i++){
        elementos[0].children[0].children[i].style="display:inline-block";
    }
}

function exibir_categorias(categorias) {
    let elementos = document.getElementsByClassName('celula');
    for(let i = 0; i < 12; i++){
        if (categorias === elementos[0].children[0].children[i].id)
            elementos[0].children[0].children[i].style="display: inline-block";
            
        else{
            elementos[0].children[0].children[i].style="display:none";
        }
        //console.log(elementos)
    }
}

const ampliar = (images) => {
    if (images.style.width === "106px") {
        images.style.width = "53px";
    }
    else {
        images.style.width = "106px";
    }
}

const reduzir = (images) => {
    if (images.style.width === "53px") {
        images.style.width = "106px";
    }
    else {
        images.style.width = "53px";
    }
}
 