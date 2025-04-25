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

//ESCRIBE FUNCIONES MENOR4 MENOR16

function menor2(a,b){
    if(a<b) return a;
    else return b;
}

console.log(menor2(4,5));

function menor4(a,b,c,d){
    let m1 = menor2(a,b);
    let m2 = menor2(c,d);

    return menor2(m1,m2);
}

console.log(menor4(2,3,4,5));

function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,p);

    return menor4(m1,m2,m3,m4);
}
console.log(menor16(9,8,7,6,5,4,3,2,1,0,7,9,55,4,3,-5));


function menor3(a,b,c){
    let r1 = menor2(a,b);
    return menor2(r1,c);
}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor3(m,n,o);

    return menor4(m1,m2,m3,m4);
}

console.log(menor15(1,2,3,4,5,6,7,8,9,10,11,12,13,14,-15));

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,m3);

    return menor4(m1,m2,m3,m4);
}

//ARRAY aPERSONAS

const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"];

let aux = aPersonas[1];
aPersonas[1] = aPersonas[2];
aPersonas[2] = aux;

console.log(aPersonas);

//Crea una matriz de 3x3 numérica

let matriz = [[1,2,3],[3,3,3],[4,3,9]];

console.log(matriz);

console.log(matriz[1]);
//De esta manera seleccionamos fila 2, columna 3. (el tercer número).
console.log(matriz[1][2]);
//Seleccionamos fila 3, columna 1.
console.log(matriz[2][1]);

//Crea un objeto o registro que modele un alumno con información.

let alumno = {
    nombre : "Begoña",
    nLista : 13,
    asignatura: "ISO",
    notas: [10,5,6,4]
};

console.log(alumno);

//Escribe una función que devuelva el lanzamiento de un dado de 10 caras.

function dado10(){
    return Math.floor(Math.random()*10)+1;
}

console.log(dado10);

//Ejercicio botón js
function iniciar(){
const miBoton = document.getElementById("miBoton");
miBoton.addEventListener ('click', () => {
    let parra = document.getElementById("miParrafo");
    parra.style.color="green";
});
}