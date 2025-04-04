//1.-FUNCION SUMAR PARES

function sumarPares(array) {
    let suma = 0;
    for (let index = 0; index < array.lenght; index++){
        if (array[index] % 2 === 0) {
            suma += array[index];
        }
    }
    return suma;
}

$misuma = sumarPares([1,2,3,4,5,6]);
console.log($misuma);

//2.- Invertir Array

function invertirArray(miarray){
    let arrayInvertido = [];
    for (let index = miarray.length-1; index >=0; index--) {//Recoge los elementos, del mayor-1 hasta el 0 (INDEX--) Y TERMINA CUANDO INDEX ES MENOR QUE 0
        arrayInvertido.push(miarray[index]);
    }
    return arrayInvertido;
}

let aEjemplo = invertirArray(["a","b","c","d"]);
console.log(aEjemplo);

//CONSOLA DE NUMEROS DEL 1 AL 100

for (let index = 1; index <= 100; index++){
    if((index % 3==0)&&(index % 5==0)){
        console.log("FizzBuzz");
    }
    else if (index % 3 === 0) {
        console.log("Fizz");
    }
    if (index % 5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log(index);
    }
}