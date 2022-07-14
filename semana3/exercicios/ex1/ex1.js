var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];
var listaEmDobro = [];

// listaNumeros.forEach( function(item,i){
//    item = item * 2;

// }) porque isso não funciona

listaNumeros.forEach( function(item,i){
    listaNumeros[i] = item *2;

})

console.log(listaNumeros)