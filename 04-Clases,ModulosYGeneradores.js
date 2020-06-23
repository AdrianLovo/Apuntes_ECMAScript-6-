//CLASES
class Calculadora{
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }

    sumar(valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB
    }
}

const calc = new Calculadora();
console.log(calc.sumar(2,2));


//MODULOS
import { hello } from '04-Modulo';
hello();


//GENERETOR
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next());
console.log(generatorHello.next());