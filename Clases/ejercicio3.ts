/*
 * A partir del ejercicio anterior deberá sacar 2 clases con
 * una padre de la cual heredar factores comunes.
 *
 * Deberás crear una clase para contemplar un rectángulo y un triángulo con dos * propiedades:
 * 1 → Base
 * 2 → Altura
 *
 * También deberá tener un método para calcular el área en el rectángulo:
 *(Base*Altura) y en el triángulo: ((Base*Altura)/2)
 */

/**
 * Clase Figura que será una clase padre de la que hereda cada figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */

/**
 * Clase Figura que será una clase padre de la que hereda cada figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
class Figura {
    public base:number;
    public altura:number;

    constructor(base:number, altura:number) {
        this.base = base;
        this.altura = altura
    }
}

/**
 * Clase Rectángulo que hereda de Figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
class Rect extends Figura {
    constructor(base:number, altura:number) {
        super(base, altura);
    }

    public calcularArea() {
        return this.base * this.altura;
    }
}
console.log('RECTANGULO-1', new Rect(2,6).calcularArea());
console.log('RECTANGULO-2', new Rect(3,9).calcularArea());

/**
 * Clase Triángulo que hereda de Figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
class Triangulo extends Figura {
    constructor(base:number, altura:number) {
        super(base, altura);
    }

    public calcularArea() {
        return (this.base * this.altura)/2;
    }
}
console.log('TRIANGULO-1', new Triangulo(2,6).calcularArea());
console.log('TRIANGULO-2', new Triangulo(3,9).calcularArea());