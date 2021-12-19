//  Sesión 3: arrays

let ouch = "Ouch";
console.log(typeof ouch.toUpperCase);
// → function
console.log(ouch.toUpperCase());
// → OUCH



//ej Suma de un rango******************

function rango (inicio, final){
    arrayNum = [];
        for(i=inicio; i<=final; i++){
            arrayNum.push(i);
        }
        return arrayNum;
}

function sum(arrayNum){

}

//funcion rango con parametro opcional ????

console.log(rango(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));
// → [5, 4, 3, 2] no funciona!!!!!!!!
console.log(sum(rango(1, 10)));
// → 55 no funciona!!!!!!!!!!!!!!!!!!!








//ej Revirtiendo un array *************

array=[];
function revertirArray(array){
    array.forEach(element => {
       
    });
    
}
function revertirArrayEnSuLugar(){
    array=[]
}

console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// → [5, 4, 3, 2, 1]





//ej Una lista *************************





//Comparación profunda *****************