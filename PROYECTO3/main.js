localStorage.setItem('nombre','movil de Raul');
localStorage.setItem('nombre2','album de Brito');

//alert(localStorage.getItem('nombre2'));

let aFrutas = ['kiwi','movil de Raul','fruta del dragon'];
console.log(aFrutas);
localStorage.setItem('arrayFrutas',JSON.stringify(aFrutas));
let otrasFrutas = JSON.parse(localStorage.getItem('arrayFrutas'));
console.log(otrasFrutas);
