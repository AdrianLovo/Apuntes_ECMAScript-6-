//MULTILINEA
//antes de es6
let lorem = "lorem  primera linea \n"
+ "otra frase del string";
console.log(lorem);

//es6
let lorem2 = `Otra frase epica que necesitamos
Ahora es otra frase epica`;
console.log(lorem2);


//DESESTRUCTURANDO ELEMENTOS
//antes de es6
let person = {
    'name': 'Adrian',
    'age': 27,
    'country': 'ES'
}
console.log(person.name, person.age, person.country);

//es6
let{name,age,country} = person;
console.log(name, age, country);


//OPERADOR DE PROPAGACION
//es6
let team1 = ['Adrian', 'Oscar', 'Juan'];
let team2 = ['Diana', 'Mario', 'Jose'];
let education = ['David', ... team1, ...team2];
console.log(education);


//LET y CONST
//antes de es6
{
    var global = 'GLOBAL'    
}
console.log(global);

//es6
{
    let globalLet = 'GLOBAL LET';    
}
console.log(globalLet);     //is not defined