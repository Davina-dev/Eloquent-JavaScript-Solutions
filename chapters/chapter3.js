                                                        // 🤓 Sesión 2: funciones 👾 //

//✌🏼 Mínimo ***************** (Escribe una función min que tome dos argumentos y retorne su mínimo.)

function minNumber(a, b) {
  return Math.min(a, b);
}

console.log(minNumber(9, 3));


/*✌🏼 Recursión***********************************
Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

Zero es par.

Uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto? */


//no es recursivo, no es lo que piden
function numberEven(nEntero) {
  let isEven = true;
  if (nEntero % 2 === 0) {
    console.log(isEven);
  } else {
    console.log(!isEven);
  }
}


function numEntero(n){
 
    let nPositivo = Math.trunc(n);
    console.log(nPositivo);
    let nEntero = Math.abs(nPositivo);
    console.log(`el núm convertido es ${nEntero}. ¿es numero  par?`); 
    numberEven(nEntero)
}


numEntero(-77);

//Recursivo


function esPar(n){   
  if(n===0){
    return true;
  };
  if(n===1){
    return false;
  } 
  return (esPar(n-= 2));
};


console.log(esPar(50))

/* ❌ Conteo de frijoles **************************
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene 
solo un carácter (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición 
string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.

Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas 
haya en el string.

Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica 
el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de 
esta nueva función. */


function contarFs(string){
 
  let caracter = [] ;

    for(i=0; i< string.length; i++){
      if(string[i] === 'K'){
        caracter.push('K');
      }
    }
    return caracter;
  }
  


console.log(contarFs("KjhFjhKKFF"));

//✌🏼 ultimo caracter array: string.length - 1

function contarCaracteres(string, char){
 
  let conteo = 0 ;

    for(i=0; i< string.length; i++){
      if(string[i] === char){
        conteo++;
      }
    }
  return conteo;
}

console.log(contarCaracteres('davina','d'));


//❌ function contarCaracteres(palabra , caracter){};

