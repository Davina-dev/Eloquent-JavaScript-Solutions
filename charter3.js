//  Sesión 2: funciones

//Mínimo (Escribe una función min que tome dos argumentos y retorne su mínimo.)

function minNumber(a, b) {
  return Math.min(a, b);
}

console.log(minNumber(9, 3));


//Recursión***********************************
let isEven = true;


function numberEven(nEntero) {
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


numEntero(-4.6787);


//Conteo de frijoles
 string = "";
function contarFs(string){
console.log();
}
contarFs("kjh");
//function contarCaracteres( string, caractercontado){}