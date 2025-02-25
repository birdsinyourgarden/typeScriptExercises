/*
 * La siguiente función contendrá parámetros obligatorios, opcionales y otros
 * serán por defecto si no le pasamos ninguno.
 *
 * Deberás adaptarlos de la siguiente forma:
 * nombre → obligatorio
 * edad → opcional
 * arma → por defecto u omisión será "pistola"
 */
/*

function getVillano( nombre, edad, arma ) {
  let mensaje;
  if( edad ) {
    mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + edad
  }
};

*/

let getVillano = ( nombre:string, arma:string = 'pistola', edad?:number ) => {
  let mensaje: string;
  if( edad ) {
    mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + edad
  }
  return mensaje;
};

console.log('GETVILLANO', getVillano);
console.log('GETVILLANO(Malo1)', getVillano('Malo1'));
console.log('GETVILLANO(Malo2,escopeta)', getVillano('Malo2','escopeta'));
console.log('GETVILLANO(Malo3,cuchillo,21)', getVillano('Malo2','cuchillo',21));
console.log('GETVILLANO(Malo4,,76)', getVillano('Malo2','',76));