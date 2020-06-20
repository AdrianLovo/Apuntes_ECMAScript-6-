//PARAMETROS
//antes de es6 
function newFunction(name, age, country){
    var name = name || 'Adrian';
    var age = age || 27;
    var country = country || 'El Salvador';
    console.log(name, age, country);
}
newFunction();

//es6
function newFunction2(name = 'Adrian', age = 27, country = 'El Salvador'){
    console.log(name, age, country);    
}
newFunction2();


//CONCATENACION
//antes de es6
let hello = 'Hola';
let world = 'Mundo';
let frase = hello + ' ' + world;
console.log(frase);

//es6 (template literal)
let frase2 = `${hello} ${world}`;
console.log(frase2);