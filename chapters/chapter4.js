                                            //  🤓 Estructuras de Datos: Objetos y Arrays 👾//


/*✌🏼  ej1:La suma de un rango
- Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.

Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.

Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado para cuando 
construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior.
 La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos 
 para que rango(5, 2, -1) produzca [5, 4, 3, 2].*/

function rango(inicio, fin, ordenDePaso = inicio <= fin ? 1 : -1) {
  let resultado = []

  for (
    let i = inicio;
    ordenDePaso >= 0 ? i <= fin : i >= fin;
    i += ordenDePaso
  ) {
    resultado.push(i)
  }
  return resultado
}

function suma(numeros) {
  resultadoSuma = 0
  for (let numero of numeros) {
    resultadoSuma += numero
  }
  return resultadoSuma
}

console.log(rango(5, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(2, 10, 2))
// → [1, 3, 5, 7, 9]
console.log(rango(5, 2, -1))
// → [5, 4, 3, 2]
console.log(suma(rango(1, 10)))
// → 55

/* ✌🏼 ej Revirtiendo un array sin usar reverse
- Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, 
escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un 
nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace 
el métodoreverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.

Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior, qué variante esperas 
que sea útil en más situaciones? Cuál corre más rápido? */

function revertirArray(array) {
  resultado = []
  for (let item of array) {
    resultado.unshift(item)
  }
  return resultado
}

function revertirArrayEnSuLugar(array) {
  let lengthArray = array.length
  for (let i = 0; i < Math.floor(lengthArray / 2); i++) {
    console.log(
      i,
      lengthArray - i - 1,
      array[i],
      array[lengthArray - i - 1],
      array,
    )
    let intercambio = array[i]
    array[i] = array[lengthArray - i - 1]
    array[lengthArray - i - 1] = intercambio
  }
  return array
}

console.log(revertirArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5]

revertirArrayEnSuLugar(valorArray) //?
console.log(valorArray) //?
// → [5, 4, 3, 2, 1]



/*❌ Una lista
Los objetos, como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos. 
Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos, 
con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente.

let lista = {
  valor: 1,
  resto: {
    valor: 2,
    resto: {
      valor: 3,
      resto: null
    }
  }
};
Los objetos resultantes forman una cadena, como esta:

Una lista vinculada
Algo bueno de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos 
nuevos valores {valor: 0, resto: lista} y {valor: -1, resto: lista} (con lista refiriéndose a la vinculación definida anteriormente),
 ambos son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue
  siendo una lista válida de tres elementos.

Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento.
 También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome un elemento 
 y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una lista y un número y 
 retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.

Si aún no lo has hecho, también escribe una versión recursiva de posicion.

*/








/*❌ Comparación profunda
El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.

Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con
 las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.

Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades 
comparadas, puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda.
 Pero tienes que tomar una excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos. */
console.log("igualdad profunda:");

function igualdadProfunda(a, b) {
  if (a === b) {
    return true
  } else if (
    typeof a === 'object' &&
    a !== null &&
    typeof b === 'object' &&
    b !== null
  ) {
    //typeof null también produce "object"
    let keys = Object.keys(a).concat(Object.keys(b)) //Object.keys-> útil para revisar las propiedades de los objetos para compararlos.
    console.log(keys)
  }
}

console.log(igualdadProfunda(object, object))
