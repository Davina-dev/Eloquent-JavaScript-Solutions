//  Sesión 2: funciones

//Mínimo (Escribe una función min que tome dos argumentos y retorne su mínimo.)

function minNumber(a, b) {
  return Math.min(a, b);
}

console.log(minNumber(9, 3));


//Recursión***********************************

//no es recursivo, no es lo que piden
function numberEven(nEntero) {
  let isEven = true;
  if (nEntero % 2 == 0) {
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

//recursivo

function esPar(n){   
  if(n==0){
    return true;
  };
  if(n==1){
    return false;
  } 
  return (esPar(n-= 2));
};


console.log(esPar(50))

// conteo de frijoles 

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

//ultimo caracter array: string.length - 1

function contarCaracteres(string, char){
 
  let conteo = 0 ;

    for(i=0; i< string.length; i++){
      if(string[i] == char){
        conteo++;
      }
    }
  return conteo;
}

console.log(contarCaracteres('davina','d'));


//function contarCaracteres(palabra , caracter){};

