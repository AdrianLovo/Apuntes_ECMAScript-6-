//OPERADOR DE REPOSO
const obj = {
    name: 'Adrian',
    age: 27,
    country: 'El Salvador'
}

let {age, ...all} = obj;
console.log(age, all);


//UNIR OBJETOS EN UNO NUEVO
const obj1 = {
    name: 'Adrian',   
}

const obj2 = {
    ... obj1,
    country: 'El Salvador'
}

console.log(obj2);


//PROMISES FINALLY (cuando a finalizado una promesa)
const holaMundo = () => {
    return new Promise((resolve, reject) => {

        (true)
            ? resolve('Hola Mundo')
            : reject(new Error('Test error'))

    });
}

holaMundo()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const mes = match[2];
const dia = match[3];
console.log(year, mes, dia);

