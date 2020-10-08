function exibir_categorias(categoria){
    let elementos = document.getElementsByClassName('itens');
    for(let i=0; i<elementos.length; i++){
        if (categoria == elementos[i].id)
            elementos[i].style="display: inline-block";
        else
            elementos[i].style="display:none";
    }
};

let exibir_todos = () => {
    let elementos = document.getElementsByClassName('itens');
    for(let i=0; i<elementos.length; i++){
        elementos[i].style="display:inline-block";
    }
};

let aumentar = (image) => {
    if (image.width==53 || image.width==55 || image.width==61 || image.width==75 || image.width==92 || image.width==103 || image.width==109)
        image.width=(image.width)*2
    else 
        image.width/=2;
};