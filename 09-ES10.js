let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat());

let array = [1,2,3,4,5];
console.log(array.flatMap( value => [value, value * 2]));

let hola = '             hola           Mundo             ';
console.log(hola);
console.log(hola.trimStart());
console.log(hola.trimEnd());

//OPTIAL CATCH
try{

}catch{
    error
}

//FROM ENTRIES (clave valor en objetos) Dew arreglo a objetos
let entries = [["name", "adrian"],  ["age", 27]];
console.log(Object.fromEntries(entries));


let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);