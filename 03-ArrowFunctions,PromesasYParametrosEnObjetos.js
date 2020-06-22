//PARAMETROS EN OBJETOS
let name = 'Adrian';
let age = 27;

//antes de es6
obj = {name: name, age: age};
console.log(obj);

//es6
obj2= {name, age}
console.log(obj2);


//ARROW FUNCTIONS
const names = [
    {name: 'Adrian', age: 27},
    {name: 'Adrian2', age: 27},
    {name: 'Adrian3', age: 27}
];

//antes de es6
let listOfNames = names.map(function(item){
    console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

    
//PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey');
        }else{
            reject('Ups!');
        }        
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))