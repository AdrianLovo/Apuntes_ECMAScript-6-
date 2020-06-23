const holaMundo = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() =>  resolve('Hola Mundo'), 3000)
        : reject(new Error('Test Error'))
    });
}

//1º forma de ejecutar
const HolaAsync = async () => {
    const hola = await holaMundo();
    console.log(hola);
}

HolaAsync();

//2º forma de ejecutar para manejar los errores
const otraFuncion = async() => {
    try{
        const hola = await holaMundo();
        console.log(hola);
    }catch(error){
        console.log(error)
    }
}

otraFuncion();