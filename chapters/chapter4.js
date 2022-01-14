//  Estructuras de Datos: Objetos y Arrays



//ej1:La suma de un rango.


function rango(inicio, fin, ordenDePaso = inicio <= fin ? 1 : -1) {
    let resultado = [];
 
    for(let i = inicio; ordenDePaso >= 0 ? i <= fin: i >= fin; i+=ordenDePaso) {
      resultado.push(i);
    }
    return resultado;
  }
  
  function suma(numeros) {
    resultadoSuma = 0;
    for(let numero of numeros) {
      resultadoSuma += numero;
    }
    return resultadoSuma;
  }
  
  console.log(rango(5, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(rango(2, 10, 2));
  // → [1, 3, 5, 7, 9]
  console.log(rango(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(suma(rango(1, 10)));
  // → 55

  


//ej Revirtiendo un array *************


function revertirArray(array) {
  resultado = [];
  for (let item of array) {
    resultado.unshift(item);
  }
  return resultado;
}

//❌ me cuesta  entender la función ((lengthArray/2)?)
function revertirArrayEnSuLugar(array) {
  let lengthArray= array.length;
  for (let i = 0; i < Math.floor(lengthArray/2); i++) {
    console.log(i, lengthArray-i-1, array[i], array[lengthArray-i-1], array);
    let intercambio = array[i];
    array[i] = array[lengthArray-i-1];
    array[lengthArray-i-1] = intercambio;
  }
  return array;
}


console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];

revertirArrayEnSuLugar(valorArray); //?
console.log(valorArray);//?
// → [5, 4, 3, 2, 1]





//❌ ej Una lista / !=array / ==conjunto anidado de objetos, el primer objeto contenie referencia al segundo, el segundo al tercero,etc.





//❌ Comparación profunda 

function igualdadProfunda(a, b) {
    if (a === b) {
      return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) { //typeof null también produce "object"
      let keys = Object.keys(a).concat(Object.keys(b)); //Object.keys-> útil para revisar las propiedades de los objetos para compararlos.
      console.log(keys);
      }
}
  
  
console.log(igualdadProfunda(object, object));