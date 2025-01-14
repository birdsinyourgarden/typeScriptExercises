/*
 * Dado el código siguiente, tendremos que crear una interfaz que sirva
 * después para validar el objeto.
 */

/*
let camaleon = {
  tipo: "reptil",
  peculiaridad: "camuflarse"
}
*/

interface animal {
  tipo:string,
  peculiaridad:string,
  sizecm:number
}

const camaleon : animal = {
tipo: "reptil",
peculiaridad: "camuflarse",
sizecm: 20
}

console.log('CAMALEON', camaleon);