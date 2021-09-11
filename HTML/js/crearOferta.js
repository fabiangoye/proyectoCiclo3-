function subcategoria(){
    var cat = document.getElementsById('slCategoria').value;
    let subS = document.getElementById('divSubcategoriaS');
    
    let subP = document.getElementById('divSubcategoriaP');

    if ( cat = 'servicio'){ 
        subS.style.setProperty('display', 'block');
    }else if (document.getElementsById('slCategoria').value ='producto'){
        subP.style.setProperty('display','block');
    }
}