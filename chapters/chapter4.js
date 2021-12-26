//  Sesión 3: arrays
//Las propiedades que contienen funciones generalmente son llamadas metodos del valor al que pertenecen. Como en, “toUpperCase es un método de string”.
//Los arrays son, entonces, solo un tipo de objeto especializado para almacenar secuencias de cosas. 


// EJERCICIOS

//ej Suma de un rango******************

function rango (inicio, final, optional){
    //optional == undefined ? console.log('no usas parametro opcional') :console.log(optional + ' es el opcional')  ;

if(optional !=undefined ){
    arrayNum = [];
    for(i=inicio; i<=final; i += optional){
        arrayNum.push(i);
    } 
}else{
    arrayNum = [];
        for(i=inicio; i<=final; i++){
            arrayNum.push(i);
        }
    }
        return arrayNum;

}


function sum(arrayNum){  
    suma = 0;
    for(var i = 0; i < arrayNum.length; i++){   
       suma +=arrayNum[i];  
    }
       return suma;
}



console.log(rango(2, 5));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(rango(1, 10)));
// → 55 

//funcion rango con parametro opcional ????
console.log(rango(5, 2, -1));
// → [5, 4, 3, 2] no funciona!!!!!!!!





/*ej Revirtiendo un array *************


let arr = [1,2,5,7,8,9];


function revertirArray(arr){


revertirArray(arr);


function revertirArrayEnSuLugar(){
  
};







//ej Una lista *************************





//Comparación profunda *****************/