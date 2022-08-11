var obj = [
    { name: 'Max', age: 23 },
    { name: 'John', age: 20 },
    { name: 'Caley', age: 18 }
];
 
var found = obj.find(e => e.name === 'John');
console.log(found);

// Método findIndex

var obj = [
    { name: 'Max', age: 23 },
    { name: 'John', age: 20 },
    { name: 'Caley', age: 18 }
];
 
var index = obj.findIndex(e => e.name === 'John');
if (index !== -1) {
    console.log(obj[index]);
}
 
/*
    Output: { name: 'John', age: 20 }
*/


var index = obj.findIndex(e => e.name === 'John');
let dados;
if (index !== -1) {
    dados = obj[index];
}
console.log(dados)