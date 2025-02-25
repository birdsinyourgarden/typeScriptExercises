/* Convertir las siguientes funciones a funciones flecha 

function obtenerDoble( a, b ){
  return (a + b) * 2
}

function obtenerTriple( a, b, c ){
  return (a + b +c) * 3
}
  
*/

let obtenerDoble = ( a:number, b:number ) => (a + b) * 2;
console.log('OBTENERDOBLE', obtenerDoble(2,3));  // 5*2 = 10

let obtenerTriple = ( a:number, b:number, c:number ) => (a + b +c) * 3;
console.log('OBTENERTRIPLE', obtenerTriple(2,3,5));  // 10*3 = 30