// Ciclo de un triángulo____________________________________________

sign = 1

for (i = 0; i < 7; i += 2) {
  //console.log(sign);
  //sign = "#" + sign;
  //sign += '#';
  //sign ++;
  //sign= sign + 2;
  //sign += 2;
  console.log(i)
}

// FizzBuzz !!_________________________________________________-

let n = 9
if (n % 3 === 0 && n % 5 === 0) {
  console.log('bizz-buzz')
} else if (n % 3 === 0) {
  console.log('bizz')
} else if (n % 5 === 0) {
  console.log('buzz')
} else console.log(`${n} no es divisible de 3, ni de 5`)

// 2 - Clever Solution 
for (let n = 1; n <= 100; n++) {
  let output = ''

  if (n % 3 == 0) {
    output += 'Fizz'
  }

  if (n % 5 == 0) {
    output += 'Buzz'
  }

  console.log(output || n)
}

// Tablero de ajedrez_________________________________________________

for (i = 0; i < 8; i++) {
  i % 2 === 0 ? console.log(' # # # #') : console.log('# # # #')
}
//otra forma
for (let string = '#'; string.length != 7; string += '#') {
  console.log(string)
}

