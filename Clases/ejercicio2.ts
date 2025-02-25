/*
 * Deberás crear una clase para contemplar un rectángulo con dos propiedades:
 * 1 → Base
 * 2 → Altura
 *
 * También deberá tener un método para calcular el área (Base*Altura), este
 * método deberá devolver un valor numérico.
 */

class Rectangulo {
    private base: number;
    private altura: number;

    constructor(base: number, altura:number) {
        this.base = base;
        this.altura = altura;
    }

    public calcularArea() {
        return this.base * this.altura;
    }
}

console.log('RECTANGULO-1', new Rectangulo(2,6).calcularArea());
console.log('RECTANGULO-2', new Rectangulo(3,9).calcularArea());